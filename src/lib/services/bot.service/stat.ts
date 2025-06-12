import prisma from "@/lib/prisma";
import { onTextCallback } from "./utils";
import { numberToString } from "@/lib/utils/number";
import {
  Prisma,
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";

const getTransactions = async (options?: {
  accountId?: string;
  type?: TransactionType;
  currency?: TransactionCurrency;
  dateGte?: Date;
  status?: TransactionStatus[];
}) => {
  const where: Prisma.transactionFindManyArgs["where"] = {
    status: {
      in: options?.status || ["completed"],
    },
    ...(options?.currency === "star"
      ? {
          accountGift: {
            isNot: null,
          },
        }
      : {}),
  };

  if (options?.accountId) {
    where.accountId = options.accountId;
  }

  if (options?.type) {
    where.type = options.type;
  }

  if (options?.currency) {
    where.currency = options.currency;
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

  const total = txs.reduce((t, tx) => t + tx.amount, 0);

  return `${numberToString(total)} ${options?.currency}`;
};

export const stat = onTextCallback(async () => {
  const accounts = await prisma.account.count();

  const data = {
    deposit: {
      ton: await getTransactions({
        type: TransactionType.deposit,
        currency: TransactionCurrency.ton,
      }),
      star: await getTransactions({
        type: TransactionType.deposit,
        currency: TransactionCurrency.star,
        status: ["completed", "pending"],
      }),
    },
    withdraw: await getTransactions({
      type: TransactionType.withdraw,
      currency: TransactionCurrency.ton,
    }),
    last_24_hours: {
      deposit: {
        ton: await getTransactions({
          type: TransactionType.deposit,
          dateGte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          currency: TransactionCurrency.ton,
        }),
        star: await getTransactions({
          type: TransactionType.deposit,
          dateGte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          currency: TransactionCurrency.star,
          status: ["completed", "pending"],
        }),
      },
      withdraw: await getTransactions({
        type: TransactionType.withdraw,
        dateGte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        currency: TransactionCurrency.ton,
      }),
    },
    accounts,
  };

  return data;
});
