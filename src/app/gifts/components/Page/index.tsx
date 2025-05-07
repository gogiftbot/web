"use client";

import { Box, Heading, SimpleGrid, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

import { ProfileNFT } from "@/components/NFT";
import { TransitionLink } from "@/components/PageTransition";
import { useTouch } from "@/lib/hooks/useTouch";
import { useRouter } from "next/navigation";
import { Dashboard } from "../Dashboard";
import {
  AccountWithNftAndTransaction,
  CaseWithGifts,
} from "@/lib/selectors/account";
import { Skeleton } from "@/components/Skeleton";
import { Case } from "@/components/Case";
import { AccountWithGifts } from "@/app/api/account/selector";

type PageProps = {
  cases: CaseWithGifts[];
  account?: AccountWithGifts | null;
  isLoading?: boolean;
  updateAccount: () => Promise<void>;
};

export default function Page(props: PageProps) {
  const router = useRouter();

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      router.push("/market");
    },
  });

  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="90px">
        <Dashboard account={props.account} isLoading={props.isLoading} />

        {props.cases[0] ? (
          <Case
            updateAccount={props.updateAccount}
            isLoading={props.isLoading}
            payload={props.cases[0]}
          />
        ) : null}

        {/* <Flex justifyContent="space-between">
          <Heading>Your NFT collection</Heading>

          <Box {...touch}>
            <Text color="primary" opacity={isActive ? 0.7 : 1}>
              See all
            </Text>
          </Box>
        </Flex>

        <Box mt="2">
          {props.isLoading ? (
            <SimpleGrid columns={2} gap={3}>
              <Skeleton h="189px" borderRadius="12px" />
              <Skeleton h="189px" borderRadius="12px" />
              <Skeleton h="189px" borderRadius="12px" />
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={2} gap={3}>
              {props.account?.nfts.map((nft, index) => (
                <motion.div
                  key={nft.nftId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProfileNFT payload={nft} />
                </motion.div>
              ))}
            </SimpleGrid>
          )}
        </Box> */}
      </VStack>
    </TransitionLink>
  );
}
