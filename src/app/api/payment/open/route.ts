import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { TransactionCurrency, TransactionType } from "@/generated/prisma";
import {
  allowedFirstCaseIds,
  CaseService,
  caseService,
} from "@/lib/services/case.service";
import { findMinAboveN } from "@/lib/utils/number";
import { getProbability } from "@/lib/utils/math";

type ResponseData = {
  id: string;
  isTon: boolean;
  nft: { id: string; title: string; price: number; sku: string };
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.transactionId || typeof data.transactionId !== "string") {
    return new Response("InvalidTransactionId", {
      status: 400,
    });
  }

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
        include: {
          gifts: true,
        },
      });

      const transaction = await tx.transaction.findUniqueOrThrow({
        where: {
          id: data.transactionId,
          accountId: account.id,
          type: TransactionType.deposit,
          currency: TransactionCurrency.star,
          accountGift: null,
        },
      });

      const giftCase = await tx.gift_case.findFirstOrThrow({
        where: {
          id: data.caseId,
          isArchived: false,
          starPrice: transaction.amount,
        },
        select: {
          id: true,
          price: true,
          gifts: {
            select: {
              id: true,
              title: true,
              sku: true,
              price: true,
            },
            orderBy: {
              price: "desc",
            },
          },
        },
      });

      if (
        !account.gifts.length &&
        allowedFirstCaseIds.includes(giftCase.id) &&
        getProbability(50)
      ) {
        const gift = findMinAboveN(giftCase.gifts, giftCase.price);

        const accountGift = await tx.account_gift.create({
          data: {
            accountId: account.id,
            nftId: gift.id,
            caseId: giftCase.id,
            price: gift.price,
            transaction: {
              connect: {
                id: transaction.id,
              },
            },
          },
          include: {
            nft: true,
          },
        });

        const responseData: ResponseData = {
          id: accountGift.id,
          isTon: false,
          nft: {
            id: gift.id,
            price: gift.price,
            sku: gift.sku,
            title: gift.title,
          },
        };

        return responseData;
      }

      const gift = caseService.open(giftCase.gifts);
      const isTon = gift.title === CaseService.TON_GIFT.toUpperCase();

      const accountGift = await tx.account_gift.create({
        data: {
          accountId: account.id,
          nftId: gift.id,
          caseId: giftCase.id,
          price: gift.price,
          isSold: isTon,
          transaction: {
            connect: {
              id: transaction.id,
            },
          },
        },
        include: {
          nft: true,
        },
      });

      if (isTon) {
        await tx.account.update({
          where: {
            id: account.id,
          },
          data: {
            balance: {
              increment: gift.price,
            },
          },
        });
      }

      const responseData: ResponseData = {
        id: accountGift.id,
        isTon,
        nft: {
          id: gift.id,
          price: gift.price,
          sku: gift.sku,
          title: gift.title,
        },
      };

      return responseData;
    });

    return Response.json({ gift });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
