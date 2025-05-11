"use client";

import { useCallback, useEffect, useState } from "react";
import Page from "./components/Page";
import { CaseWithGifts } from "@/lib/selectors/account";
import { AccountWithGifts } from "../api/account/selector";

export default function RootPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<AccountWithGifts | null>(null);
  const [cases, setCases] = useState<CaseWithGifts[]>([]);

  const updateAccount = useCallback(async () => {
    try {
      const res2 = await fetch("/api/account");
      if (res2.ok) {
        const data = await res2.json();
        setAccount(data);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetch("/api/cases").then(async (res) => {
            if (res) {
              const data = await res.json();
              setCases(data);
            }
          }),
          fetch("/api/account").then(async (res) => {
            if (res.ok) {
              const data = await res.json();
              setAccount(data);
            }
          }),
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Page
      cases={cases}
      account={account}
      updateAccount={updateAccount}
      isLoading={isLoading}
    />
  );
}
