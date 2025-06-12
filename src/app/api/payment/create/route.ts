import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { botService } from "@/lib/services/bot.service";
import prisma from "@/lib/prisma";
import {
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from "@/generated/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.caseId || typeof data.caseId !== "string") {
    return new Response("InvalidCaseId", {
      status: 400,
    });
  }

  try {
    const response = await prisma.$transaction(async (tx) => {
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
          title: true,
          starPrice: true,
        },
      });

      if (!giftCase.starPrice) throw new Error("InvalidStarPrice");

      const transaction = await tx.transaction.create({
        data: {
          amount: giftCase.starPrice,
          accountId: account.id,
          type: TransactionType.deposit,
          status: TransactionStatus.pending,
          currency: TransactionCurrency.star,
        },
        select: {
          id: true,
        },
      });

      const link = await botService.createPaymentLink({
        amount: giftCase.starPrice,
        title: giftCase.title,
        transactionId: transaction.id,
      });

      return { link, transactionId: transaction.id };
    });

    return Response.json(response);
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
