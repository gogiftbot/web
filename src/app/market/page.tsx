"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomSearch } from "@/components/Search";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

import { MarketNFT, data } from "@/components/NFT";

export default function Root() {
  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="90px">
        <Box mt="6">
          <Heading size="2xl">NFT Market</Heading>
          <Text color="text.secondary">Discover and invest in Stickers</Text>
        </Box>

        <Box mt="6">
          <CustomSearch />
        </Box>

        <SimpleGrid columns={2} gap={3} mt="3">
          {data.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MarketNFT
                id={nft.id}
                name={nft.name}
                image={nft.image}
                price={nft.price}
                rarity={nft.rarity}
                roi={nft.roi}
                sku={nft.sku}
                isNew={nft.isNew}
                isHot={nft.isHot}
                isSoldOut={nft.isSoldOut}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>
    </TransitionLink>
  );
}
