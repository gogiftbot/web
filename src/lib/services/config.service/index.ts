export const config = {
  BOT_NAME: "GoGift_official_bot",
  BOT_API_KEY: process.env.BOT_API_KEY!,
  TON_ADDRESS: process.env.NEXT_PUBLIC_TON_ADDRESS!,
  TON_MNEMONIC: process.env.TON_MNEMONIC!,
  TON_API_KEY: process.env.TON_API_KEY!,
  TON_CENTER_API_KEY: process.env.TON_CENTER_API_KEY!,
} as const;
