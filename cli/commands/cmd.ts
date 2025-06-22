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
  await context.prisma.transaction.update({
    where: {
      id: "7c1ea226-0514-40f1-aad8-ce0efbac12ad",
    },
    data: {
      status: "pending",
    },
  });
});
