import Page from "./components/Page";
import prisma from "@/lib/prisma";

export default async function Root() {
  const nfts = await prisma.nft.findMany({
    orderBy: {
      title: "desc",
    },
    // cacheStrategy: { swr: 60, ttl: 60 },
  });

  return <Page nfts={nfts} />;
}
