import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Box, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { BottomNavBar } from "@/components/BottomNavbar";
import "@/lib/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "GoGift!",
  description: "GoGift! TMA",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
      </head>
      <body>
        <Provider>
          <Box bgColor="background.secondary">
            <Flex justifyContent="center">
              <Box w="full" h="ful" maxW="600px">
                {children}
              </Box>
              <BottomNavBar />
            </Flex>
          </Box>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
