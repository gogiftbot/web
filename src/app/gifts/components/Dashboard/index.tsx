"use client";

import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { TonIcon } from "@/components/TonIcon";
import { Skeleton } from "@/components/Skeleton";
import { useConnectWallet } from "@/lib/hooks/useTon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { numberToString } from "@/lib/utils/number";
import { useTranslations } from "next-intl";

export const Dashboard = (props: {
  isLoading?: boolean;
  account?: AccountWithGifts | null;
}) => {
  const t = useTranslations("gifts");

  const router = useRouter();

  const [ConnectWallet, wallet] = useConnectWallet({
    isLoading: props.isLoading,
    buttonProps: {
      h: "42px",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        {props.isLoading ? (
          <Skeleton px="7" py="4" h="101px" borderRadius="21px" />
        ) : (
          <Box
            shadow="lg"
            borderRadius="21px"
            backgroundColor="background.primary"
            px="6"
            py="4"
          >
            <HStack justifyContent="space-between" gap="5" align="center">
              <VStack gap="0" align="start" lineHeight="1">
                <Text fontSize="14px" color="text.secondary">
                  {t("balance")}
                </Text>
                <Flex align="center" gap="2" mt="1">
                  <Text fontSize="4xl" fontWeight="600">
                    {numberToString(props.account?.balance || 0)}
                  </Text>
                  <TonIcon boxSize="30px" />
                </Flex>
              </VStack>

              <Box>
                {!wallet.isConnected ? (
                  <ConnectWallet />
                ) : (
                  <Button
                    text={t("top_up")}
                    h="42px"
                    onClick={() => {
                      router.push("/profile");
                    }}
                  />
                )}
              </Box>
            </HStack>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};
