"use client";

import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Referral, ReferralProps } from "./components/Referral";
import React, { useContext, useMemo } from "react";
import { AccountContext } from "@/components/Context/AccountContext";
import { PageWrapper } from "@/components/PageWrapper";
import { Skeleton } from "@/components/Skeleton";
import { config } from "@/lib/services/config.service";

const LoadingReferrals = React.memo(() =>
  Array.from({ length: 3 }, (_, i) => (
    <Skeleton key={i} borderRadius="lg" h="60px" />
  ))
);

export default function Root() {
  const { isLoading, account } = useContext(AccountContext);

  const referralLink = useMemo(() => {
    if (!account?.referral?.value) `https://t.me/${config.BOT_NAME}/app`;
    return `https://t.me/${config.BOT_NAME}/app?startapp=${account?.referral?.value}`;
  }, [account?.referral?.value]);

  const Referrals = useMemo(() => {
    if (!account?.referral?.accounts.length)
      return (
        <Box
          w="full"
          bgColor="background.primary"
          shadow="lg"
          borderRadius="lg"
          px="3"
          py="3"
        >
          <Text fontWeight="600" fontSize="17px">
            You haven’t invited anyone yet!
          </Text>
          <Text color="text.secondary" fontSize="14px" mt="3">
            Copy your referral link, share it with friends, and earn together.
            Every invite brings you closer to new rewards.
          </Text>
        </Box>
      );

    return account.referral.accounts.map((referral) => (
      <Referral key={referral.id} account={referral} />
    ));
  }, [account?.referral?.accounts]);

  return (
    <PageWrapper>
      <Box>
        <Heading size="2xl">Referrals</Heading>
        <Text color="text.secondary">Invite friends and earn together</Text>
      </Box>

      <Box mt="5">
        {isLoading ? (
          <Skeleton h="87px" borderRadius="21px" />
        ) : (
          <Dashboard account={account} />
        )}
      </Box>

      <Box mt="5">
        <CustomTextInput
          isLoading={isLoading}
          description="Your referral link"
          postDescription={
            <>
              Invite friends and earn{" "}
              <Text as="span" fontWeight="600" color="primary">
                {account?.referral?.percent}%
              </Text>{" "}
              of their deposits! Share your referral link and grow your rewards
              together.
            </>
          }
          placeholder="link"
          initialValue="t.me/gogift"
          rightElement={
            <Box pr="3">
              <CopyButton value={referralLink} />
            </Box>
          }
          isEditable={false}
        />
      </Box>

      <Heading mt="5" color="text.secondary" fontSize="14px">
        Your referrals
      </Heading>

      <VStack gap="2">{isLoading ? <LoadingReferrals /> : Referrals}</VStack>
    </PageWrapper>
  );
}
