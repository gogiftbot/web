"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomSearch } from "@/components/Search";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

import { MarketNFT } from "@/components/NFT";
import { nft } from "@/generated/prisma";
import { useCallback, useState } from "react";

type PageProps = {
  nfts?: nft[];
};

export default function Page(props: PageProps) {
  const [search, setSearch] = useState("");

  const filterFun = useCallback(
    (nft: nft) => {
      if (!search) {
        return true;
      }
      if (
        nft.title
          .toLocaleLowerCase()
          .split(" ")
          .some((item) => item.includes(search.toLocaleLowerCase()))
      ) {
        return true;
      }
      if (nft.sku.includes(search)) {
        return true;
      }
    },
    [search]
  );

  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="90px">
        <Box mt="6">
          <Heading size="2xl">NFT Market</Heading>
          <Text color="text.secondary">Discover and invest in Stickers</Text>
        </Box>

        <Box mt="6">
          <CustomSearch onValueChange={setSearch} />
        </Box>

        <SimpleGrid columns={2} gap={3} mt="3">
          {props.nfts?.filter(filterFun).map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MarketNFT nft={nft} />
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>
    </TransitionLink>
  );
}
