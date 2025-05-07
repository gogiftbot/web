import { Prisma } from "@/generated/prisma";

export const accountWithGifts = Prisma.validator<Prisma.accountDefaultArgs>()({
  include: {
    gifts: true,
    openings: true,
    referral: {
      include: {
        accounts: true,
      },
    },
  },
});

export type AccountWithGifts = Prisma.accountGetPayload<
  typeof accountWithGifts
>;
