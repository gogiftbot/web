import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
import { config } from "../config.service";
import prisma from "@/lib/prisma";
import {
  transaction,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";
import { tonService } from "../ton.service";
import EventEmitter from "events";

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
                  `✅ Transaction created! Amount of ${transaction.amount.toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
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
                  `❌ Transaction Declined! Amount of ${transaction.amount.toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
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
          },
        },
      },
    });

    const data = {
      username: transaction.account.username,
      amount: transaction.amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    };

    const options: SendMessageOptions = {
      parse_mode: "HTML",
    };

    const formattedJson = JSON.stringify(data, null, 2);
    const message = `<b>DEPOSIT</b>\n<pre><code class="language-json">${formattedJson}</code></pre>`;
    await this.bot.sendMessage(this.chatId, message, options);

    if (transaction.account.telegramId) {
      await this.bot.sendMessage(
        transaction.account.telegramId,
        `✅ Transaction complete. Amount of ${transaction.amount.toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
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

    const data = {
      address: transaction.address,
      amount: transaction.amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      username: transaction.account.username,
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
    }WITHDRAW</b>\n<pre><code class="language-json">${formattedJson}</code></pre>`;

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
}

export const botService = Object.freeze(new BotService());
