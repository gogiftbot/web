import "dotenv/config";
import { BotService } from "@/lib/services/bot.service";
import express from "express";

const app = express();

app.use(express.json({ limit: 81920 }));

app.listen(4343, () => {
  console.log("App listening on port 4343");
  new BotService(true).listen();
});
