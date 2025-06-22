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
  // const t = await marketplaceService.getGift({ title: "Lol Pop" });
  // await marketplaceService.purchase({ id: t.id, price: t.price });
  // console.log("success purchase", t.price);
  const i = await marketplaceService.inventory({ title: "Lol Pop" });
  await marketplaceService.sendGift({ id: i.id, recipient: "giftrockstar" });
});
