import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import { config } from "@/lib/services/config.service";
import { wrapper } from "../utils";

await wrapper(async ({ context, parameters }) => {
  const bot = new TelegramBot(config.BOT_API_KEY, {
    polling: false,
  });

  await bot.sendMessage("341856633", "hello");
});
