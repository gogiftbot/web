import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { tonService } from "@/lib/services/ton.service";

await wrapper(async ({ context, parameters }) => {
  await marketplaceService.updatePrices();

  const data = await CaseService.analytics();
  const alert_data = data.filter((item) => item.price < item.price_0_margin);
  if (alert_data.length) {
    await botService.casePriceAlert(alert_data);
  }
});
