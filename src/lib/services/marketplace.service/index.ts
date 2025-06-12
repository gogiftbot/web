import prisma from "@/lib/prisma";

const mapper: Record<string, string> = {
  "Xmas Stocking": "Xmas Stocking",
  "Swiss Watch": "Swiss Watch",
  "Top Hat": "Top Hat",
  "Astral Shard": "Astral Shard",
  "Bday Candle": "B-Day Candle",
  "Berry Box": "Berry Box",
  "Bunny Muffin": "Bunny Muffin",
  "Candy Cane": "Candy Cane",
  "Cookie Heart": "Cookie Heart",
  "Desk Calendar": "Desk Calendar",
  "Crystal Ball": "Crystal Ball",
  "Diamond Ring": "Diamond Ring",
  "Durov's Cap": "Durov's Cap",
  "Genie Lamp": "Genie Lamp",
  "Ginger Cookie": "Ginger Cookie",
  "Hanging Star": "Hanging Star",
  "Ion Gem": "Ion Gem",
  "Jack In The Box": "Jack-in-the-Box",
  "Kissed Frog": "Kissed Frog",
  "Love Potion": "Love Potion",
  "Lunar Snake": "Lunar Snake",
  "Magic Potion": "Magic Potion",
  "Mini Oscar": "Mini Oscar",
  "Neko Helmet": "Neko Helmet",
  "Perfume Bottle": "Perfume Bottle",
  "Record Player": "Record Player",
  "Sakura Flower": "Sakura Flower",
  "Santa Hat": "Santa Hat",
  "Scared Cat": "Scared Cat",
  "Sharp Tongue": "Sharp Tongue",
  "Signet Ring": "Signet Ring",
  "Snake Box": "Snake Box",
  "Snow Globe": "Snow Globe",
  "Toy Bear": "Toy Bear",
  "Trapped Heart": "Trapped Heart",
  "Vintage Cigar": "Vintage Cigar",
  "Plush Pepe": "Plush Pepe",
  "Voodoo Doll": "Voodoo Doll",
  "Star Notepad": "Star Notepad",
  "Electric Skull": "Electric Skull",
  "Eternal Rose": "Eternal Rose",
  "Lol Pop": "Lol Pop",
  "Precious Peach": "Precious Peach",
  "Witch Hat": "Witch Hat",
  "Evil Eye": "Evil Eye",
  "Loot Bag": "Loot Bag",
};

export class MarketplaceService {
  async updatePrices() {
    const prices = await this.fetchPrices();

    const data = prices
      .filter((price) => price.new !== price.old)
      .map((price) => ({ id: price.id, price: price.new }));

    for (const nft of data) {
      await prisma.nft.update({
        where: {
          id: nft.id,
        },
        data: {
          price: nft.price,
        },
      });
    }
  }

  async fetchPrices() {
    const nfts = await prisma.nft.findMany({
      where: {
        title: {
          not: "TON",
        },
      },
      orderBy: { price: "asc" },
    });

    const prices: { id: string; new: number; old: number }[] = [];
    for (const nft of nfts) {
      const price = await this.getPrice(nft.title);
      prices.push({ id: nft.id, new: price, old: nft.price });
    }

    return prices;
  }

  async getPrice(nftTitle: string) {
    const title = mapper[nftTitle];

    if (!title) throw new Error(`TITLE_NOT_FOUND_${nftTitle}`);

    const res = await fetch("https://gifts3.tonnel.network/api/pageGifts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        filter: JSON.stringify(this.getFilter(title)),
        sort: JSON.stringify({
          price: 1,
          gift_id: -1,
        }),
        limit: 1,
      }),
    });

    if (!res.ok) {
      console.error(res.status, res.text, res.body);
      throw new Error(`BadRequest_${title}`);
    }

    const data = await res.json();

    if (!(typeof data?.[0]?.price === "number")) {
      console.error(res.status, res.text, res.body);
      throw new Error("INVALID_RESPONSE");
    }

    return +(parseFloat(data[0].price) * 1.1).toFixed(2);
  }

  private getFilter(title: string) {
    return {
      gift_name: title,
      asset: "TON",
      price: {
        $exists: true,
      },
      buyer: {
        $exists: false,
      },
    };
  }
}

export const marketplaceService = Object.freeze(new MarketplaceService());
