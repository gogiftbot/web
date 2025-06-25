import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
import {
  Language,
  transaction,
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { tonService } from "../ton.service";
import { config } from "../config.service";
import { numberToString } from "@/lib/utils/number";
import { updateCasePrice } from "./updateCasePrice";
import { getCasesPrices } from "./getCasesPrices";
import { createRef } from "./createRef";
import { ref } from "./ref";
import { stat } from "./stat";
import { codeToLanguage } from "@/lib/utils/language";
import {
  depositTransactionMessage,
  failedGiftTransactionMessage,
  failedTransactionMessage,
  successTransactionMessage,
  welcomeMessage,
  welcomeMessageOptions,
} from "./messages";
import { createPromo } from "./createPromo";
import { marketplaceService } from "../marketplace.service";
import { incrementBalance } from "./incrementBalance";
import { getAccount } from "./account";
import { updateRef } from "./updateRef";

const welcomeMessageImage = "https://gogift.vercel.app/start_image.png";

export class BotService {
  private chatId = "-1002657439097";
  public bot: TelegramBot;

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
      console.error((error as Error).message);
    });

    this.bot.on("pre_checkout_query", async (query) => {
      try {
        const payload = JSON.parse(query.invoice_payload);
        if (!payload.transactionId) throw new Error("InvalidTransactionId");

        await prisma.transaction.findFirstOrThrow({
          where: {
            id: payload.transactionId,
            type: TransactionType.deposit,
            status: TransactionStatus.pending,
            currency: TransactionCurrency.star,
            amount: query.total_amount,
            accountGift: null,
          },
          select: { id: true },
        });

        await this.bot.answerPreCheckoutQuery(query.id, true).catch((e) => {});
      } catch (error) {
        await this.bot
          .answerPreCheckoutQuery(query.id, false, {
            error_message: "error",
          })
          .catch((e) => {});
      }
    });

    this.bot.on("message", async ({ successful_payment }) => {
      if (successful_payment) {
        try {
          const payload = JSON.parse(successful_payment.invoice_payload);
          if (!payload.transactionId) throw new Error("InvalidTransactionId");

          const transaction = await prisma.transaction.findFirstOrThrow({
            where: {
              id: payload.transactionId,
              type: TransactionType.deposit,
              status: TransactionStatus.pending,
              currency: TransactionCurrency.star,
              accountGift: null,
            },
            select: { id: true },
          });

          await prisma.transaction.update({
            where: {
              id: transaction.id,
            },
            data: {
              status: TransactionStatus.completed,
            },
          });

          await this.onTransaction(
            payload.transactionId,
            TransactionCurrency.star
          );
        } catch (error) {}
      }
    });

    this.bot.onText(/\/update\s+['"]([^'"]+)['"]\s+([\d.]+)/, async (...args) =>
      updateCasePrice(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/promo\s+['"]([^'"]+)['"]\s+([\d.]+)/, async (...args) =>
      createPromo(...args, this.bot, this.chatId)
    );

    this.bot.onText(
      /\/add_balance\s+['"]([^'"]+)['"]\s+([\d.]+)/,
      async (...args) => incrementBalance(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/account\s+['"]([^'"]+)['"]/, async (...args) =>
      getAccount(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/case_price/, async (...args) =>
      getCasesPrices(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/ref/, async (...args) =>
      ref(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/stat/, async (...args) =>
      stat(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/create_ref/, async (...args) =>
      createRef(...args, this.bot, this.chatId)
    );

    this.bot.onText(
      /\/update_ref\s+['"]([^'"]+)['"]\s+([\d.]+)/,
      async (...args) => updateRef(...args, this.bot, this.chatId)
    );

    this.bot.onText(/\/start/, async (message) => {
      try {
        const language = codeToLanguage(message.from?.language_code);

        const name = message.from?.username
          ? `@${message.from.username}`
          : language === Language.RU
          ? "незнакомец"
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
          caption: welcomeMessage(name, language),
          ...welcomeMessageOptions(language, account?.referral?.value),
        });
      } catch (error) {
        console.error((error as Error).message);
      }
    });

    this.bot.on("callback_query", async (callbackQuery) => {
      try {
        const language = codeToLanguage(callbackQuery.from?.language_code);
        const data = callbackQuery.data;
        await this.bot.answerCallbackQuery(callbackQuery.id);

        // if (data?.startsWith("w_r_a_")) {
        //   try {
        //     const transactionId = data.split("_").pop();
        //     if (!transactionId) throw new Error("InvalidTransactionId");
        //     if (!callbackQuery.message) throw new Error("InvalidMessage");

        //     const transaction = await this.withdraw({ transactionId });

        //     if (transaction.account.telegramId) {
        //       await this.bot
        //         .sendMessage(
        //           transaction.account.telegramId,
        //           successTransactionMessage(language)(transaction)
        //         )
        //         .catch();
        //     }

        //     await this.bot.sendMessage(
        //       callbackQuery.message.chat.id,
        //       "✅ Success!",
        //       {
        //         reply_to_message_id: callbackQuery.message.message_id,
        //       }
        //     );
        //   } catch (error) {
        //     await this.bot.sendMessage(
        //       callbackQuery.message!.chat.id,
        //       `⚠️ Error: ${(error as Error).message}`,
        //       {
        //         reply_to_message_id: callbackQuery.message?.message_id,
        //       }
        //     );
        //   }
        // }

        // if (data?.startsWith("w_r_d_")) {
        //   try {
        //     const transactionId = data.split("_").pop();
        //     if (!transactionId) throw new Error("InvalidTransactionId");
        //     if (!callbackQuery.message) throw new Error("InvalidMessage");

        //     const transaction = await prisma.$transaction(async (tx) => {
        //       const transaction = await tx.transaction.findUniqueOrThrow({
        //         where: {
        //           id: transactionId,
        //           status: TransactionStatus.pending,
        //         },
        //         select: {
        //           id: true,
        //           amount: true,
        //           account: { select: { id: true, telegramId: true } },
        //         },
        //       });

        //       await tx.account.update({
        //         where: { id: transaction.account.id },
        //         data: { balance: { increment: transaction.amount } },
        //       });

        //       await tx.transaction.update({
        //         where: {
        //           id: transaction.id,
        //         },
        //         data: {
        //           status: TransactionStatus.declined,
        //         },
        //       });

        //       return transaction;
        //     });

        //     if (transaction.account.telegramId) {
        //       await this.bot
        //         .sendMessage(
        //           transaction.account.telegramId,
        //           failedTransactionMessage(language)(transaction)
        //         )
        //         .catch();
        //     }

        //     await this.bot.sendMessage(
        //       callbackQuery.message.chat.id,
        //       "❌ Declined!",
        //       {
        //         reply_to_message_id: callbackQuery.message.message_id,
        //       }
        //     );
        //   } catch (error) {
        //     await this.bot.sendMessage(
        //       callbackQuery.message!.chat.id,
        //       `⚠️ Error: ${(error as Error).message}`,
        //       {
        //         reply_to_message_id: callbackQuery.message?.message_id,
        //       }
        //     );
        //   }
        // }

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
                  accountGift: { select: { nft: true } },
                  account: { select: { telegramId: true } },
                },
              });

              if (!transaction.accountGift) throw new Error("INVALID_GIFT");
              if (!transaction.account.telegramId)
                throw new Error("INVALID_TELEGRAM_ID");

              await tx.transaction.update({
                where: {
                  id: transaction.id,
                },
                data: {
                  status: TransactionStatus.completed,
                },
              });

              const gift = await marketplaceService
                .getGiftToWithdraw({
                  title: transaction.accountGift.nft.title,
                })
                .catch(() => {
                  throw new Error(`cant_purchase (check ton balance)`);
                });

              try {
                await marketplaceService.sendGift({
                  id: gift.id,
                  recipient: transaction.account.telegramId,
                });
              } catch (error) {
                throw new Error(`cant_send:${transaction.id}`);
              }

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
            const message = (error as Error).message;
            const transactionId = message.split(":").pop()!;
            if (message.startsWith("cant_send:")) {
              await prisma.$transaction(async (tx) => {
                const transaction = await tx.transaction.update({
                  where: {
                    id: transactionId,
                  },
                  data: {
                    status: TransactionStatus.declined,
                  },
                  select: {
                    accountGift: {
                      select: {
                        id: true,
                        nft: {
                          select: {
                            title: true,
                          },
                        },
                      },
                    },
                    account: { select: { telegramId: true } },
                  },
                });

                if (transaction.accountGift) {
                  await tx.account_gift.update({
                    where: {
                      id: transaction.accountGift.id,
                    },
                    data: {
                      isWithdraw: false,
                    },
                  });
                }

                if (transaction.account.telegramId) {
                  await this.bot
                    .sendMessage(
                      transaction.account.telegramId,
                      failedGiftTransactionMessage(language)(
                        transaction.accountGift?.nft.title
                      )
                    )
                    .catch(() => {});
                }
              });
            }

            await this.bot.sendMessage(
              callbackQuery.message!.chat.id,
              `⚠️ Error: ${message}`,
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
                  accountGift: {
                    select: { id: true, nft: { select: { title: true } } },
                  },
                },
              });

              if (!transaction.accountGift) throw new Error("InvalidGift");

              await tx.account_gift.update({
                where: {
                  id: transaction.accountGift.id,
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
                  failedGiftTransactionMessage(language)(
                    transaction.accountGift?.nft.title
                  )
                )
                .catch(() => {});
            }

            await this.bot
              .sendMessage(callbackQuery.message.chat.id, "❌ Declined!", {
                reply_to_message_id: callbackQuery.message.message_id,
              })
              .catch(() => {});
          } catch (error) {
            await this.bot
              .sendMessage(
                callbackQuery.message!.chat.id,
                `⚠️ Error: ${(error as Error).message}`,
                {
                  reply_to_message_id: callbackQuery.message?.message_id,
                }
              )
              .catch(() => {});
          }
        }
      } catch (error) {
        console.error((error as Error).message);
      }
    });

    this.bot.on("polling_error", (error: any) => {
      console.error(`Polling error`, (error as Error).message);

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
    const transaction = await this.onTransaction(
      payload.transactionId,
      TransactionCurrency.ton
    );

    if (transaction.account.telegramId) {
      await this.bot
        .sendMessage(
          transaction.account.telegramId,
          depositTransactionMessage(transaction.account.language)(transaction)
        )
        .catch(() => {});
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
            telegramId: true,
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
                    transactions: {
                      include: {
                        accountGift: true,
                      },
                    },
                  },
                },
              },
            },
            transactions: {
              include: {
                accountGift: true,
              },
            },
            createdAt: true,
          },
        },
      },
    });

    const foo = (
      type: TransactionType,
      currency: TransactionCurrency,
      txs: transaction[] = []
    ) =>
      numberToString(
        txs
          .filter(
            (tx) =>
              tx.status === TransactionStatus.completed &&
              tx.type === type &&
              tx.currency === currency
          )
          .reduce((total, tx) => total + tx.amount, 0)
      );

    const referralTransactions = transaction.account.referral?.accounts.flatMap(
      (acc) => acc.transactions
    );

    const username = `@${transaction.account.username}`;

    const data = {
      id: transaction.id,
      address: transaction.address,
      amount: numberToString(transaction.amount),
      username,
      balance: numberToString(transaction.account.balance),
      inventory: numberToString(
        transaction.account.gifts.reduce((total, gift) => total + gift.price, 0)
      ),
      deposit: {
        ton: foo(
          TransactionType.deposit,
          TransactionCurrency.ton,
          transaction.account.transactions
        ),
        star: transaction.account.transactions
          .filter(
            (tx) =>
              (
                [
                  TransactionStatus.completed,
                  TransactionStatus.pending,
                ] as string[]
              ).includes(tx.status) &&
              TransactionCurrency.star === tx.currency &&
              TransactionType.deposit === tx.type &&
              !!tx.accountGift
          )
          .reduce((total, tx) => total + tx.amount, 0),
      },
      withdraw: foo(
        TransactionType.withdraw,
        TransactionCurrency.ton,
        transaction.account.transactions
      ),
      referrals: {
        count: transaction.account.referral?.accounts.length || 0,
        deposit: {
          ton: foo(
            TransactionType.deposit,
            TransactionCurrency.ton,
            referralTransactions
          ),
          star: referralTransactions
            ?.filter(
              (tx) =>
                (
                  [
                    TransactionStatus.completed,
                    TransactionStatus.pending,
                  ] as string[]
                ).includes(tx.status) &&
                TransactionCurrency.star === tx.currency &&
                TransactionType.deposit === tx.type &&
                !!tx.accountGift
            )
            .reduce((total, tx) => total + tx.amount, 0),
        },
        withdraw: foo(
          TransactionType.withdraw,
          TransactionCurrency.ton,
          referralTransactions
        ),
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
    language: Language;
  }) {
    try {
      await this.bot.sendPhoto(payload.telegramId, welcomeMessageImage, {
        caption: welcomeMessage(`@${payload.username}`, payload.language),
        ...welcomeMessageOptions(payload.language, payload.referral),
      });
    } catch (error) {
      console.error((error as Error).message);
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

  public async createPaymentLink(payload: {
    transactionId: string;
    amount: number;
    title: string;
  }) {
    try {
      const invoiceLink = await this.bot.createInvoiceLink(
        `${payload.title} Case`,
        `GoGift Case ${payload.title}`,
        JSON.stringify({ transactionId: payload.transactionId }),
        "",
        "XTR",
        [{ amount: payload.amount, label: payload.title }]
      );

      return invoiceLink;
    } catch (error) {
      console.error("bot.service createPaymentLink", (error as Error).message);
      throw error;
    }
  }

  async onTransaction(transactionId: string, currency: TransactionCurrency) {
    const transaction = await prisma.transaction.findUniqueOrThrow({
      where: {
        id: transactionId,
      },
      select: {
        amount: true,
        bonus: {
          select: {
            value: true,
          },
        },
        tonTransaction: {
          select: {
            from: true,
          },
        },
        account: {
          select: {
            username: true,
            telegramId: true,
            language: true,
            transactions: {
              where: {
                type: "deposit",
                status: "completed",
              },
              select: {
                amount: true,
                currency: true,
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

    const tonDepositTotal = numberToString(
      transaction.account.transactions
        .filter((tx) => tx.currency === TransactionCurrency.ton)
        .reduce((total, tx) => total + tx.amount, 0)
    );
    const starsDepositTotal = numberToString(
      transaction.account.transactions
        .filter((tx) => tx.currency === TransactionCurrency.star)
        .reduce((total, tx) => total + tx.amount, 0)
    );

    const username = `@${transaction.account.username}`;
    const data = {
      username,
      amount: `${numberToString(transaction.amount)} ${currency}`,
      bonus: transaction.bonus?.value,
      depositTotal: {
        ton: tonDepositTotal,
        stars: starsDepositTotal,
      },
      addressBalance: transaction.tonTransaction?.from
        ? await tonService.getAddressBalance(transaction.tonTransaction.from)
        : undefined,
      referredBy: transaction.account.referredBy?.account.username,
    };

    const options: SendMessageOptions = {
      parse_mode: "HTML",
    };

    const formattedJson = JSON.stringify(data, null, 2);
    const message = `<b>${currency} deposit</b> ${username}\n<pre><code class="language-json">${formattedJson}</code></pre>`;
    await this.bot.sendMessage(this.chatId, message, options);

    return transaction;
  }
}

export const botService = Object.freeze(new BotService());
