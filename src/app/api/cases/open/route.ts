import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { caseService } from "@/lib/services/case.service";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();
  console.log(session.user.id, data);

  if (!data.caseId || typeof data.caseId !== "string") {
    return new Response("InvalidCaseId", {
      status: 400,
    });
  }

  try {
    const gift = await prisma.$transaction(async (tx) => {
      const account = await tx.account.findUniqueOrThrow({
        where: {
          id: session.user.id,
        },
      });

      const giftCase = await tx.gift_case.findFirstOrThrow({
        where: {
          id: data.caseId,
          isArchived: false,
        },
        select: {
          id: true,
          price: true,
          gifts: {
            select: {
              id: true,
              odds: true,
              title: true,
              sku: true,
              price: true,
            },
          },
        },
      });

      if (account.balance < giftCase.price) {
        throw new Error("INFLUENT_BALANCE");
      }

      const gift = caseService.open(giftCase.gifts);

      const account_gift = await tx.account_gift.create({
        data: {
          accountId: account.id,
          nftId: gift.id,
          caseId: giftCase.id,
          price: gift.price,
        },
        include: {
          nft: true,
        },
      });

      await tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          balance: {
            decrement: giftCase.price,
          },
        },
      });

      return account_gift;
    });
    return Response.json({ gift });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
