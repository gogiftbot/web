import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";

export const onTextCallback = <T>(
  callback: (
    payload: { message: TelegramBot.Message; match: RegExpExecArray | null },
    options: { bot: TelegramBot; chatId: string }
  ) => Promise<T>
) => {
  return async (
    message: TelegramBot.Message,
    match: RegExpExecArray | null,
    bot: TelegramBot,
    chatId: string
  ) => {
    try {
      if (message.chat.id.toString() !== chatId) return;

      const data = await callback({ message, match }, { bot, chatId });

      if (data) {
        const options: SendMessageOptions = {
          parse_mode: "HTML",
        };

        const formattedJson = JSON.stringify(data, null, 2);
        const chatMessage = `<pre><code class="language-json">${formattedJson}</code></pre>`;
        await bot.sendMessage(chatId, chatMessage, options);
      }
    } catch (error) {
      console.error(error);
      await bot.sendMessage(chatId, `⚠️ Error: ${(error as Error).message}`);
    }
  };
};
