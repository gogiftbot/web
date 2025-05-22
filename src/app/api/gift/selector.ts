import { Prisma } from "@/generated/prisma";

export const giftsHistory = Prisma.validator<Prisma.account_giftDefaultArgs>()({
  select: {
    id: true,
    nft: {
      select: {
        sku: true,
      },
    },
  },
});
export type GiftsHistory = Prisma.account_giftGetPayload<typeof giftsHistory>;
