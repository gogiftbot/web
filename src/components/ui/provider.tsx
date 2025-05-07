"use client";

import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/lib/styles/theme";
import { Auth } from "./Auth";

export function Provider(props: React.PropsWithChildren) {
  return (
    <TonConnectUIProvider
      manifestUrl={`https://web-virid-kappa.vercel.app/tonconnect-manifest.json`}
      uiPreferences={{ theme: THEME.DARK }}
      language="en"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/caeruscasinobot/app",
      }}
    >
      <ChakraProvider value={customTheme}>
        <SessionProvider>
          <Auth>{props.children}</Auth>
        </SessionProvider>
      </ChakraProvider>
    </TonConnectUIProvider>
  );
}
