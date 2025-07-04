import {
  Prisma,
  PrismaClient,
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, toFileTxt, wrapper } from "../utils";
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

await wrapper(async ({ context, parameters }) => {
  const accounts = await context.prisma.account.findMany({
    where: {
      transactions: {
        some: {
          type: TransactionType.deposit,
          currency: TransactionCurrency.ton,
          status: TransactionStatus.completed,
        },
      },
    },
    select: {
      telegramId: true,
    },
  });
  const str = accounts.map((acc) => acc.telegramId).join("\n");
  toFileTxt(str);
});
