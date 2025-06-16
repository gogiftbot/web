import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";
import { findMinAboveN } from "@/lib/utils/number";

// not allowed: Lucky Shot, Risk It All, All or Nothing // > x3
// ?: Devil's Deal, Premium // ~x2

await wrapper(async ({ context, parameters }) => {
  const giftCase = await context.prisma.gift_case.findFirstOrThrow({
    where: {
      title: "Lucky Shot",
    },
    include: {
      gifts: true,
    },
  });
  const gift = findMinAboveN(giftCase.gifts, giftCase.price);
  console.log(gift);
});
