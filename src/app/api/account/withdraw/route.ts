import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { TransactionStatus, TransactionType } from "@/generated/prisma";
import { botService } from "@/lib/services/bot.service";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.amount || typeof data.amount !== "number" || !data.address) {
    return new Response("InvalidAmount", {
      status: 400,
    });
  }

  if (!data.address) {
    return new Response("InvalidAddress", {
      status: 400,
    });
  }

  try {
    const transaction = await prisma.$transaction(async (tx) => {
      const account = await tx.account.findUniqueOrThrow({
        where: {
          id: session.user.id,
        },
      });

      if (account.balance < data.amount) {
        throw new Error("InfluentBalance");
      }

      await tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          balance: {
            decrement: data.amount,
          },
        },
      });

      const transaction = await tx.transaction.create({
        data: {
          amount: data.amount,
          accountId: account.id,
          status: TransactionStatus.pending,
          type: TransactionType.withdraw,
          address: data.address,
        },
      });

      return transaction;
    });

    await botService.onWithdraw({ transactionId: transaction.id });

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
