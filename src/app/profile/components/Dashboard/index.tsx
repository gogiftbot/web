"use client";

import { Box, Flex, Text, VStack, HStack, Separator } from "@chakra-ui/react";
import { motion } from "motion/react";
import { TonIcon } from "@/components/TonIcon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TransactionType } from "@/generated/prisma";

export const Dashboard = (props: { account: AccountWithGifts | null }) => {
  const withdraw =
    props.account?.transactions.reduce((total, tx) => {
      if (tx.type === TransactionType.withdraw) return total + tx.amount;
      return total;
    }, 0) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        shadow="lg"
        backgroundColor="background.primary"
        borderRadius="12px"
        px="7"
        py="4"
      >
        <HStack justifyContent="space-between" mt="2">
          <VStack gap="0">
            <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
              {props.account?._count.gifts || 0}
            </Text>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Gifts opened
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Flex align="center" gap="1">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                {props.account?.balance.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
              <TonIcon boxSize="18px" />
            </Flex>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Balance
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Flex align="center" gap="1">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                {withdraw.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
              <TonIcon boxSize="18px" />
            </Flex>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Withdraw
            </Text>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  );
};
