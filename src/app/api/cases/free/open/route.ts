import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { caseService, freeCase } from "@/lib/services/case.service";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { BonusType } from "@/generated/prisma";

type ResponseData = {
  id: string;
  title: string;
  price: number;
  sku: string;
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  try {
    const reward = await prisma.$transaction(async (tx) => {
      const account = await tx.account.findUniqueOrThrow({
        where: {
          id: session.user.id,
        },
        include: {
          bonuses: {
            where: {
              type: BonusType.case,
              isUsed: false,
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      const bonus = account.bonuses.shift();
      if (!bonus) throw new Error("NO_KEYS");

      await tx.$executeRaw`SELECT * FROM bonuses WHERE account_id = ${account.id} FOR UPDATE`;

      const reward = caseService.open(freeCase);

      await tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          balance: {
            increment: reward.price,
          },
        },
      });

      await tx.bonus.update({
        where: {
          id: bonus.id,
        },
        data: {
          isUsed: true,
        },
      });

      const responseData: ResponseData = {
        id: reward.id,
        price: reward.price,
        sku: reward.sku,
        title: reward.title,
      };

      return responseData;
    });

    return Response.json({ reward });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
