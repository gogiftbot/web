import { Prisma, PrismaClient } from "@/generated/prisma";
import { wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";

//https://michielp1807.github.io/lottie-editor/#/

const cases: Prisma.gift_caseCreateInput[] = [
  {
    id: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
    title: "Primary",
    price: 10,
  },
];

const nfts: Prisma.nftCreateManyInput[] = [
  {
    id: "3b10a474-9723-49b8-8488-d8901494fb4e",
    sku: "494",
    price: 100,
    odds: 0.94,
    title: "Durov’s Cap",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "bc6c3c0f-7d2c-4a19-a37e-2451007ba795",
    sku: "1519",
    price: 90,
    odds: 1.13,
    title: "Plush Pepe",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "70a615df-5321-4d4d-9594-6d1245d416ff",
    sku: "2244",
    price: 80,
    odds: 1.4,
    title: "Swiss Watch",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "e26f3775-4695-4f6b-bb5b-d47856ae3453",
    sku: "2488",
    price: 70,
    odds: 1.78,
    title: "Plush Pepe",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "c1ccc1c1-8c6f-4102-817c-46f8d9a94efb",
    sku: "2551",
    price: 60,
    odds: 2.35,
    title: "Durov’s Cap",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "80d4cbfa-3856-454e-8163-9b89f7a8c1c2",
    sku: "2798",
    price: 50,
    odds: 3.26,
    title: "Plush Pepe",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "87e2a42a-faf6-4f59-bfd1-7e4d89e95a18",
    sku: "4119",
    price: 40,
    odds: 4.87,
    title: "Signet Ring",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "66fa5869-e094-4981-90cf-da6cadd41a5e",
    sku: "4633",
    price: 30,
    odds: 8.18,
    title: "Signet Ring",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "56679d3c-45a8-4926-a501-d6f1a408d581",
    sku: "7718",
    price: 20,
    odds: 16.97,
    title: "Kissed Frog",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
  {
    id: "51ffa98b-fb05-4229-adcb-7ebeb74b959f",
    sku: "12676",
    price: 10,
    odds: 59.11,
    title: "Loot Bag",
    caseId: "76d5dcc5-86d9-4978-94da-9bc4e444cb6a",
  },
];

// const prisma = new PrismaClient().$extends(withAccelerate());

await wrapper(async ({ context, parameters }) => {
  const seed = async () => {
    await context.prisma.$transaction(async (tx) => {
      await tx.gift_case.createMany({
        data: cases,
      });

      await tx.nft.createMany({
        data: nfts,
      });

      await tx.account.create({
        data: {
          id: "cd5d6e66-71fc-4d7a-96a0-4ef5fccd7788",
          username: "mrMuraveiko",
        },
      });
    });
  };

  await seed();
});

// pnpm tsx cli/commands/ww.ts

// https://optimize.prisma.io/cma6ynw7c00csina44fgysbgo/recordings/setup
// https://console.prisma.io/cma6ynw7c00csina44fgysbgo/cma71sugu0000iweg84fopag2/cma71sugu0001iwegye215klo/dashboard

// pnpm prisma generate --no-engine
// pnpm prisma migrate reset
// pnpm prisma migrate dev --create-only --name init
// pnpm prisma migrate deploy
