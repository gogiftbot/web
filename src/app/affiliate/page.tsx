"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Referral, ReferralProps } from "./components/Referral";

const data: ReferralProps["referral"][] = [
  {
    id: "1",
    name: "@denis",
    date: new Date(Date.now() - 60 * 24 * 24),
    investment: 15000,
    earnings: 2500,
    nfts: 3,
  },
  {
    id: "2",
    name: "@denis",
    date: new Date(Date.now() - 60 * 24 * 12),
    investment: 25000,
    earnings: 4200,
    nfts: 5,
  },
  {
    id: "3",
    name: "@denis",
    date: new Date(Date.now() - 60 * 24 * 2),
    investment: 8000,
    earnings: 1200,
    nfts: 2,
  },
];

export default function Root() {
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
          {data.map((referral) => (
            <Referral key={referral.id} referral={referral} />
          ))}
        </VStack>
      </VStack>
    </TransitionLink>
  );
}
