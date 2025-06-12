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
      createdAt: "desc",
    },
    take: 5,
  });

  return Response.json(gifts);
}
