import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { BonusType, Language } from "@/generated/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.value || typeof data.value !== "string") {
    return new Response("InvalidValue", {
      status: 400,
    });
  }

  try {
    try {
      await prisma.$transaction(async (tx) => {
        const account = await tx.account.findUniqueOrThrow({
          where: {
            id: session.user.id,
          },
          include: {
            bonuses: true,
          },
        });

        const promo = await tx.promo_code.findUnique({
          where: {
            value: data.value.trim().toLowerCase(),
          },
        });

        if (!promo) {
          throw new Error("PromoNotFound");
        }

        if (promo.uses <= 0) {
          throw new Error("PromoNoUses");
        }

        if (account.bonuses.some((bonus) => bonus.promoCodeId === promo.id)) {
          throw new Error("PromoUsed");
        }

        await tx.promo_code.update({
          where: {
            id: promo.id,
          },
          data: {
            uses: {
              decrement: 1,
            },
          },
        });

        await tx.bonus.create({
          data: {
            accountId: account.id,
            promoCodeId: promo.id,
            value: promo.bonusValue,
            type: BonusType.deposit,
          },
        });
      });
    } catch (error) {
      const message = (error as Error).message;
      if (["PromoNotFound", "PromoUsed", "PromoNoUses"].includes(message)) {
        return new Response(message, {
          status: 400,
        });
      }
      throw error;
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
