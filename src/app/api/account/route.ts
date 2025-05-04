import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const account = await prisma.account.findUniqueOrThrow({
    where: {
      id: session.user.id,
    },

    include: {
      nfts: {
        include: {
          transactions: {
            orderBy: {
              createdAt: "desc",
            },
          },
          nft: true,
        },
        orderBy: {
          nft: {
            title: "desc",
          },
        },
      },
    },
  });

  return Response.json(account);
}
