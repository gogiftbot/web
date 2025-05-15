"use client";

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
  }, []);

  return <Box pt={isFullScreen ? "99px" : "9"}>{children}</Box>;
};
