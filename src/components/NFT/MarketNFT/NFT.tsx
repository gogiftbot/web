"use client";

import { Box, Flex, Text, Badge } from "@chakra-ui/react";
import { motion } from "motion/react";
import { Sticker } from "../Sticker";
import { nft } from "@/generated/prisma";
import { useState } from "react";
import { useTouch } from "@/lib/hooks/useTouch";
import { MarketNFTModal } from "./Modal";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { TonIcon } from "@/components/TonIcon";

export interface MarketNFTProps {
  nft: nft;
}

export const MarketNFT = ({ nft }: MarketNFTProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      setIsOpen(true);
    },
  });

  return (
    <>
      <motion.div
        {...touch}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: isActive ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Box
          bg={"background.primary"}
          borderRadius="12px"
          shadow="lg"
          transition="all 0.2s"
        >
          <Box position="relative">
            <Box borderRadius="12px" overflow="hidden" position="relative">
              <Sticker sku={nft.sku} />
            </Box>

            <Flex position="absolute" top="2" left="2" gap="1">
              <Badge
                bgColor="background.primary"
                py="1"
                px="2"
                borderRadius="full"
              >
                <Text fontSize="12px" color="white">
                  #{nft.sku}
                </Text>
              </Badge>
            </Flex>
          </Box>

          <Box p="4">
            <Flex justifyContent="space-between" align="center">
              <Text fontWeight="bold" mb="4" fontSize="16px">
                {nft.title}
              </Text>
            </Flex>

            <Flex justify="space-between" align="center" mb="1">
              <Text fontSize="sm" color="text.secondary">
                Price
              </Text>
              <Flex align="center" gap="1">
                <Text fontWeight="medium" fontSize="md">
                  {nft.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <TonIcon boxSize="14px" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </motion.div>

      <MarketNFTModal isOpen={isOpen} setIsOpen={setIsOpen} nft={nft} />
    </>
  );
};
