import { Prisma, PrismaClient } from "@prisma/client";
import { wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";

//https://michielp1807.github.io/lottie-editor/#/

const nfts: Prisma.nftCreateInput[] = [
  {
    sku: "494",
    price: 100,
    roi: 20,
    title: "Durov’s Cap",
  },
  {
    sku: "1519",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
  },
  {
    sku: "2244",
    price: 100,
    roi: 20,
    title: "Swiss Watch",
  },
  {
    sku: "2488",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
  },
  {
    sku: "2551",
    price: 100,
    roi: 20,
    title: "Durov’s Cap",
  },
  {
    sku: "2798",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
  },
  {
    sku: "4119",
    price: 100,
    roi: 20,
    title: "Signet Ring",
  },
  {
    sku: "4633",
    price: 100,
    roi: 20,
    title: "Signet Ring",
  },
  {
    sku: "7718",
    price: 100,
    roi: 20,
    title: "Kissed Frog",
  },
  {
    sku: "12676",
    price: 100,
    roi: 20,
    title: "Loot Bag",
  },
];

const prisma = new PrismaClient().$extends(withAccelerate());

await wrapper(async ({ context, parameters }) => {
  await context.prisma.nft.createMany({
    data: nfts,
  });

  const t = await prisma.nft.findMany({
    cacheStrategy: { swr: 60, ttl: 60 },
  });

  console.log(t);
});

// pnpm tsx cli/commands/ww.ts

// https://optimize.prisma.io/cma6ynw7c00csina44fgysbgo/recordings/setup
// https://console.prisma.io/cma6ynw7c00csina44fgysbgo/cma71sugu0000iweg84fopag2/cma71sugu0001iwegye215klo/dashboard

// "prisma": {
//   "seed": "prisma/seed.ts"
// },

// await prisma.user.findMany({
//   where: {
//     email: {
//       contains: "alice@prisma.io",
//     },
//   },
//   cacheStrategy: { ttl: 60 },
// });

// pnpm prisma generate --no-engine
// pnpm prisma migrate reset
// pnpm prisma migrate dev --create-only --name init
// pnpm prisma migrate deploy
