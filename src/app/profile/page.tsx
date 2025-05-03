import prisma from "@/lib/prisma";

import dynamic from "next/dynamic";

const Page = dynamic(() => import("./components/Page"), {
  ssr: false,
});

export default async function Root() {
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

  return <Page account={account} />;
}
