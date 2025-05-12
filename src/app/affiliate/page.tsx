"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Referral, ReferralProps } from "./components/Referral";
import { useContext } from "react";
import { AccountContext } from "@/components/Context/AccountContext";

export default function Root() {
  const { isLoading, account } = useContext(AccountContext);
  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="96px">
        <Box mt="6">
          <Heading size="2xl">Referrals</Heading>
          <Text color="text.secondary">Invite friends and earn together</Text>
        </Box>

        <Box mt="5">
          <Dashboard />
        </Box>

        <Box mt="5">
          <CustomTextInput
            isLoading={false}
            description="Your referral link"
            placeholder="link"
            initialValue="t.me/stickerinvest"
            rightElement={
              <Box pr="3">
                <CopyButton value={""} />
              </Box>
            }
            isEditable={false}
          />
        </Box>

        <Heading mt="5">Your referrals</Heading>

        <VStack>
          {account?.referral?.accounts.map((referral) => (
            <Referral key={referral.id} account={referral} />
          ))}
        </VStack>
      </VStack>
    </TransitionLink>
  );
}
