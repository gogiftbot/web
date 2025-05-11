"use client";

import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";
import { useTelegram } from "@/lib/hooks/useTelegram";

export function Auth({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foo = async () => {
      setIsLoading(true);
      try {
        const session = await getSession();
        console.log("auth_session", session);
        const [data] = useTelegram();

        if (!session && data) {
          const response = await fetch("/api/auth/telegram", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
          });

          const json = await response.json();
          if (!json.accountId) throw new Error("INVALID_JSON");

          await signIn("credentials", {
            accountId: json.accountId,
            redirect: false,
          });
        }
      } catch (error) {
        await signOut();
      } finally {
        setIsLoading(false);
      }
    };

    foo();
  }, []);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return <>{children}</>;
}
