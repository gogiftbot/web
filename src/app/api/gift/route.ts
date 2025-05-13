import prisma from "@/lib/prisma";

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
      },
    },
    orderBy: {
      title: "desc",
    },
  });

  return Response.json(cases);
}
