"use client";

import { Box, Flex, Text, VStack, HStack, Separator } from "@chakra-ui/react";
import { motion } from "motion/react";
import { BalanceChart } from "@/components/BalanceChart";
import { TonIcon } from "@/components/TonIcon";
import { AccountWithNftAndTransaction } from "@/lib/selectors/account";
import { Skeleton } from "@/components/Skeleton";

export const Dashboard = (props: {
  isLoading?: boolean;
  account?: AccountWithNftAndTransaction;
}) => {
  const dailyIncome = props.account?.nfts.reduce(
    (total, nft) => total + nft.nft.price * nft.nft.roi,
    0
  );

  const monthlyIncome = props.account?.nfts.reduce(
    (total, nft) =>
      total +
      nft.nft.price *
        (nft.nft.roi / 100) *
        (nft.nft.iterations - nft.transactions.length),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        {props.isLoading ? (
          <Skeleton px="7" py="4" my="10" h="169px" borderRadius="21px" />
        ) : (
          <Box
            shadow="lg"
            backgroundColor="background.primary"
            px="7"
            py="4"
            my="10"
            borderRadius="21px"
          >
            <HStack justifyContent="space-between" mt="2">
              <VStack gap="0" align="start">
                <Text fontSize="sm" color="text.secondary" lineHeight="0.5">
                  Total balance
                </Text>
                <Flex align="center" gap="2">
                  <Text fontSize="4xl" fontWeight="600">
                    {props.account?.balance.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Text>
                  <TonIcon boxSize="30px" />
                </Flex>
              </VStack>
              <Box width="full" pl="6">
                <BalanceChart
                  height="12"
                  width="full"
                  values={
                    props.account?.nfts.flatMap((nft) =>
                      nft.transactions.map((transaction) => transaction.amount)
                    ) || []
                  }
                />
              </Box>
            </HStack>

            <Separator opacity="0.15" my="2" variant="dashed" />

            <HStack justifyContent="space-between" mt="4">
              <VStack gap="0">
                <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                  {props.account?.nfts.length}
                </Text>
                <Text fontSize="sm" color="text.secondary">
                  Stickers
                </Text>
              </VStack>

              <VStack gap="0">
                <Flex align="center" gap="2">
                  <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                    {dailyIncome?.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                  <TonIcon boxSize="18px" />
                </Flex>

                <Text fontSize="sm" color="text.secondary">
                  Daily income
                </Text>
              </VStack>

              <VStack gap="0">
                <Flex align="center" gap="2">
                  <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                    {monthlyIncome?.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                  <TonIcon boxSize="18px" />
                </Flex>

                <Text fontSize="sm" color="text.secondary">
                  Monthly income
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};
