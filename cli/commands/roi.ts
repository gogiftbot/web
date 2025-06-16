import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";

const ton_amount = 65.9568 + 30.812 + 27.481 + 73.144 + 30.9992;
const ton_to_usd = 3.02;

await wrapper(async ({ context, parameters }) => {
  const referral = await context.prisma.referral.findUniqueOrThrow({
    where: {
      value: "zDcwvpawY",
    },
    select: { id: true },
  });

  const accounts = await context.prisma.account.findMany({
    where: {
      referredById: referral.id,
    },
    select: {
      id: true,
      transactions: true,
    },
  });

  const tons = accounts.reduce(
    (total, account) =>
      total +
      account.transactions
        .filter(
          (tx) =>
            tx.type === "deposit" &&
            tx.status === "completed" &&
            tx.currency === "ton"
        )
        .reduce((tx_total, tx) => tx_total + tx.amount, 0),
    0
  );

  const stars = accounts.reduce(
    (total, account) =>
      total +
      account.transactions
        .filter(
          (tx) =>
            tx.type === "deposit" &&
            (tx.status === "completed" || tx.status === "pending") &&
            tx.currency === "star" &&
            !!tx.account_giftId
        )
        .reduce((tx_total, tx) => tx_total + tx.amount, 0),
    0
  );
  const starsInTons = (stars * 0.013) / ton_to_usd;

  const withdraw = accounts.reduce(
    (total, account) =>
      total +
      account.transactions
        .filter(
          (tx) =>
            tx.type === "withdraw" &&
            tx.status === "completed" &&
            tx.currency === "ton"
        )
        .reduce((tx_total, tx) => tx_total + tx.amount, 0),
    0
  );

  console.log({
    deposit: {
      tons: tons.toFixed(2),
      stars: stars.toString(),
      starsInTons: starsInTons.toFixed(2),
    },
    withdraw: withdraw.toFixed(2),
    ads_total: ton_amount.toFixed(2),
    roi: `${(((tons + starsInTons - withdraw) / ton_amount) * 100).toFixed(
      2
    )}%`,
    click_to_dep:
      (accounts.filter((account) => !!account.transactions.length).length /
        accounts.length) *
      100,
  });
});
