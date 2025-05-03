"use client";

import Page from "./components/Page";
import { AccountWithNftAndTransaction } from "@/lib/selectors/account";

type Props = {
  account?: AccountWithNftAndTransaction;
};

export default function PageWrapper({ account }: Props) {
  return <Page account={account} />;
}
