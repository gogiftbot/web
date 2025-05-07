import { nft } from "@/generated/prisma";

export class CaseService<T extends Pick<nft, "id" | "odds" | "price">> {
  private static EXPONENT = 1.8;

  public open(nfts: T[]): T {
    const totalRate = nfts.reduce((sum, s) => sum + s.odds, 0);
    const rand = Math.random() * totalRate;

    let cumulative = 0;
    for (const sticker of nfts) {
      cumulative += sticker.odds;
      if (rand < cumulative) {
        return sticker;
      }
    }

    return nfts[nfts.length - 1];
  }

  public calculateOdds(nfts: T[]): T[] {
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
    return (
      +nfts
        .reduce((sum, nft) => sum + nft.price * (nft.odds / 100), 0)
        .toFixed(2) *
      (1 + margin)
    );
  }
}

export const caseService = Object.freeze(new CaseService());
