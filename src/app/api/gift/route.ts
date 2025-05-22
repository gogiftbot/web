import prisma from "@/lib/prisma";

export async function GET() {
  const gifts = await prisma.account_gift.findMany({
    select: {
      id: true,
      nft: {
        select: {
          sku: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 10,
  });

  return Response.json(gifts);
}
