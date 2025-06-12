import prisma from "@/lib/prisma";
import { onTextCallback } from "./utils";
import { ReferralService } from "../referral.service";
import { config } from "../config.service";

export const createRef = onTextCallback(async () => {
  const referral = await prisma.$transaction(async (tx) => {
    const referralService = new ReferralService();

    const referrals_count = await tx.account.count({
      where: {
        username: {
          startsWith: "referral_",
        },
      },
    });
    const account = await tx.account.create({
      data: {
        username: `referral_${referrals_count + 1}`,
      },
    });
    const referral = await referralService.createReferral(tx, {
      accountId: account.id,
    });
    return referral;
  });

  const data = {
    value: referral.value,
    link: `t.me/${config.BOT_NAME}?startapp=${referral.value}`,
  };

  return data;
});
