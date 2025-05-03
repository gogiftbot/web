import { Prisma } from "@prisma/client";

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
