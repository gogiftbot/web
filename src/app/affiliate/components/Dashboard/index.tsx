"use client";

import { Box, Flex, Text, VStack, HStack, Separator } from "@chakra-ui/react";
import { motion } from "motion/react";
import { BalanceChart } from "@/components/BalanceChart";
import { TonIcon } from "@/components/TonIcon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { numberToString } from "@/lib/utils/number";

export const Dashboard = (props: { account: AccountWithGifts | null }) => {
  const giftsOpened =
    props.account?.referral?.accounts.reduce(
      (total, account) => total + account._count.gifts,
      0
    ) || 0;

  const deposit =
    props.account?.referral?.accounts.reduce(
      (total, account) =>
        total +
        account.transactions
          .filter(
            (tx) =>
              tx.type === "deposit" &&
              tx.status === "completed" &&
              tx.currency === "ton"
          )
          .reduce((total, tx) => total + tx.amount, 0),
      0
    ) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        shadow="lg"
        backgroundColor="background.primary"
        borderRadius="21px"
        px="7"
        py="4"
      >
        <HStack justifyContent="space-between" mt="2">
          <VStack gap="0">
            <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
              {props.account?.referral?.accounts.length || 0}
            </Text>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Referrals
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
              {giftsOpened}
            </Text>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Gifts opened
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Flex align="center" gap="1">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                {numberToString(deposit)}
              </Text>
              <TonIcon boxSize="18px" />
            </Flex>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Deposit
            </Text>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  );
};
