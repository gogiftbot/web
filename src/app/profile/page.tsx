"use client";

import { Box, Heading, SimpleGrid, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

import { ProfileNFT, data } from "@/components/NFT";
import { TransitionLink } from "@/components/PageTransition";
import { useTouch } from "@/lib/hooks/useTouch";
import { useRouter } from "next/navigation";
import { Dashboard } from "./components/Dashboard";

export default function Root() {
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
          {data.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProfileNFT
                id={nft.id}
                name={nft.name}
                image={nft.image}
                price={nft.price}
                rarity={nft.rarity}
                collectDate={nft.collectDate}
                roi={nft.roi}
                sku={nft.sku}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>
    </TransitionLink>
  );
}
