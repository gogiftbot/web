"use client";

import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/lib/styles/theme";
import { TelegramTheme } from "../Telegram";
import { Auth } from "./Auth";
import { AccountContextProvider } from "../Context/AccountContext";

export function Provider(props: React.PropsWithChildren) {
  return (
    <TelegramTheme>
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
            <Auth>
              <AccountContextProvider>{props.children}</AccountContextProvider>
            </Auth>
          </SessionProvider>
        </ChakraProvider>
      </TonConnectUIProvider>
    </TelegramTheme>
  );
}
