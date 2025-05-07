import { Prisma } from "@/generated/prisma";

export const accountWithNftAndTransaction =
  Prisma.validator<Prisma.accountDefaultArgs>()({
    include: { nfts: { include: { transactions: true, nft: true } } },
  });

export type AccountWithNftAndTransaction = Prisma.accountGetPayload<
  typeof accountWithNftAndTransaction
>;

export const nftWithTransactions =
  Prisma.validator<Prisma.account_nftDefaultArgs>()({
    include: { transactions: true, nft: true },
  });

export type NftWithTransactions = Prisma.account_nftGetPayload<
  typeof nftWithTransactions
>;

export const caseWithGifts = Prisma.validator<Prisma.gift_caseDefaultArgs>()({
  include: {
    gifts: {
      select: {
        id: true,
        title: true,
        sku: true,
        price: true,
        caseId: true,
        createdAt: true,
        updatedAt: true,
      },
    },
  },
});
export type CaseWithGifts = Prisma.gift_caseGetPayload<typeof caseWithGifts>;
