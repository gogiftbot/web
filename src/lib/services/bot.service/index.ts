import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
import { config } from "../config.service";
import prisma from "@/lib/prisma";
import {
  Prisma,
  transaction,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";
import { tonService } from "../ton.service";
import EventEmitter from "events";
import { numberToString } from "@/lib/utils/number";
import { ReferralService } from "../referral.service";
import { CaseService } from "../case.service";

const welcomeMessageImage = "https://gogift.vercel.app/start_image.png";

const welcomeMessage = (name: string) => `🎉 ${name.replace(
  /([_*\[\]()~`>#+\-=|{}.!])/g,
  "\\$1"
)}, you are a legend! 🎉

🎁 Gifts don’t wait. Open. Win. Repeat.
🎮 GoGift — where surprises drop daily.`;

const options = (referral?: string): TelegramBot.SendMessageOptions => ({
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Start",
          url: `https://t.me/${config.BOT_NAME}${
            referral ? `?startapp=${referral}` : ""
          }`,
        },
      ],
      [
        {
          text: "Join Channel",
          url: "https://t.me/GoGift_announcements",
        },
      ],
      [
        {
          text: "Support",
          url: "https://t.me/GoGift_Support",
        },
      ],
    ],
  },
});

function arrayAsTable<T extends Record<string, string | number>>(
  data: T[],
  maxColumnWidth = 7
) {
  if (!data.length) return "Нет данных для отображения";

  const headers = Object.keys(data[0]);

  const truncate = (text: string) => {
    if (text.length <= maxColumnWidth) return text;
    return text.substring(0, maxColumnWidth).padEnd(maxColumnWidth, " ");
  };

  let table = headers.map((h) => truncate(h)).join(" │ ") + "\n";
  table += headers.map((_) => "─".repeat(maxColumnWidth)).join("─┼─") + "\n";

  data.forEach((item) => {
    const row = headers.map((header) => {
      let value = item[header];
      if (value === undefined || value === null) value = "";
      return truncate(String(value)).padEnd(maxColumnWidth, " ");
    });

    table += row.join(" │ ") + "\n";
  });

  return `<pre>${table}</pre>`;
}

const getTransactions = async (options?: {
  accountId?: string;
  type?: TransactionType;
  dateGte?: Date;
}) => {
  const where: Prisma.transactionFindManyArgs["where"] = {
    status: "completed",
  };

  if (options?.accountId) {
    where.accountId = options.accountId;
  }

  if (options?.type) {
    where.type = options.type;
  }

  if (options?.dateGte) {
    where.createdAt = {
      gte: options.dateGte,
    };
  }

  const txs = await prisma.transaction.findMany({
    where,
    select: {
      amount: true,
    },
  });

  return `${numberToString(txs.reduce((t, tx) => t + tx.amount, 0))} TON`;
};

export class BotService {
  private chatId = "-1002657439097";
  private bot: TelegramBot;
  emitter = new EventEmitter();

  constructor(polling = false) {
    this.bot = new TelegramBot(config.BOT_API_KEY, {
      polling: polling
        ? {
            interval: 1000,
          }
        : false,
    });
  }

  public listen() {
    this.bot.on("error", (error) => {
      console.error(error);
    });

    this.bot.onText(
      /\/update\s+['"]([^'"]+)['"]\s+([\d.]+)/,
      async (msg, match) => {
        if (msg.chat.id.toString() !== this.chatId) return;

        if (!match || !match[1] || !match[2]) {
          return this.bot.sendMessage(
            this.chatId,
            "Некорректный формат команды. Используйте: /update {title} {price}"
          );
        }

        try {
          const price = parseFloat(match[2]);
          let title = match[1].trim();
          if (title.startsWith('"') && title.endsWith('"')) {
            title = title.slice(1, -1);
          } else if (title.startsWith("'") && title.endsWith("'")) {
            title = title.slice(1, -1);
          }

          const g_case = await prisma.gift_case.findFirst({
            where: {
              title: {
                equals: title,
                mode: "insensitive",
              },
            },
            select: {
              id: true,
              price: true,
            },
          });

          if (!g_case) {
            await this.bot.sendMessage(
              this.chatId,
              `Кейс с таким названием не найден (${title})`
            );
            return;
          }

          const updated = await prisma.gift_case.updateManyAndReturn({
            where: {
              id: g_case.id,
            },
            data: {
              price,
            },
            select: {
              title: true,
              price: true,
            },
          });

          const options: SendMessageOptions = {
            parse_mode: "HTML",
          };

          const formattedJson = JSON.stringify(updated, null, 2);
          const message = `<pre><code class="language-json">${formattedJson}</code></pre>`;
          await this.bot.sendMessage(this.chatId, message, options);
        } catch (error) {
          console.error(error);
          await this.bot.sendMessage(
            this.chatId,
            `⚠️ Error: ${(error as Error).message}`
          );
        }
      }
    );

    this.bot.onText(/\/case_price/, async (msg) => {
      if (msg.chat.id.toString() !== this.chatId) return;

      const analytics = await CaseService.analytics();

      const data = analytics.map((item) => ({
        case: item.case,
        price: `${numberToString(item.price)} TON`,
        "price (0%)": `${numberToString(item.price_0_margin)} TON`,
        "price (50%)": `${numberToString(item.price_50_margin)} TON`,
      }));

      const options: SendMessageOptions = {
        parse_mode: "HTML",
      };

      const formattedJson = JSON.stringify(data, null, 2);
      const message = `<pre><code class="language-json">${formattedJson}</code></pre>`;
      await this.bot.sendMessage(this.chatId, message, options);
    });

    this.bot.onText(/\/ref/, async (message) => {
      if (message.chat.id.toString() !== this.chatId) return;

      const accounts = await prisma.account.findMany({
        select: {
          id: true,
          transactions: {
            select: {
              id: true,
              amount: true,
              type: true,
              status: true,
            },
          },
          referredBy: {
            select: {
              account: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      });
      const obj: Record<
        string,
        {
          username: string;
          accounts: number;
          deposit: number;
          withdraw: number;
        }
      > = {};

      for (const acc of accounts) {
        const username = acc.referredBy?.account.username || "unknown";
        if (!obj[username]) {
          obj[username] = {
            username,
            accounts: 0,
            deposit: 0,
            withdraw: 0,
          };
        }
        const deposit = acc.transactions
          .filter((tx) => tx.status === "completed" && tx.type === "deposit")
          .reduce((t, tx) => t + tx.amount, obj[username].deposit);
        const withdraw = acc.transactions
          .filter((tx) => tx.status === "completed" && tx.type === "withdraw")
          .reduce((t, tx) => t + tx.amount, obj[username].withdraw);
        obj[username] = {
          username,
          accounts: obj[username].accounts + 1,
          deposit,
          withdraw,
        };
      }

      const arr = Object.values(obj)
        .filter((o) => !!o.accounts)
        .sort((a, b) => b.accounts - a.accounts)
        .slice(0, 10)
        .map((item) => ({
          ...item,
          deposit: numberToString(item.deposit),
          withdraw: numberToString(item.withdraw),
        }));

      const tableMessage = arrayAsTable(arr);
      await this.bot.sendMessage(this.chatId, tableMessage, {
        parse_mode: "HTML",
      });
    });

    this.bot.onText(/\/stat/, async (message) => {
      if (message.chat.id.toString() !== this.chatId) return;

      const accounts = await prisma.account.count();

      const data = {
        deposit: await getTransactions({ type: "deposit" }),
        withdraw: await getTransactions({ type: "withdraw" }),
        last_24_hours: {
          deposit: await getTransactions({
            type: "deposit",
            dateGte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          }),
          withdraw: await getTransactions({
            type: "withdraw",
            dateGte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          }),
        },
        accounts,
      };

      const formattedJson = JSON.stringify(data, null, 2);
      const jsonMessage = `<pre><code class="language-json">${formattedJson}</code></pre>`;

      const options: SendMessageOptions = {
        parse_mode: "HTML",
      };

      await this.bot.sendMessage(this.chatId, jsonMessage, options);
    });

    this.bot.onText(/\/create_ref/, async (message) => {
      if (message.chat.id.toString() !== this.chatId) return;

      const referral = await prisma.$transaction(async (tx) => {
        const referralService = new ReferralService();

        const referrals_count = await tx.account.count({
          where: {
            username: {
              startsWith: "referral_",
            },
          },
        });
        const account = await tx.account.create({
          data: {
            username: `referral_${referrals_count + 1}`,
          },
        });
        const referral = await referralService.createReferral(tx, {
          accountId: account.id,
        });
        return referral;
      });

      const data = {
        value: referral.value,
        link: `t.me/${config.BOT_NAME}?startapp=${referral.value}`,
      };

      const formattedJson = JSON.stringify(data, null, 2);
      const jsonMessage = `<pre><code class="language-json">${formattedJson}</code></pre>`;

      const options: SendMessageOptions = {
        parse_mode: "HTML",
      };

      await this.bot.sendMessage(this.chatId, jsonMessage, options);
    });

    this.bot.onText(/\/start/, async (message) => {
      try {
        const name = message.from?.username
          ? `@${message.from.username}`
          : "stranger";

        const account = await prisma.account.findFirst({
          where: {
            username: message.from?.username,
          },
          select: {
            referral: {
              select: {
                value: true,
              },
            },
          },
        });

        await this.bot.sendPhoto(message.chat.id, welcomeMessageImage, {
          caption: welcomeMessage(name),
          ...options(account?.referral?.value),
        });
      } catch (error) {
        console.error(error);
      }
    });

    this.bot.on("callback_query", async (callbackQuery) => {
      try {
        const data = callbackQuery.data;
        await this.bot.answerCallbackQuery(callbackQuery.id);

        if (data?.startsWith("w_r_a_")) {
          try {
            const transactionId = data.split("_").pop();
            if (!transactionId) throw new Error("InvalidTransactionId");
            if (!callbackQuery.message) throw new Error("InvalidMessage");

            const transaction = await this.withdraw({ transactionId });

            if (transaction.account.telegramId) {
              await this.bot
                .sendMessage(
                  transaction.account.telegramId,
                  `✅ Transaction created! Amount of ${numberToString(
                    transaction.amount
                  )} TON has been send to your wallet (${transaction.address}).`
                )
                .catch();
            }

            await this.bot.sendMessage(
              callbackQuery.message.chat.id,
              "✅ Success!",
              {
                reply_to_message_id: callbackQuery.message.message_id,
              }
            );
          } catch (error) {
            await this.bot.sendMessage(
              callbackQuery.message!.chat.id,
              `⚠️ Error: ${(error as Error).message}`,
              {
                reply_to_message_id: callbackQuery.message?.message_id,
              }
            );
          }
        }

        if (data?.startsWith("w_r_d_")) {
          try {
            const transactionId = data.split("_").pop();
            if (!transactionId) throw new Error("InvalidTransactionId");
            if (!callbackQuery.message) throw new Error("InvalidMessage");

            const transaction = await prisma.$transaction(async (tx) => {
              const transaction = await tx.transaction.findUniqueOrThrow({
                where: {
                  id: transactionId,
                  status: TransactionStatus.pending,
                },
                select: {
                  id: true,
                  amount: true,
                  account: { select: { id: true, telegramId: true } },
                },
              });

              await tx.account.update({
                where: { id: transaction.account.id },
                data: { balance: { increment: transaction.amount } },
              });

              await tx.transaction.update({
                where: {
                  id: transaction.id,
                },
                data: {
                  status: TransactionStatus.declined,
                },
              });

              return transaction;
            });

            if (transaction.account.telegramId) {
              await this.bot
                .sendMessage(
                  transaction.account.telegramId,
                  `❌ Transaction Declined! Amount of ${numberToString(
                    transaction.amount
                  )} TON has been added to your balance.`
                )
                .catch();
            }

            await this.bot.sendMessage(
              callbackQuery.message.chat.id,
              "❌ Declined!",
              {
                reply_to_message_id: callbackQuery.message.message_id,
              }
            );
          } catch (error) {
            await this.bot.sendMessage(
              callbackQuery.message!.chat.id,
              `⚠️ Error: ${(error as Error).message}`,
              {
                reply_to_message_id: callbackQuery.message?.message_id,
              }
            );
          }
        }

        if (data?.startsWith("g_w_r_a_")) {
          try {
            const transactionId = data.split("_").pop();
            if (!transactionId) throw new Error("InvalidTransactionId");
            if (!callbackQuery.message) throw new Error("InvalidMessage");

            await prisma.$transaction(async (tx) => {
              const transaction = await tx.transaction.findUniqueOrThrow({
                where: {
                  id: transactionId,
                  status: TransactionStatus.pending,
                },
                select: {
                  id: true,
                  account: { select: { telegramId: true } },
                },
              });

              await tx.transaction.update({
                where: {
                  id: transaction.id,
                },
                data: {
                  status: TransactionStatus.completed,
                },
              });

              return transaction;
            });

            await this.bot.sendMessage(
              callbackQuery.message.chat.id,
              "✅ Success!",
              {
                reply_to_message_id: callbackQuery.message.message_id,
              }
            );
          } catch (error) {
            await this.bot.sendMessage(
              callbackQuery.message!.chat.id,
              `⚠️ Error: ${(error as Error).message}`,
              {
                reply_to_message_id: callbackQuery.message?.message_id,
              }
            );
          }
        }

        if (data?.startsWith("g_w_r_d_")) {
          try {
            const transactionId = data.split("_").pop();
            if (!transactionId) throw new Error("InvalidTransactionId");
            if (!callbackQuery.message) throw new Error("InvalidMessage");

            const transaction = await prisma.$transaction(async (tx) => {
              const transaction = await tx.transaction.findUniqueOrThrow({
                where: {
                  id: transactionId,
                  status: TransactionStatus.pending,
                },
                select: {
                  id: true,
                  amount: true,
                  account: { select: { id: true, telegramId: true } },
                  account_giftId: true,
                },
              });

              if (!transaction.account_giftId) throw new Error("InvalidGift");

              await tx.account_gift.update({
                where: {
                  id: transaction.account_giftId,
                },
                data: {
                  isWithdraw: false,
                },
              });

              await tx.transaction.update({
                where: {
                  id: transaction.id,
                },
                data: {
                  status: TransactionStatus.declined,
                },
              });

              return transaction;
            });

            if (transaction.account.telegramId) {
              await this.bot
                .sendMessage(
                  transaction.account.telegramId,
                  `❌ Gift withdraw Declined! Gift has been added to your inventory.`
                )
                .catch();
            }

            await this.bot.sendMessage(
              callbackQuery.message.chat.id,
              "❌ Declined!",
              {
                reply_to_message_id: callbackQuery.message.message_id,
              }
            );
          } catch (error) {
            await this.bot.sendMessage(
              callbackQuery.message!.chat.id,
              `⚠️ Error: ${(error as Error).message}`,
              {
                reply_to_message_id: callbackQuery.message?.message_id,
              }
            );
          }
        }
      } catch (error) {
        console.error(error);
      }
    });

    this.bot.on("polling_error", (error: any) => {
      console.error(`Polling error`, error);

      if (error.code === "EFATAL") {
        console.info("Fatal error occurred, bot will restart.");

        this.bot.stopPolling();
        setTimeout(() => {
          this.bot.startPolling();
        }, 10000);
      }
    });
  }

  private async withdraw(payload: { transactionId: string }) {
    const transaction = await prisma.$transaction(
      async (tx) => {
        const transaction = await tx.transaction.findUniqueOrThrow({
          where: {
            id: payload.transactionId,
            status: TransactionStatus.pending,
          },
          select: {
            id: true,
            amount: true,
            address: true,
            account: {
              select: { telegramId: true },
            },
          },
        });

        if (!transaction.address) throw new Error("InvalidAddress");

        const from = await tonService.send({
          amount: transaction.amount,
          address: transaction.address,
        });

        await tx.ton_transaction.create({
          data: {
            transactionId: transaction.id,
            to: transaction.address,
            from,
          },
        });

        await tx.transaction.update({
          where: {
            id: transaction.id,
          },
          data: {
            status: TransactionStatus.completed,
          },
        });

        return transaction;
      },
      {
        timeout: 15_000,
      }
    );

    return transaction;
  }

  public async onDeposit(payload: { transactionId: string }) {
    const transaction = await prisma.transaction.findUniqueOrThrow({
      where: {
        id: payload.transactionId,
      },
      select: {
        amount: true,
        account: {
          select: {
            username: true,
            telegramId: true,
            transactions: {
              where: {
                type: "deposit",
                status: "completed",
              },
              select: {
                amount: true,
              },
            },
            referredBy: {
              select: {
                account: {
                  select: {
                    username: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const depositTotal = numberToString(
      transaction.account.transactions.reduce(
        (total, tx) => total + tx.amount,
        0
      )
    );

    const username = `@${transaction.account.username}`;
    const data = {
      username,
      amount: numberToString(transaction.amount),
      depositTotal,
      referredBy: transaction.account.referredBy?.account.username,
    };

    const options: SendMessageOptions = {
      parse_mode: "HTML",
    };

    const formattedJson = JSON.stringify(data, null, 2);
    const message = `<b>DEPOSIT</b> ${username}\n<pre><code class="language-json">${formattedJson}</code></pre>`;
    await this.bot.sendMessage(this.chatId, message, options);

    if (transaction.account.telegramId) {
      await this.bot.sendMessage(
        transaction.account.telegramId,
        `✅ Transaction complete. Amount of ${numberToString(
          transaction.amount
        )} TON has been added to your balance.`
      );
    }
  }

  public async onWithdraw(payload: { transactionId: string }) {
    const transaction = await prisma.transaction.findUniqueOrThrow({
      where: {
        id: payload.transactionId,
      },
      select: {
        id: true,
        amount: true,
        address: true,
        accountGift: {
          select: {
            nft: {
              select: {
                title: true,
                price: true,
              },
            },
            case: {
              select: {
                title: true,
              },
            },
          },
        },
        account: {
          select: {
            username: true,
            balance: true,
            gifts: {
              where: {
                isSold: false,
                isWithdraw: false,
              },
              select: {
                price: true,
              },
            },
            referral: {
              select: {
                percent: true,
                accounts: {
                  select: {
                    transactions: true,
                  },
                },
              },
            },
            transactions: true,
            createdAt: true,
          },
        },
      },
    });

    const foo = (type: TransactionType, txs: transaction[] = []) =>
      txs
        .filter(
          (tx) => tx.status === TransactionStatus.completed && tx.type === type
        )
        .reduce((total, tx) => total + tx.amount, 0)
        .toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

    const referralTransactions = transaction.account.referral?.accounts.flatMap(
      (acc) => acc.transactions
    );

    const username = `@${transaction.account.username}`;

    const data = {
      id: transaction.id,
      address: transaction.address,
      amount: transaction.amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      username,
      balance: transaction.account.balance.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      inventory: transaction.account.gifts
        .reduce((total, gift) => total + gift.price, 0)
        .toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      deposit: foo(TransactionType.deposit, transaction.account.transactions),
      withdraw: foo(TransactionType.withdraw, transaction.account.transactions),
      referrals: {
        count: transaction.account.referral?.accounts.length || 0,
        deposit: foo(TransactionType.deposit, referralTransactions),
        withdraw: foo(TransactionType.withdraw, referralTransactions),
      },
      gift: transaction.accountGift
        ? {
            price: transaction.accountGift.nft.price,
            title: transaction.accountGift.nft.title,
            case: transaction.accountGift.case.title,
          }
        : null,
      createdAt: transaction.account.createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    const isGiftWithdraw = !!data.gift;

    const options: SendMessageOptions = {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          isGiftWithdraw
            ? [
                {
                  text: "Submit",
                  callback_data: `g_w_r_a_${payload.transactionId}`,
                },
                {
                  text: "Decline",
                  callback_data: `g_w_r_d_${payload.transactionId}`,
                },
              ]
            : [
                {
                  text: "Accept",
                  callback_data: `w_r_a_${payload.transactionId}`,
                },
                {
                  text: "Decline",
                  callback_data: `w_r_d_${payload.transactionId}`,
                },
              ],
        ],
      },
    };

    const formattedJson = JSON.stringify(data, null, 2);
    const message = `<b>${
      isGiftWithdraw ? "GIFT " : ""
    }WITHDRAW</b> ${username}\n<pre><code class="language-json">${formattedJson}</code></pre>`;

    await this.bot.sendMessage(this.chatId, message, options);
  }

  public async onStart(payload: {
    referral?: string;
    username: string;
    telegramId: string;
  }) {
    try {
      await this.bot.sendPhoto(payload.telegramId, welcomeMessageImage, {
        caption: welcomeMessage(`@${payload.username}`),
        ...options(payload.referral),
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async casePriceAlert(
    payload: {
      case: string;
      price: number;
      price_0_margin: number;
      price_50_margin: number;
    }[]
  ) {
    const data = payload.map((item) => ({
      case: item.case,
      price: `${numberToString(item.price)} TON`,
      "price (0%)": `${numberToString(item.price_0_margin)} TON`,
      "price (50%)": `${numberToString(item.price_50_margin)} TON`,
    }));

    const options: SendMessageOptions = {
      parse_mode: "HTML",
    };

    const formattedJson = JSON.stringify(data, null, 2);
    const message = `⚠️ <b>CASE PRICE ALERT</b>\n<pre><code class="language-json">${formattedJson}</code></pre>`;
    await this.bot.sendMessage(this.chatId, message, options);
  }

  public async createPaymentLink(payload: { amount: number }) {
    const link = await this.bot.createInvoiceLink(
      "Confirm Your Purchase",
      `Some description`,
      "{}",
      "",
      "XTR",
      [{ amount: payload.amount, label: "Stars" }]
    );

    return link;
  }
}

export const botService = Object.freeze(new BotService());
