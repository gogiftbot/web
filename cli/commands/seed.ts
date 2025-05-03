import { Prisma, PrismaClient } from "@prisma/client";
import { wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";

//https://michielp1807.github.io/lottie-editor/#/

const nfts: Prisma.nftCreateInput[] = [
  {
    id: "3b10a474-9723-49b8-8488-d8901494fb4e",
    sku: "494",
    price: 100,
    roi: 20,
    title: "Durov’s Cap",
    iterations: 30,
    isNew: true,
    isHot: true,
  },
  {
    id: "bc6c3c0f-7d2c-4a19-a37e-2451007ba795",
    sku: "1519",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
    iterations: 30,
    isHot: true,
  },
  {
    id: "70a615df-5321-4d4d-9594-6d1245d416ff",
    sku: "2244",
    price: 100,
    roi: 20,
    title: "Swiss Watch",
    iterations: 30,
    isNew: true,
  },
  {
    id: "e26f3775-4695-4f6b-bb5b-d47856ae3453",
    sku: "2488",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
    iterations: 30,
  },
  {
    id: "c1ccc1c1-8c6f-4102-817c-46f8d9a94efb",
    sku: "2551",
    price: 100,
    roi: 20,
    title: "Durov’s Cap",
    iterations: 30,
  },
  {
    id: "80d4cbfa-3856-454e-8163-9b89f7a8c1c2",
    sku: "2798",
    price: 100,
    roi: 20,
    title: "Plush Pepe",
    iterations: 30,
  },
  {
    id: "87e2a42a-faf6-4f59-bfd1-7e4d89e95a18",
    sku: "4119",
    price: 100,
    roi: 20,
    title: "Signet Ring",
    iterations: 30,
  },
  {
    id: "66fa5869-e094-4981-90cf-da6cadd41a5e",
    sku: "4633",
    price: 100,
    roi: 20,
    title: "Signet Ring",
    iterations: 30,
    isSoldOut: true,
    isHot: true,
  },
  {
    id: "56679d3c-45a8-4926-a501-d6f1a408d581",
    sku: "7718",
    price: 100,
    roi: 20,
    title: "Kissed Frog",
    iterations: 30,
    isSoldOut: true,
  },
  {
    id: "51ffa98b-fb05-4229-adcb-7ebeb74b959f",
    sku: "12676",
    price: 100,
    roi: 20,
    title: "Loot Bag",
    iterations: 30,
    isSoldOut: true,
    isHot: true,
    isNew: true,
  },
];

const prisma = new PrismaClient().$extends(withAccelerate());

await wrapper(async ({ context, parameters }) => {
  const seed = async () => {
    await context.prisma.nft.createMany({
      data: nfts,
    });

    await context.prisma.account.create({
      data: {
        id: "cd5d6e66-71fc-4d7a-96a0-4ef5fccd7788",
        username: "mrMuraveiko",
        nfts: {
          createMany: {
            data: [
              {
                nftId: "51ffa98b-fb05-4229-adcb-7ebeb74b959f",
              },
              {
                nftId: "56679d3c-45a8-4926-a501-d6f1a408d581",
              },
              {
                nftId: "3b10a474-9723-49b8-8488-d8901494fb4e",
              },
              {
                nftId: "bc6c3c0f-7d2c-4a19-a37e-2451007ba795",
              },
            ],
          },
        },
      },
    });
  };

  const account = await prisma.account.findUniqueOrThrow({
    where: {
      id: "cd5d6e66-71fc-4d7a-96a0-4ef5fccd7788",
    },
    include: { nfts: { include: { transactions: true, nft: true } } },
  });

  console.log(account);
});

// pnpm tsx cli/commands/ww.ts

// https://optimize.prisma.io/cma6ynw7c00csina44fgysbgo/recordings/setup
// https://console.prisma.io/cma6ynw7c00csina44fgysbgo/cma71sugu0000iweg84fopag2/cma71sugu0001iwegye215klo/dashboard

// pnpm prisma generate --no-engine
// pnpm prisma migrate reset
// pnpm prisma migrate dev --create-only --name init
// pnpm prisma migrate deploy
