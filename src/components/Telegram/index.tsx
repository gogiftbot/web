"use client";

import { useEffect } from "react";

export const TelegramTheme = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      try {
        window.Telegram.WebApp.disableVerticalSwipes?.();
        window.Telegram.WebApp.enableClosingConfirmation?.();
        window.Telegram.WebApp.setHeaderColor?.("#0f1c2e");
        window.Telegram.WebApp.setBackgroundColor?.("#0f1c2e");
        // window.Telegram.WebApp.BackButton?.onClick?.(() => {
        //   history.back();
        // });
        // window.Telegram.WebApp.BackButton?.show?.();

        window.Telegram.WebApp.lockOrientation?.();
        try {
          window.Telegram.WebApp.requestFullscreen?.();
        } catch (error) {}
        window.Telegram.WebApp.ready?.();
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      if (history.length > 1) {
        window.Telegram.WebApp.BackButton?.onClick?.(() => {
          window.history.back();
        });
        window.Telegram.WebApp.BackButton?.show?.();
      } else {
        window.Telegram.WebApp.BackButton?.hide?.();
      }
    }
  }, [history?.length]);

  return <>{children}</>;
};
