"use client";

import { nft } from "@prisma/client";
import Page from "./components/Page";

type Props = {
  nfts?: nft[];
};

export default function PageWrapper({ nfts }: Props) {
  return <Page nfts={nfts} />;
}
