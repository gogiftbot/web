"use client";

import { Box, Heading, SimpleGrid, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

import { ProfileNFT } from "@/components/NFT";
import { TransitionLink } from "@/components/PageTransition";
import { useTouch } from "@/lib/hooks/useTouch";
import { useRouter } from "next/navigation";
import { Dashboard } from "../Dashboard";
import { AccountWithNftAndTransaction } from "@/lib/selectors/account";

type PageProps = {
  account?: AccountWithNftAndTransaction;
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
        <Dashboard />

        <Flex justifyContent="space-between">
          <Heading>Your NFT collection</Heading>

          <Box {...touch}>
            <Text color="primary" opacity={isActive ? 0.7 : 1}>
              See all
            </Text>
          </Box>
        </Flex>

        <SimpleGrid columns={2} gap={3} mt="2">
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
      </VStack>
    </TransitionLink>
  );
}
