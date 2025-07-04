import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import {
  allowedFirstCaseIds,
  CaseService,
  caseService,
  influenceIds,
} from "@/lib/services/case.service";
import { getProbability, getRandomNumber } from "@/lib/utils/math";
import { findMinAboveN } from "@/lib/utils/number";

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
        include: {
          gifts: true,
        },
      });

      await tx.$executeRaw`SELECT * FROM accounts WHERE id = ${account.id} FOR UPDATE`;

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

      if (data.isDemo || influenceIds.includes(account.id)) {
        const index = getRandomNumber(0, giftCase.gifts.length - 1);
        const gift = giftCase.gifts[index];
        const isTon = gift.title === CaseService.TON_GIFT.toUpperCase();

        const responseData: ResponseData = { id: "demo", isTon, nft: gift };
        return responseData;
      }

      if (account.balance - giftCase.price < 0)
        throw new Error("INFLUENT_BALANCE");

      await tx.account.update({
        where: {
          id: account.id,
          balance: { gte: giftCase.price },
        },
        data: {
          balance: account.balance - giftCase.price,
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
