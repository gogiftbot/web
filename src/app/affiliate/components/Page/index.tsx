"use client";

import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "../Dashboard";
import { Referral } from "../Referral";
import React, { useMemo } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { Skeleton } from "@/components/Skeleton";
import { config } from "@/lib/services/config.service";
import { AccountWithGifts } from "@/app/api/account/selector";

const LoadingReferrals = React.memo(() =>
  Array.from({ length: 3 }, (_, i) => (
    <Skeleton key={i} borderRadius="lg" h="60px" />
  ))
);

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const referralLink = useMemo(() => {
    if (!props.account?.referral?.value) `https://t.me/${config.BOT_NAME}`;
    return `https://t.me/${config.BOT_NAME}?startapp=${props.account?.referral?.value}`;
  }, [props.account?.referral?.value]);

  const Referrals = useMemo(() => {
    if (!props.account?.referral?.accounts.length)
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

    return props.account.referral.accounts.map((referral) => (
      <Referral key={referral.id} account={referral} />
    ));
  }, [props.account?.referral?.accounts]);

  return (
    <PageWrapper>
      <Box>
        <Heading size="2xl">Referrals</Heading>
        <Text color="text.secondary">Invite friends and earn together</Text>
      </Box>

      <Box mt="15px">
        {props.isLoading ? (
          <Skeleton h="87px" borderRadius="21px" />
        ) : (
          <Dashboard account={props.account} />
        )}
      </Box>

      <Box mt="15px">
        <CustomTextInput
          isLoading={props.isLoading}
          description="Your referral link"
          postDescription={
            <>
              Invite friends and earn{" "}
              <Text as="span" fontWeight="600" color="primary">
                {props.account?.referral?.percent}%
              </Text>{" "}
              of their deposits! Share your referral link and grow your rewards
              together.
            </>
          }
          placeholder="link"
          initialValue={`t.me/${config.BOT_NAME}`}
          rightElement={
            <Box pr="12px">
              <CopyButton value={referralLink} />
            </Box>
          }
          isEditable={false}
        />
      </Box>

      <Box>
        <Heading mt="15px" color="text.secondary" fontSize="15px">
          Your referrals
        </Heading>

        <VStack gap="2" mt="3px">
          {props.isLoading ? <LoadingReferrals /> : Referrals}
        </VStack>
      </Box>
    </PageWrapper>
  );
}
