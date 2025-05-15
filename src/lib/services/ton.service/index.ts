import { AccountEvent, TonApiClient } from "@ton-api/client";
import { Address, fromNano, SendMode, toNano } from "@ton/core";
import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, WalletContractV5R1, internal } from "@ton/ton";
import prisma from "@/lib/prisma";
import { TransactionStatus, TransactionType } from "@/generated/prisma";
import { config } from "../config.service";
import { botService } from "../bot.service";

type DepositTX = {
  from: string;
  amount: number;
  lt: bigint;
  timestamp: number;
  accountId?: string;
};

export class TonService {
  private readonly address = Address.parse(config.TON_ADDRESS);
  public readonly tonApi = new TonApiClient({
    baseUrl: "https://tonapi.io",
    apiKey: config.TON_API_KEY,
  });

  public async onDepositTx() {
    const transaction = await prisma.ton_transaction.findFirst({
      where: {
        transaction: {
          type: TransactionType.deposit,
        },
      },
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const startDate = transaction?.createdAt
      ? Math.floor(transaction?.createdAt.getTime() / 1000)
      : undefined;

    const { events } = await this.tonApi.accounts.getAccountEvents(
      this.address,
      {
        limit: 100,
        start_date: startDate,
      }
    );

    const depositTxs: DepositTX[] = events.flatMap((event) =>
      this.parseEvent({ event })
    );

    for (const depositTx of depositTxs) {
      try {
        const transaction = await prisma.$transaction(async (tx) => {
          const account = await tx.account.findUniqueOrThrow({
            where: {
              id: depositTx.accountId,
            },
            select: {
              id: true,
              referredBy: {
                select: {
                  accountId: true,
                  percent: true,
                },
              },
            },
          });

          await tx.account.update({
            where: {
              id: account.id,
            },
            data: {
              balance: {
                increment: depositTx.amount,
              },
            },
          });

          if (account.referredBy?.accountId) {
            await tx.account.update({
              where: {
                id: account.referredBy.accountId,
              },
              data: {
                balance: {
                  increment: depositTx.amount * account.referredBy.percent,
                },
              },
            });
          }

          const transaction = await tx.ton_transaction.create({
            data: {
              from: depositTx.from,
              to: this.address.toString({
                urlSafe: true,
                bounceable: false,
              }),
              lt: depositTx.lt.toString(),
              transaction: {
                create: {
                  amount: depositTx.amount,
                  accountId: account.id,
                  type: TransactionType.deposit,
                  status: TransactionStatus.completed,
                },
              },
            },
          });

          console.log("transaction", transaction);

          return transaction;
        });

        await botService.onDeposit({ transactionId: transaction.id });
      } catch (error) {
        console.log(error);
      }
    }
  }

  private parseEvent({ event }: { event: AccountEvent }): DepositTX[] {
    const deposits: DepositTX[] = [];

    for (const action of event.actions) {
      if (action.TonTransfer?.comment && action.TonTransfer?.amount) {
        try {
          const data: { accountId?: string } = JSON.parse(
            action.TonTransfer.comment!
          );

          if (!data.accountId) throw new Error("INVALID_TX_COMMENT");

          deposits.push({
            from: action.TonTransfer.sender.address.toString({
              urlSafe: true,
              bounceable: false,
            }),
            amount: parseFloat(fromNano(action.TonTransfer.amount)),
            lt: BigInt(event.lt),
            timestamp: event.timestamp,
            accountId: data.accountId,
          });
        } catch (error: any) {
          console.log(action.TonTransfer, error);
        }
      }
    }

    return deposits;
  }

  public async send(payload: { amount: number; address: string }) {
    try {
      const client = new TonClient({
        endpoint: "https://toncenter.com/api/v2/jsonRPC",
        apiKey: config.TON_CENTER_API_KEY,
      });

      const mnemonic = config.TON_MNEMONIC.split(" ");
      const keyPair = await mnemonicToPrivateKey(mnemonic);
      const walletContract = WalletContractV5R1.create({
        publicKey: keyPair.publicKey,
      });

      const wallet = client.open(walletContract);

      const balance = await client.getBalance(wallet.address);
      const amountToSend = toNano(payload.amount);
      const estimatedFee = toNano("0.01");
      if (balance < amountToSend + estimatedFee) {
        throw new Error("INFLUENT_BALANCE");
      }

      // const seqno = await wallet.getSeqno();

      // await wallet.sendTransfer({
      //   seqno,
      //   secretKey: keyPair.secretKey,
      //   messages: [
      //     internal({
      //       to: payload.address,
      //       value: toNano(payload.amount),
      //     }),
      //   ],
      //   sendMode: SendMode.IGNORE_ERRORS,
      // });

      return wallet.address.toString({
        urlSafe: true,
        bounceable: false,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const tonService = Object.freeze(new TonService());
