import prisma from "@/lib/prisma";
import UserAgent from "user-agents";
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

const shortNameMapper: Record<string, string> = {
  astralshard: "Astral Shard",
  bdaycandle: "B-Day Candle",
  berrybox: "Berry Box",
  bigyear: "Big Year",
  bondedring: "Bonded Ring",
  bowtie: "Bow Tie",
  bunnymuffin: "Bunny Muffin",
  candycane: "Candy Cane",
  cookieheart: "Cookie Heart",
  crystalball: "Crystal Ball",
  deskcalendar: "Desk Calendar",
  diamondring: "Diamond Ring",
  durovscap: "Durov's Cap",
  easteregg: "Easter Egg",
  electricskull: "Electric Skull",
  eternalcandle: "Eternal Candle",
  eternalrose: "Eternal Rose",
  evileye: "Evil Eye",
  flyingbroom: "Flying Broom",
  gemsignet: "Gem Signet",
  genielamp: "Genie Lamp",
  gingercookie: "Ginger Cookie",
  hangingstar: "Hanging Star",
  heartlocket: "Heart Locket",
  heroichelmet: "Heroic Helmet",
  hexpot: "Hex Pot",
  holidaydrink: "Holiday Drink",
  homemadecake: "Homemade Cake",
  hypnolollipop: "Hypno Lollipop",
  iongem: "Ion Gem",
  jackinthebox: "Jack-in-the-Box",
  jellybunny: "Jelly Bunny",
  jesterhat: "Jester Hat",
  jinglebells: "Jingle Bells",
  kissedfrog: "Kissed Frog",
  lightsword: "Light Sword",
  lolpop: "Lol Pop",
  lootbag: "Loot Bag",
  lovecandle: "Love Candle",
  lovepotion: "Love Potion",
  lunarsnake: "Lunar Snake",
  lushbouquet: "Lush Bouquet",
  madpumpkin: "Mad Pumpkin",
  magicpotion: "Magic Potion",
  minioscar: "Mini Oscar",
  nailbracelet: "Nail Bracelet",
  nekohelmet: "Neko Helmet",
  partysparkler: "Party Sparkler",
  perfumebottle: "Perfume Bottle",
  petsnake: "Pet Snake",
  plushpepe: "Plush Pepe",
  preciouspeach: "Precious Peach",
  recordplayer: "Record Player",
  restlessjar: "Restless Jar",
  sakuraflower: "Sakura Flower",
  santahat: "Santa Hat",
  scaredcat: "Scared Cat",
  sharptongue: "Sharp Tongue",
  signetring: "Signet Ring",
  skullflower: "Skull Flower",
  sleighbell: "Sleigh Bell",
  snakebox: "Snake Box",
  snowglobe: "Snow Globe",
  snowmittens: "Snow Mittens",
  spicedwine: "Spiced Wine",
  spyagaric: "Spy Agaric",
  starnotepad: "Star Notepad",
  swisswatch: "Swiss Watch",
  tamagadget: "Tama Gadget",
  tophat: "Top Hat",
  toybear: "Toy Bear",
  trappedheart: "Trapped Heart",
  vintagecigar: "Vintage Cigar",
  voodoodoll: "Voodoo Doll",
  winterwreath: "Winter Wreath",
  witchhat: "Witch Hat",
  xmasstocking: "Xmas Stocking",
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

    const prices = await this.getPrices();

    const data: { id: string; title: string; new: number; old: number }[] = [];
    for (const nft of nfts) {
      const price = prices[mapper[nft.title]];
      if (!price) {
        console.log(nft.title, mapper[nft.title], nft.price, price);
      } else {
        const floatPrice = +parseFloat(price).toFixed(2);
        data.push({
          id: nft.id,
          title: nft.title,
          new: floatPrice,
          old: nft.price,
        });
      }
    }

    return data;
  }

  async preview(): Promise<Record<string, string>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    try {
      const res = await fetch(
        `https://portals-market.com/api/collections/filters/preview`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
            "User-Agent": new UserAgent().data.userAgent,
          },
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        console.error(res.status, res.text, res.body);
        throw new Error(`BadRequest`);
      }

      const data = await res.json();

      return data;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async purchase(payload: { id: string; price: string }): Promise<void> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    try {
      const res = await fetch(`https://portals-market.com/api/nfts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
          "User-Agent": new UserAgent().data.userAgent,
        },
        body: JSON.stringify({
          nft_details: [
            {
              id: payload.id,
              price: payload.price,
            },
          ],
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        console.error(res.status, res.text, res.body);
        throw new Error(`BadRequest`);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async sendGift(payload: { id: string; recipient: string }): Promise<void> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    try {
      const res = await fetch(
        `https://portals-market.com/api/nfts/transfer-gifts`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
            "User-Agent": new UserAgent().data.userAgent,
          },
          body: JSON.stringify({
            nft_ids: [payload.id],
            recipient: payload.recipient,
            anonymous: true,
          }),
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        console.error(res);
        throw new Error(`BadRequest`);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async inventory(payload: { title: string }) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    const shortname = mapper[payload.title];
    if (!shortname) throw new Error("INVALID_SHORTNAME");

    const title = shortNameMapper[shortname];
    if (!title) throw new Error("INVALID_TITLE");

    try {
      const res = await fetch(
        `https://portals-market.com/api/nfts/owned?offset=0&limit=1&filter_by_collections=${title}&sort_by=price+asc&status=unlisted`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
            "User-Agent": new UserAgent().data.userAgent,
          },
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        console.error(res.status, res.text, res.body);
        throw new Error(`BadRequest`);
      }

      const data: { nfts: { id: string; price: string }[] } = await res.json();

      return data.nfts[0];
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getGift(payload: { title: string }) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    const shortname = mapper[payload.title];
    if (!shortname) throw new Error("INVALID_SHORTNAME");

    const title = shortNameMapper[shortname];
    if (!title) throw new Error("INVALID_TITLE");

    try {
      const res = await fetch(
        `https://portals-market.com/api/nfts/search?offset=0&limit=1&filter_by_collections=${title.replaceAll(
          " ",
          "+"
        )}&sort_by=price+asc&status=listed`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
            "User-Agent": new UserAgent().data.userAgent,
          },
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        console.error(res.status, res.text, res.body);
        throw new Error(`BadRequest`);
      }

      const data: { results: { id: string; price: string }[] } =
        await res.json();

      return data.results[0];
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getPrices(): Promise<Record<string, string>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000); // 15 seconds

    try {
      const res = await fetch(
        "https://portals-market.com/api/collections/floors",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "tma user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=6932715030913848017&chat_type=sender&start_param=289809740&auth_date=1749785281&signature=J4QSsDUwhuS8QcfpChUW091_SVM8urA6BOHIBMR_wijbY_YgBhBlkKRKehVFADA-UCFS2dKk9A_gAollWZqCDg&hash=3b46fe7269be77c2d6a38f501d181ccfb5fe1bb1fdebfd25b1b68636c4183070",
            "User-Agent": new UserAgent().data.userAgent,
          },
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        console.error(res.status, res.text, res.body);
        throw new Error(`BadRequest`);
      }

      const data = await res.json();

      return data.floorPrices;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

export const marketplaceService = Object.freeze(new MarketplaceService());
