import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";

await wrapper(async ({ context, parameters }) => {
  // const tsx = await context.prisma.transaction.findMany({
  //   where: {
  //     currency: "star",
  //     type: "deposit",
  //     status: {
  //       in: ["completed"],
  //     },
  //     accountGift: {
  //       isNot: null,
  //     },
  //   },
  // });
  // const total = tsx.reduce((t, tx) => t + tx.amount, 0);
  // console.log(total);
  // const account = await context.prisma.account.findFirstOrThrow({
  //   where: {
  //     username: "sukafrs",
  //   },
  //   include: {
  //     transactions: true,
  //     gifts: true,
  //   },
  // });
  // toFile(account);

  const acc = await context.prisma.account.findUniqueOrThrow({
    where: {
      id: "4fe37b3a-40df-4f97-bfd8-6596e3694c0c",
    },
  });
  console.log(acc);
});
