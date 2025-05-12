"use client";

import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { TonIcon } from "@/components/TonIcon";
import { Skeleton } from "@/components/Skeleton";
import { useConnectWallet } from "@/lib/hooks/useTon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export const Dashboard = (props: {
  isLoading?: boolean;
  account?: AccountWithGifts | null;
}) => {
  const router = useRouter();

  const [ConnectWallet, wallet] = useConnectWallet({
    isLoading: props.isLoading,
    buttonProps: {
      h: "40px",
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
                  Balance
                </Text>
                <Flex align="center" gap="2" mt="1">
                  <Text fontSize="4xl" fontWeight="600">
                    {props.account?.balance.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Text>
                  <TonIcon boxSize="30px" />
                </Flex>
              </VStack>

              <Box>
                {!wallet.isConnected ? (
                  <ConnectWallet />
                ) : (
                  <Button
                    text="Top up"
                    h="40px"
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
