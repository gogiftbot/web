import prisma from "@/lib/prisma";

export async function getAccount() {
  const account = await prisma.account.findUniqueOrThrow({
    where: {
      id: "cd5d6e66-71fc-4d7a-96a0-4ef5fccd7788",
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

  console.log(account);

  return account;
}
