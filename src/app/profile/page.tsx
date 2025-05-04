"use client";

import { useEffect, useState } from "react";
import Page from "./components/Page";
import { AccountWithNftAndTransaction } from "@/lib/selectors/account";

export default function RootPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<AccountWithNftAndTransaction | null>(
    null
  );

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await fetch("/api/account");
      if (res.ok) {
        const data = await res.json();
        setAccount(data);
      }
    };

    fetchAccount().finally(() => {
      setIsLoading(false);
    });
  }, []);

  return <Page account={account} isLoading={isLoading} />;
}
