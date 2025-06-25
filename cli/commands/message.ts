import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";
import { findMinAboveN } from "@/lib/utils/number";
import {
  AccountsObserver,
  WebsocketStreamProvider,
  AccountEvent,
} from "@ton-api/streaming";
import UserAgent from "user-agents";

await wrapper(async ({ context, parameters }) => {
  const acc = await context.prisma.account.findUniqueOrThrow({
    where: {
      username: "xdsnowman",
    },
  });
  if (acc.telegramId) {
    await botService.bot.sendMessage(
      acc.telegramId,
      "Hey there! Missed seeing you around. Claim your 'LUCK20' bonus (+20% on deposit!) and come open more cases – exciting gifts are waiting inside!"
    );
  }
});
