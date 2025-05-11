"use client";

import { useEffect } from "react";

export const TelegramTheme = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      try {
        window.Telegram.WebApp.disableVerticalSwipes?.();
        window.Telegram.WebApp.enableClosingConfirmation?.();
        window.Telegram.WebApp.setHeaderColor?.("#0f1c2e");
        window.Telegram.WebApp.setBackgroundColor?.("#0f1c2e");
        window.Telegram.WebApp.BackButton?.onClick?.(() => {
          history.back();
        });
        window.Telegram.WebApp.BackButton?.show?.();

        window.Telegram.WebApp.lockOrientation?.();
        // window.Telegram.WebApp.requestFullscreen?.();
        window.Telegram.WebApp.ready?.();
      } catch (error) {}
    }
  }, []);

  return <>{children}</>;
};
