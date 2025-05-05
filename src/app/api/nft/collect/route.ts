import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  try {
    const body = await req.json();

    if (!body.nftId) {
      return new Response("Invalid nftId", { status: 400 });
    }

    // if (payload.transactions.length === payload.nft.iterations) {
    //   state.isCollected = true;
    // }
    // if (!payload.transactions.length) {
    //   state.collectDate = new Date(
    //     new Date(payload.createdAt).getTime() + 60 * 60 * 24 * 1000
    //   );
    // } else {
    //   state.collectDate = new Date(
    //     new Date(payload.transactions[0].createdAt).getTime() +
    //       60 * 60 * 24 * 1000
    //   );
    // }

    // if (state.collectDate.getTime() <= Date.now()) {
    //   state.collectDate = undefined;
    // } else {
    //   state.countdown = useCountdown(state.collectDate);
    // }

    const nft = await prisma.account_nft.findUniqueOrThrow({
      where: {
        accountId_nftId: {
          accountId: session.user.id,
          nftId: body.nftId,
        },
      },
      select: {
        accountId: true,
        nftId: true,
        createdAt: true,
        nft: {
          select: {
            iterations: true,
          },
        },
        transactions: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (nft.transactions.length === nft.nft.iterations) {
      throw new Error("INVALID");
    }


    if (!nft.transactions.length && nft.createdAt.getTime() + 60 * 60 * 24 * 1000)
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
