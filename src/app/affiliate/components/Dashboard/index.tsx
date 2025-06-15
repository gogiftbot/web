"use client";

import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { TonIcon } from "@/components/TonIcon";
import { AccountWithGifts } from "@/app/api/account/selector";
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
  const t = useTranslations("friends");

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
      <HStack gap="2" w="full">
        <DashboardItemWrapper>
          <Text fontSize="21px" fontWeight="600" lineHeight="1">
            {props.account?.referral?.accounts.length || 0}
          </Text>
          <Text fontSize="15px" color="text.secondary" mt="2">
            {t("dashboard_referrals")}
          </Text>
        </DashboardItemWrapper>

        <DashboardItemWrapper>
          <Text fontSize="21px" fontWeight="600" lineHeight="1">
            {giftsOpened}
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
              {numberToString(deposit)}
            </Text>
            <TonIcon boxSize="21px" />
          </Flex>
          <Text fontSize="15px" color="text.secondary" mt="2">
            {t("dashboard_deposit")}
          </Text>
        </DashboardItemWrapper>
      </HStack>
    </motion.div>
  );
};
