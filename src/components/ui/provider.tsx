"use client";

import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/lib/styles/theme";
import { Auth } from "./Auth";

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={customTheme}>
      <SessionProvider>
        <Auth>{props.children}</Auth>
      </SessionProvider>
    </ChakraProvider>
  );
}
