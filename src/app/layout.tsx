import type { Metadata } from "next";
import { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Box, Flex } from "@chakra-ui/react";

import { Provider } from "@/components/ui/provider";
import { BottomNavBar } from "@/components/BottomNavbar";
import { Toaster } from "@/components/ui/toaster";

import "@/lib/styles/globals.css";
import { Yandex } from "@/components/Yandex";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "GoGift",
  description: "GoGift",
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>

      <Suspense>
        <Yandex />
      </Suspense>

      <body>
        <NextIntlClientProvider>
          <Provider>
            <Box bgColor="background.secondary">
              <Flex justifyContent="center">
                <Box w="full" h="ful" maxW="600px">
                  {children}
                </Box>
                <BottomNavBar />
              </Flex>
            </Box>
            <Toaster />
          </Provider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
