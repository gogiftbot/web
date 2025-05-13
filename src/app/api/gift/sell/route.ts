import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.accountGiftId || typeof data.accountGiftId !== "string") {
    return new Response("InvalidGiftId", {
      status: 400,
    });
  }

  try {
    await prisma.$transaction(async (tx) => {
      const account = await tx.account.findUniqueOrThrow({
        where: {
          id: session.user.id,
        },
      });

      const accountGift = await tx.account_gift.findFirstOrThrow({
        where: {
          id: data.accountGiftId,
          accountId: account.id,
          isSold: false,
          isWithdraw: false,
        },
      });

      await tx.account_gift.update({
        where: {
          id: accountGift.id,
        },
        data: {
          isSold: true,
        },
      });

      await tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          balance: {
            increment: accountGift.price,
          },
        },
      });
    });
    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
