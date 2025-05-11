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
        window.Telegram.WebApp.BackButton?.onClick?.(() => {
          history.back();
        });
        window.Telegram.WebApp.BackButton?.show?.();

        window.Telegram.WebApp.lockOrientation?.();
        try {
          window.Telegram.WebApp.requestFullscreen?.();
        } catch (error) {}
        window.Telegram.WebApp.ready?.();
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    const handleHistoryChange = () => {
      if (typeof window !== "undefined" && window.Telegram?.WebApp) {
        if (window.history.length > 1) {
          window.Telegram.WebApp.BackButton?.show?.();
        } else {
          window.Telegram.WebApp.BackButton?.hide?.();
        }
      }
    };

    // Подписываемся на события изменения истории
    window.addEventListener("popstate", handleHistoryChange);

    return () => {
      window.removeEventListener("popstate", handleHistoryChange);
    };
  }, []);

  return <>{children}</>;
};
