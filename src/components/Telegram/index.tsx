"use client";

import { Box } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const TelegramTheme = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
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

  useEffect(() => {
    if (typeof window === "undefined" || !window.Telegram?.WebApp) return;

    const webApp = window.Telegram.WebApp;
    const backButton = webApp.BackButton;

    if (!backButton) return;

    const onBackButtonClick = () => {
      if (window.history.length > 1) {
        router.back();
      }
    };

    const handleRouteChange = () => {
      if (window.history.length > 1) {
        backButton.show?.();
      } else {
        backButton.hide?.();
      }
    };

    handleRouteChange();
    backButton.onClick?.(onBackButtonClick);

    return () => {
      backButton.offClick?.(onBackButtonClick);
      backButton.hide?.();
    };
  }, [router, pathname]);

  return <Box pt={isFullScreen ? "99px" : "9"}>{children}</Box>;
};
