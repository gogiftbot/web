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
        const res1 = await fetch("/api/cases");
        if (res1.ok) {
          const data = await res1.json();
          setCases(data);
        }

        const res2 = await fetch("/api/account");
        if (res2.ok) {
          const data = await res2.json();
          setAccount(data);
        }
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
