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

  return Response.json(cases);
}
