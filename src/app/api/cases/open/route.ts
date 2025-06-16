import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { CaseService, caseService } from "@/lib/services/case.service";
import { getRandomNumber } from "@/lib/utils/math";
import { findMinAboveN } from "@/lib/utils/number";

type ResponseData = {
  id: string;
  isTon: boolean;
  nft: { id: string; title: string; price: number; sku: string };
};

export const allowedFirstCaseIds = [
  "4e5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t", // Big Tease
  "6g5h4i3j-2k1l-0m9n-8o7p-6q5r4s3t2u1v", // Dreamy Mix
  "5b2c9d8e-1f3a-47e8-b6d5-0c4a3b2e1d9f", // Standard
  "7d0eb1d0-0302-46fb-9f61-ad7a421d66ac", // First Shot
  "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q", // Golden Dream
  "3a8e7b2c-4d5f-49a1-b7c6-2f3e1d0c9b8a", // Basic
  "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Mystery Box
];

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

      if (data.isDemo) {
        const index = getRandomNumber(0, giftCase.gifts.length - 1);
        const gift = giftCase.gifts[index];
        const isTon = gift.title === CaseService.TON_GIFT.toUpperCase();

        const responseData: ResponseData = { id: "demo", isTon, nft: gift };
        return responseData;
      }

      await tx.account.update({
        where: {
          id: account.id,
          balance: { gte: giftCase.price },
        },
        data: {
          balance: account.balance - giftCase.price,
        },
      });

      if (!account.gifts.length && allowedFirstCaseIds.includes(giftCase.id)) {
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
