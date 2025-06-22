import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";

await wrapper(async ({ context, parameters }) => {
  const promo = await context.prisma.promo_code.create({
    data: {
      bonusValue: 50,
      uses: 1,
      value: "asdasd",
    },
  });
});
