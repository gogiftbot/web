import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Language } from "@/generated/prisma";
import { accountService } from "@/lib/services/account.service";
import { config } from "@/lib/services/config.service";

function checkTelegramAuth(initData: string) {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");
  params.delete("hash");

  const sorted = [...params.entries()].sort(([a], [b]) => a.localeCompare(b));
  const dataCheckString = sorted.map(([k, v]) => `${k}=${v}`).join("\n");

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(config.BOT_API_KEY)
    .digest();
  const computedHash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  return computedHash === hash;
}

export async function POST(req: NextRequest) {
  if (config.isDevelopment) {
    return NextResponse.json({
      accountId: "4fe37b3a-40df-4f97-bfd8-6596e3694c0c",
    });
  }

  const { data } = await req.json();

  if (!checkTelegramAuth(data)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  const params = new URLSearchParams(data);
  const user = params.get("user");

  if (!user) {
    return NextResponse.json({ error: "Invalid user" }, { status: 403 });
  }

  const parsedUser = <
    {
      id?: number;
      username?: string;
      language_code: Language;
      photo_url?: string;
    }
  >JSON.parse(user);

  if (!parsedUser.id || !parsedUser.username) {
    return NextResponse.json({ error: "Invalid params" }, { status: 403 });
  }

  const referral = params.get("start_param");

  const account = await accountService.authenticateViaTelegram({
    referral,
    user: {
      avatarUrl: parsedUser.photo_url,
      telegramId: parsedUser.id.toString(),
      username: parsedUser.username,
      language: [Language.EN, Language.RU].includes(parsedUser.language_code)
        ? parsedUser.language_code
        : Language.EN,
    },
  });

  return NextResponse.json({ accountId: account.id });
}
