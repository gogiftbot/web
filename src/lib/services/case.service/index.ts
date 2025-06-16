import { nft } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export const allowedFirstCaseIds = [
  "4e5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t", // Big Tease
  "6g5h4i3j-2k1l-0m9n-8o7p-6q5r4s3t2u1v", // Dreamy Mix
  "5b2c9d8e-1f3a-47e8-b6d5-0c4a3b2e1d9f", // Standard
  "7d0eb1d0-0302-46fb-9f61-ad7a421d66ac", // First Shot
  "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q", // Golden Dream
  "3a8e7b2c-4d5f-49a1-b7c6-2f3e1d0c9b8a", // Basic
  "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Mystery Box
];

export class CaseService<
  T extends Pick<nft, "id" | "price" | "sku" | "title">
> {
  public static TON_GIFT = "ton";

  private static EXPONENT = 1.8;

  public open(nfts: T[]): T {
    const gifts = this.calculateOdds(nfts);
    const totalRate = gifts.reduce((sum, gift) => sum + gift.odds, 0);
    const rand = Math.random() * totalRate;

    let cumulative = 0;
    for (const gift of gifts) {
      cumulative += gift.odds;
      if (rand < cumulative) {
        return gift;
      }
    }

    return nfts[nfts.length - 1];
  }

  public calculateOdds(nfts: T[]): (T & { odds: number })[] {
    const weights = nfts.map(
      (nft) => 1 / Math.pow(nft.price, CaseService.EXPONENT)
    );
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);

    return nfts.map((nft, i) => ({
      ...nft,
      odds: +((weights[i] / totalWeight) * 100).toFixed(2),
    }));
  }

  public calculatePrice(nfts: T[], margin: number): number {
    const gifts = this.calculateOdds(nfts);
    return (
      +gifts
        .reduce((sum, gift) => sum + gift.price * (gift.odds / 100), 0)
        .toFixed(2) *
      (1 + margin)
    );
  }

  public static async analytics() {
    const cases = await prisma.gift_case.findMany({
      include: {
        gifts: true,
      },
    });

    return cases.map((g_case) => {
      const price = caseService.calculatePrice(g_case.gifts, 0);
      const price_50 = caseService.calculatePrice(g_case.gifts, 0.5);
      return {
        case: g_case.title,
        price: g_case.price,
        price_0_margin: price,
        price_50_margin: price_50,
      };
    });
  }
}

export const caseService = Object.freeze(new CaseService());
