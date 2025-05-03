"use client";

import { nft } from "@/generated/prisma";
import Page from "./components/Page";

type Props = {
  nfts?: nft[];
};

export default function PageWrapper({ nfts }: Props) {
  return <Page nfts={nfts} />;
}
