import prisma from "@/lib/prisma";
import { onTextCallback } from "./utils";
import { numberToString } from "@/lib/utils/number";

export const ref = onTextCallback(async () => {
  const accounts = await prisma.account.findMany({
    select: {
      id: true,
      transactions: {
        select: {
          id: true,
          amount: true,
          type: true,
          status: true,
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
  });

  const obj: Record<
    string,
    {
      username: string;
      accounts: number;
      ton: number;
      star: number;
      withdraw: number;
    }
  > = {};

  for (const acc of accounts) {
    const username = acc.referredBy?.account.username || "unknown";
    if (!obj[username]) {
      obj[username] = {
        username,
        accounts: 0,
        ton: 0,
        star: 0,
        withdraw: 0,
      };
    }
    const ton = acc.transactions
      .filter(
        (tx) =>
          tx.status === "completed" &&
          tx.type === "deposit" &&
          tx.currency === "star"
      )
      .reduce((t, tx) => t + tx.amount, obj[username].star);
    const star = acc.transactions
      .filter(
        (tx) =>
          (tx.status === "completed" || tx.status === "pending") &&
          tx.type === "deposit" &&
          tx.currency === "ton"
      )
      .reduce((t, tx) => t + tx.amount, obj[username].ton);

    const withdraw = acc.transactions
      .filter((tx) => tx.status === "completed" && tx.type === "withdraw")
      .reduce((t, tx) => t + tx.amount, obj[username].withdraw);

    obj[username] = {
      username,
      accounts: obj[username].accounts + 1,
      ton,
      star,
      withdraw,
    };
  }

  const arr = Object.values(obj)
    .filter((o) => !!o.accounts)
    .sort((a, b) => b.accounts - a.accounts)
    .slice(0, 10)
    .map((item) => ({
      ...item,
      ton: numberToString(item.ton),
      star: numberToString(item.star),
      withdraw: numberToString(item.withdraw),
    }));

  return arr;
});
