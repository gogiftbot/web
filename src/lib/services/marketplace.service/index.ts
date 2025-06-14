import prisma from "@/lib/prisma";
import { tonService } from "../ton.service";

const mapper: Record<string, string> = {
  "Xmas Stocking": "xmasstocking",
  "Swiss Watch": "swisswatch",
  "Top Hat": "tophat",
  "Astral Shard": "astralshard",
  "Bday Candle": "bdaycandle",
  "Berry Box": "berrybox",
  "Bunny Muffin": "bunnymuffin",
  "Candy Cane": "candycane",
  "Cookie Heart": "cookieheart",
  "Desk Calendar": "deskcalendar",
  "Crystal Ball": "crystalball",
  "Diamond Ring": "diamondring",
  "Durov's Cap": "durovscap",
  "Genie Lamp": "genielamp",
  "Ginger Cookie": "gingercookie",
  "Hanging Star": "hangingstar",
  "Ion Gem": "iongem",
  "Jack In The Box": "jackinthebox",
  "Kissed Frog": "kissedfrog",
  "Love Potion": "lovepotion",
  "Lunar Snake": "lunarsnake",
  "Magic Potion": "magicpotion",
  "Mini Oscar": "minioscar",
  "Neko Helmet": "nekohelmet",
  "Perfume Bottle": "perfumebottle",
  "Record Player": "recordplayer",
  "Sakura Flower": "sakuraflower",
  "Santa Hat": "santahat",
  "Scared Cat": "scaredcat",
  "Sharp Tongue": "sharptongue",
  "Signet Ring": "signetring",
  "Snake Box": "snakebox",
  "Snow Globe": "snowglobe",
  "Toy Bear": "toybear",
  "Trapped Heart": "trappedheart",
  "Vintage Cigar": "vintagecigar",
  "Plush Pepe": "plushpepe",
  "Voodoo Doll": "voodoodoll",
  "Star Notepad": "starnotepad",
  "Electric Skull": "electricskull",
  "Eternal Rose": "eternalrose",
  "Lol Pop": "lolpop",
  "Precious Peach": "preciouspeach",
  "Witch Hat": "witchhat",
  "Evil Eye": "evileye",
  "Loot Bag": "lootbag",
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

    const g_cases = await prisma.gift_case.findMany();

    const updated_gift_cases = await tonService.calculateCaseStarPrices(
      g_cases
    );

    for (const gift_case of updated_gift_cases) {
      await prisma.gift_case.update({
        where: {
          id: gift_case.id,
        },
        data: {
          starPrice: gift_case.starPrice,
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

    const prices = await this.getPrices();

    const data: { id: string; new: number; old: number }[] = [];
    for (const nft of nfts) {
      const price = prices[mapper[nft.title]];
      if (!price) {
        console.log(nft.title, mapper[nft.title], nft.price, price);
      } else {
        const floatPrice = +parseFloat(price).toFixed(2);
        data.push({ id: nft.id, new: floatPrice, old: nft.price });
      }
    }

    return data;
  }

  async getPrices(): Promise<Record<string, string>> {
    const res = await fetch(
      "https://portals-market.com/api/collections/floors",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
        },
      }
    );

    if (!res.ok) {
      console.error(res.status, res.text, res.body);
      throw new Error(`BadRequest`);
    }

    const data = await res.json();

    return data.floorPrices;
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
