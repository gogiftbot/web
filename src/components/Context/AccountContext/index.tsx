"use client";

import { AccountWithGifts } from "@/app/api/account/selector";
import { CaseWithGifts } from "@/app/api/cases/selector";
import React, { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type AccountContext = {
  isLoading: boolean;
  account: AccountWithGifts | null;
  cases: CaseWithGifts[];
};

export const AccountContext = createContext<AccountContext>({
  isLoading: false,
  account: null,
  cases: [],
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

  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(`:4000`, {
      path: "/api/socket",
      addTrailingSlash: false,
    });

    socketInstance.on("connect", () => {
      setIsConnected(true);
      console.log("SOCKET CONNECTED");
    });

    socketInstance.on("disconnect", () => {
      setIsConnected(false);
      console.log("SOCKET DISCONNECTED");
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    const callback = (message: string) => {
      console.log("MESSAGE:", message);
    };

    socket.on("account:receive", callback);

    return () => {
      socket.off("account:receive", callback);
    };
  }, [socket]);

  useEffect(() => {
    const fetchData = async () => {
      setAccountIsLoading(true);
      try {
        const res = await fetch("/api/account");
        if (res.ok) {
          const data = await res.json();
          setAccount(data);
        }
      } finally {
        setAccountIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setCasesIsLoading(true);
      try {
        const res = await fetch("/api/cases");
        if (res.ok) {
          const data = await res.json();
          setCases(data);
        }
      } finally {
        setCasesIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AccountContext.Provider
      value={{ isLoading: accountIsLoading || casesIsLoading, account, cases }}
    >
      {children}
    </AccountContext.Provider>
  );
}
