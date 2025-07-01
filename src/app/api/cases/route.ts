import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { BonusType } from "@/generated/prisma";
import { freeCase } from "@/lib/services/case.service";

const getFreeCaseKeysCount = async (accountId?: string) => {
  if (!accountId) return 0;
  return prisma.bonus.count({
    where: {
      type: BonusType.case,
      isUsed: false,
      accountId,
    },
  });
};

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

  const session = await getServerSession(authOptions);
  const keys = await getFreeCaseKeysCount(session?.user.id);

  return Response.json({ cases, free: { rewards: freeCase, keys } });
}
