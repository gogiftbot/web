"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Referral, ReferralProps } from "./components/Referral";
import { AccountWithGifts } from "../api/account/selector";
import { useEffect, useState } from "react";
import Page from "./components/Page";

export default function Root(props: { account: AccountWithGifts }) {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<AccountWithGifts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/account");
        if (res.ok) {
          const data = await res.json();
          setAccount(data);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return <Page isLoading={isLoading} account={account} />;
}
