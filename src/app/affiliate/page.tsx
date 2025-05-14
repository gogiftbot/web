"use client";

import { useContext } from "react";
import Page from "./components/Page";
import { AccountContext } from "@/components/Context/AccountContext";

export default function Root() {
  const { isLoading, account } = useContext(AccountContext);

  return <Page isLoading={isLoading} account={account} />;
}
