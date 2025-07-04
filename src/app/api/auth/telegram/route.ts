import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { accountService } from "@/lib/services/account.service";
import { config } from "@/lib/services/config.service";
import { codeToLanguage } from "@/lib/utils/language";
import prisma from "@/lib/prisma";

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
      language_code: string;
      photo_url?: string;
    }
  >JSON.parse(user);

  if (!parsedUser.id) {
    return NextResponse.json({ error: "Invalid params" }, { status: 403 });
  }

  const accountsCount = await prisma.account.count({
    where: {
      username: {
        startsWith: "gogift_unknown_",
      },
    },
  });

  const username = parsedUser.username || `gogift_unknown_${accountsCount}`;
  const referral = params.get("start_param");

  const account = await accountService.authenticateViaTelegram({
    referral,
    user: {
      avatarUrl: parsedUser.photo_url,
      telegramId: parsedUser.id.toString(),
      language: codeToLanguage(parsedUser.language_code),
      username,
    },
  });

  return NextResponse.json({ accountId: account.id });
}
