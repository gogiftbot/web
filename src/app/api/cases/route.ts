import prisma from "@/lib/prisma";

const freeCase = [
  {
    id: "bfe33858-493d-4749-b0da-286befeef436",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 20,
  },
  {
    id: "b54bdd24-9a0d-4c5c-9b30-02454d7359eb",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 15,
  },
  {
    id: "61af03dd-f1b8-48fa-a320-804c039e6019",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 10,
  },
  {
    id: "a487146d-d60b-4fa2-a6b8-62070983943f",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 7.5,
  },
  {
    id: "04cea21d-8c1d-42e2-9ee3-8a15a8c68104",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 5,
  },
  {
    id: "28f8e3bc-4902-4286-88b2-0e417a1b1114",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 2.5,
  },
  {
    id: "90428bff-5f9d-45b1-8510-d50b0c80fd44",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 1,
  },
  {
    id: "b29c1950-9cfd-4cc8-9b3f-362afaae2ef7",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 0.8,
  },
  {
    id: "fcca98ce-a585-4b6b-b916-e81316f883ae",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 0.6,
  },
  {
    id: "cc8144a4-ae71-410c-898c-7484c01ffc08",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 0.4,
  },
  {
    id: "67b3a71f-0fe9-4e76-9de8-c25334b966c6",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 0.2,
  },
  {
    id: "352d515c-70df-4dd7-8f26-4306de7acc32",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "TON",
    sku: "ton",
    price: 0.1,
  },
];

export async function GET() {
  const cases = await prisma.gift_case.findMany({
    where: {
      isArchived: false,
    },
    include: {
      gifts: {
        select: {
          id: true,
          title: true,
          sku: true,
          price: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          price: "desc",
        },
      },
    },
    orderBy: {
      price: "asc",
    },
  });

  const targetIndex = cases.findIndex(
    (item) => item.title === "Heart’s Secret"
  );

  if (targetIndex !== -1) {
    const [targetItem] = cases.splice(targetIndex, 1);
    cases.unshift(targetItem);
  }

  return Response.json({ cases, free: freeCase });
}
