"use client";

import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { TonIcon } from "@/components/TonIcon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TransactionType } from "@/generated/prisma";
import { numberToString } from "@/lib/utils/number";
import { useTranslations } from "next-intl";

const DashboardItemWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      borderRadius="lg"
      shadow="lg"
      backgroundColor="background.primary"
      p="4"
      w="full"
    >
      <VStack gap="0">{children}</VStack>
    </Box>
  );
};

export const Dashboard = (props: { account: AccountWithGifts | null }) => {
  const t = useTranslations("profile");

  const withdraw =
    props.account?.transactions.reduce((total, tx) => {
      if (
        tx.type === TransactionType.withdraw &&
        tx.currency === "ton" &&
        tx.status !== "declined"
      )
        return total + tx.amount;
      return total;
    }, 0) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HStack gap="2" w="full">
        <DashboardItemWrapper>
          <Text fontSize="21px" fontWeight="600" lineHeight="1">
            {props.account?._count.gifts || 0}
          </Text>
          <Text
            fontSize="15px"
            color="text.secondary"
            mt="2"
            whiteSpace="nowrap"
          >
            {t("dashboard_gifts_opened")}
          </Text>
        </DashboardItemWrapper>

        <DashboardItemWrapper>
          <Flex align="center" gap="1">
            <Text fontSize="21px" fontWeight="600" lineHeight="1">
              {numberToString(props.account?.balance || 0)}
            </Text>
            <TonIcon boxSize="21px" />
          </Flex>
          <Text fontSize="15px" color="text.secondary" mt="2">
            {t("dashboard_balance")}
          </Text>
        </DashboardItemWrapper>

        <DashboardItemWrapper>
          <Flex align="center" gap="1">
            <Text fontSize="21px" fontWeight="600" lineHeight="1">
              {numberToString(withdraw)}
            </Text>
            <TonIcon boxSize="21px" />
          </Flex>
          <Text fontSize="15px" color="text.secondary" mt="2">
            {t("dashboard_withdraw")}
          </Text>
        </DashboardItemWrapper>
      </HStack>
    </motion.div>
  );
};
