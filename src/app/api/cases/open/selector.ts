import { Prisma } from "@/generated/prisma";

export const accountGiftWithNft =
  Prisma.validator<Prisma.account_giftDefaultArgs>()({
    include: {
      nft: true,
    },
  });
export type AccountGiftWithNft = Prisma.account_giftGetPayload<
  typeof accountGiftWithNft
>;
