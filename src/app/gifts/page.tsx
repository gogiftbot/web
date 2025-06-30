"use client";

import { useContext } from "react";
import Page from "./components/Page";
import { AccountContext } from "@/components/Context/AccountContext";

export default function RootPage() {
  const { isLoading, account, cases, freeCase } = useContext(AccountContext);

  return (
    <Page
      cases={cases}
      freeCase={freeCase}
      account={account}
      isLoading={isLoading}
    />
  );
}
