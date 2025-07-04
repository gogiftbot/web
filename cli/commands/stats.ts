import {
  Prisma,
  PrismaClient,
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";
import { findMinAboveN, numberToString } from "@/lib/utils/number";
import {
  AccountsObserver,
  WebsocketStreamProvider,
  AccountEvent,
} from "@ton-api/streaming";
import UserAgent from "user-agents";
import prisma from "@/lib/prisma";

type AccountWithTransactions = Prisma.accountGetPayload<{
  include: { transactions: true };
}>;

await wrapper(async ({ context, parameters }) => {
  const data: AccountWithTransactions[] = [];

  const count = await prisma.account.count({});

  for (let i = 0; i < count; i += 1000) {
    const accounts = await prisma.account.findMany({
      take: 1000,
      skip: i,
      include: {
        transactions: {
          orderBy: {
            createdAt: "asc",
          },
          where: {
            type: TransactionType.deposit,
            OR: [
              {
                status: TransactionStatus.completed,
                currency: TransactionCurrency.star,
              },
              {
                status: TransactionStatus.pending,
                currency: TransactionCurrency.star,
              },
              {
                status: TransactionStatus.completed,
                currency: TransactionCurrency.ton,
              },
            ],
          },
        },
      },
    });
    data.push(...accounts);
  }

  const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;

  let returningUsersCount = 0;
  let users1DepCount = 0;
  let usersDepCount = 0;

  for (const account of data) {
    const transactions = account.transactions;

    if (transactions.length === 1) users1DepCount++;
    if (transactions.length >= 1) usersDepCount++;

    // Пропускаем аккаунты с < 2 транзакциями
    if (transactions.length < 2) continue;

    const firstTransactionTime = transactions[0].createdAt.getTime();
    const thresholdTime = firstTransactionTime + TWELVE_HOURS_MS;

    // Проверяем наличие транзакции после порога (начиная со второй в списке)
    const hasReturningTransaction = transactions.some(
      (tx, index) => index > 0 && tx.createdAt.getTime() >= thresholdTime
    );

    if (hasReturningTransaction) {
      returningUsersCount++;
    }
  }

  console.log(`Количество пользователей: ${count}`);
  console.log(`Количество пользователей с депом: ${usersDepCount}`);
  console.log(`Количество пользователей с 1 депом: ${users1DepCount}`);
  console.log(
    `Количество вернувшихся пользователей спустя 12 часов: ${returningUsersCount}`
  );
  console.log(
    `Процент возврата спустя 12 часов: ${(
      (returningUsersCount / usersDepCount) *
      100
    ).toFixed(2)}%`
  );
  console.log(`Reg to dep: ${((usersDepCount / count) * 100).toFixed(2)}%`);
});
