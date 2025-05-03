import prisma from "@/lib/prisma";

export async function getNfts() {
  const nfts = await prisma.nft.findMany({
    orderBy: {
      title: "desc",
    },
    // cacheStrategy: { swr: 60, ttl: 60 },
  });

  return nfts;
}
