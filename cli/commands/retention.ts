import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, toFileTxt, wrapper } from "../utils";
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
  const count = await context.prisma.account.count({});

  const CHUNK_SIZE = 1000;
  const ids: string[] = [];
  for (let i = 0; i < count / CHUNK_SIZE; i++) {
    const accounts = await context.prisma.account.findMany({
      take: CHUNK_SIZE,
      skip: CHUNK_SIZE * i,
      select: { telegramId: true },
    });
    ids.push(...accounts.map((a) => a.telegramId!));
  }

  const content = ids.join("\n");

  toFileTxt(content);
});
