import { Language } from "@/generated/prisma";
import prisma, { PrismaTransaction } from "@/lib/prisma";
import { ReferralService } from "../referral.service";

export class AccountService {
  private readonly referralService: ReferralService;

  constructor() {
    this.referralService = new ReferralService();
  }

  async authenticateViaTelegram(payload: {
    user: {
      username: string;
      language: Language;
      telegramId: string;
      avatarUrl?: string;
    };
    referral?: string | null;
  }) {
    const data = await prisma.$transaction(async (tx) => {
      const account = await this.upsertAccount(tx, {
        ...payload.user,
        referral: payload.referral,
      });

      return account;
    });

    return data;
  }

  private async upsertAccount(
    tx: PrismaTransaction,
    payload: {
      username: string;
      referral?: string | null;
      language?: Language;
      firstName?: string;
      lastName?: string;
      telegramId?: string;
      avatarUrl?: string;
    }
  ) {
    const account = await tx.account.findUnique({
      where: {
        username: payload.username,
      },
      select: { id: true },
    });

    if (account) {
      return tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          avatarUrl: payload.avatarUrl,
          language: payload.language,
          telegramId: payload.telegramId,
        },
      });
    }

    return this.createAccount(tx, payload);
  }

  private async createAccount(
    tx: PrismaTransaction,
    payload: {
      username: string;
      referral?: string | null;
      language?: Language;
      telegramId?: string;
      avatarUrl?: string;
    }
  ) {
    const account = await tx.account.create({
      data: {
        username: payload.username,
        language: payload.language,
        telegramId: payload.telegramId,
        avatarUrl: payload.avatarUrl,
      },
    });

    await this.referralService.createReferral(tx, {
      accountId: account.id,
      referral: payload.referral,
    });

    return account;
  }
}

export const accountService = new AccountService();
