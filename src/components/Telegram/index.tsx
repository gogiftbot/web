"use client";

import telegramAnalytics from "@telegram-apps/analytics";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const TelegramTheme = ({ children }: { children: React.ReactNode }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      try {
        window.Telegram.WebApp.disableVerticalSwipes?.();
        window.Telegram.WebApp.enableClosingConfirmation?.();
        window.Telegram.WebApp.setHeaderColor?.("#0f1c2e");
        window.Telegram.WebApp.setBackgroundColor?.("#0f1c2e");

        window.Telegram.WebApp.lockOrientation?.();
        try {
          window.Telegram.WebApp.requestFullscreen?.();
          setIsFullScreen(true);
        } catch (error) {}
        window.Telegram.WebApp.ready?.();
      } catch (error) {}
    }

    telegramAnalytics.init({
      token:
        "eyJhcHBfbmFtZSI6IkdvR2lmdCIsImFwcF91cmwiOiJodHRwczovL3QubWUvR29HaWZ0X29mZmljaWFsX2JvdCIsImFwcF9kb21haW4iOiJodHRwczovL2dvZ2lmdC52ZXJjZWwuYXBwIn0=!/coOflWMvS/RcQhnr1am7akrkHhSQVuusbMqJWlTvo4=",
      appName: "GoGift",
    });
  }, []);

  return <Box pt={isFullScreen ? "99px" : "9"}>{children}</Box>;
};
