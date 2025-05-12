import { Prisma } from "@/generated/prisma";

export const accountWithGifts = Prisma.validator<Prisma.accountDefaultArgs>()({
  include: {
    _count: {
      select: {
        gifts: true,
      },
    },
    gifts: {
      include: {
        nft: true,
        case: true,
      },
    },
    transactions: true,
    referral: {
      include: {
        accounts: {
          include: {
            transactions: true,
            _count: {
              select: {
                gifts: true,
              },
            },
          },
        },
      },
    },
  },
});

export type AccountWithGifts = Prisma.accountGetPayload<
  typeof accountWithGifts
>;
