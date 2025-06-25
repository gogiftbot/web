import "dotenv/config";
import express from "express";
import cron from "node-cron";
import { botService, BotService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";
import { CaseService } from "@/lib/services/case.service";
import { tonService } from "@/lib/services/ton.service";

cron.schedule("0 * * * *", async () => {
  try {
    console.log(
      "NFT_PRICE_CRON_JOB",
      new Date().toLocaleDateString(),
      new Date().toLocaleTimeString()
    );
    await marketplaceService.updatePrices();

    const data = await CaseService.analytics();
    const alert_data = data.filter((item) => item.price < item.price_0_margin);
    if (alert_data.length) {
      await botService.casePriceAlert(alert_data);
    }
  } catch (error) {
    console.error(error);
  }
});

cron.schedule("* * * * *", async () => {
  await tonService.onDepositTx();
});

const app = express();

app.use(express.json({ limit: 81920 }));

app.listen(4344, async () => {
  console.log("App listening on port 4343");
  new BotService(true).listen();
});
