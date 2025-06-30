"use client";

import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/lib/styles/theme";
import { TelegramTheme } from "../Telegram";
import { Auth } from "./Auth";
import { AccountContextProvider } from "../Context/AccountContext";
import { config } from "@/lib/services/config.service";

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={customTheme}>
      <TelegramTheme>
        <TonConnectUIProvider
          manifestUrl={`https://gogift-teal.vercel.app/tonconnect-manifest.json`}
          uiPreferences={{ theme: THEME.DARK }}
          language="en"
          actionsConfiguration={{
            twaReturnUrl: `https://t.me/${config.BOT_NAME}`,
          }}
        >
          <SessionProvider>
            <Auth>
              <AccountContextProvider>{props.children}</AccountContextProvider>
            </Auth>
          </SessionProvider>
        </TonConnectUIProvider>
      </TelegramTheme>
    </ChakraProvider>
  );
}
