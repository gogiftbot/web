"use client";

import { AccountWithGifts } from "@/app/api/account/selector";
import { CaseWithGifts } from "@/app/api/cases/selector";
import React, { createContext, useCallback, useEffect, useState } from "react";

export type FreeCaseI = { rewards: CaseWithGifts["gifts"]; keys: number };

type AccountContext = {
  isLoading: boolean;
  fetchAccount?: () => Promise<void>;
  fetchCases?: () => Promise<void>;
  account: AccountWithGifts | null;
  cases: CaseWithGifts[];
  freeCase: FreeCaseI;
};

export const AccountContext = createContext<AccountContext>({
  isLoading: false,
  account: null,
  cases: [],
  freeCase: { rewards: [], keys: 0 },
});

export function AccountContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [accountIsLoading, setAccountIsLoading] = useState(true);
  const [casesIsLoading, setCasesIsLoading] = useState(true);
  const [account, setAccount] = useState<AccountWithGifts | null>(null);
  const [cases, setCases] = useState<CaseWithGifts[]>([]);
  const [freeCase, setFreeCase] = useState<FreeCaseI>({ rewards: [], keys: 0 });

  const fetchAccount = useCallback(async () => {
    const res = await fetch("/api/account");
    if (res.ok) {
      const data = await res.json();
      setAccount(data);
    }
  }, []);

  const fetchCases = useCallback(async () => {
    const res = await fetch("/api/cases");
    if (res.ok) {
      const data = await res.json();
      setCases(data.cases);
      setFreeCase(data.free);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setAccountIsLoading(true);
      try {
        await fetchAccount();
      } finally {
        setAccountIsLoading(false);
      }
    };

    fetchData();
  }, [fetchAccount]);

  useEffect(() => {
    const fetchData = async () => {
      setCasesIsLoading(true);
      try {
        await fetchCases();
      } finally {
        setCasesIsLoading(false);
      }
    };

    fetchData();
  }, [fetchCases]);

  return (
    <AccountContext.Provider
      value={{
        isLoading: accountIsLoading || casesIsLoading,
        fetchAccount,
        fetchCases,
        account,
        cases,
        freeCase,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
