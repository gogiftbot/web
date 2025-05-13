import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
import { config } from "../config.service";
import prisma from "@/lib/prisma";
import {
  transaction,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";

class BotService {
  private chatId = "-1002657439097";
  private bot: TelegramBot;

  constructor() {
    this.bot = new TelegramBot(config.BOT_API_KEY, {
      polling: {
        interval: 1000,
      },
    });

    this.bot.on("callback_query", (callbackQuery) => {
      const data = callbackQuery.data;

      if (data?.startsWith("withdraw_request_accept_")) {
        const transactionId = data.split("_").pop();
        if (!transactionId) throw new Error("InvalidTransactionId");
        this.bot.answerCallbackQuery(callbackQuery.id, {
          text: "ок чел потом сделаю",
        });
      }

      if (data?.startsWith("withdraw_request_decline_")) {
        const transactionId = data.split("_").pop();
        if (!transactionId) throw new Error("InvalidTransactionId");
        this.bot.answerCallbackQuery(callbackQuery.id, {
          text: "ок чел потом сделаю",
        });
      }
    });
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
        .reduce((total, tx) => total + tx.amount, 0);

    const referralTransactions = transaction.account.referral?.accounts.flatMap(
      (acc) => acc.transactions
    );

    const data = {
      amount: transaction.amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      username: transaction.account.username,
      balance: transaction.account.balance,
      inventory: transaction.account.gifts.reduce(
        (total, gift) => total + gift.price,
        0
      ),
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

    const options: SendMessageOptions = {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Accept",
              callback_data: `withdraw_request_accept_${payload.transactionId}`,
            },
            {
              text: "Decline",
              callback_data: `withdraw_request_decline_${payload.transactionId}`,
            },
          ],
        ],
      },
    };
    const formattedJson = JSON.stringify(data, null, 2);
    const message = `<b>WITHDRAW</b>\n<pre><code class="language-json">${formattedJson}</code></pre>`;
    await this.bot.sendMessage(this.chatId, message, options);
  }
}

export const botService = Object.freeze(new BotService());
