"use client";

import { useContext } from "react";
import Page from "./components/Page";
import { AccountContext } from "@/components/Context/AccountContext";

export default function RootPage() {
  const { isLoading, account, cases } = useContext(AccountContext);

  return <Page cases={cases} account={account} isLoading={isLoading} />;
}
