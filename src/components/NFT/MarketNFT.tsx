"use client";

import { Box, Flex, Image, Text, Badge } from "@chakra-ui/react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import NFT_2798 from "../../../public/NFT/#2798.json";

export interface MarketNFTProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "legendary";
  roi: number;
  sku: string;
  isAvailable?: boolean;
  isSoldOut?: boolean;
  isNew?: boolean;
  isHot?: boolean;
  onClick?: () => void;
}

const rarityColors = {
  common: "gray.400",
  uncommon: "green.400",
  rare: "purple.400",
  legendary: "orange.400",
};

export const MarketNFT = ({
  name,
  image,
  price,
  rarity,
  roi,
  sku,
  isSoldOut,
  isNew,
  isHot,
  onClick,
}: MarketNFTProps) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Box
        bg={"background.primary"}
        borderRadius="16px"
        overflow="hidden"
        shadow="lg"
        transition="all 0.2s"
        onClick={onClick}
        cursor="pointer"
      >
        <Box position="relative">
          <Lottie animationData={NFT_2798} loop={true} />
          {/* <Image
            borderRadius="16px"
            src={image}
            alt={name}
            width="100%"
            height="auto"
            objectFit="cover"
          /> */}
          <Flex position="absolute" top="2" left="2" gap="1">
            <Badge
              bgColor="background.primary"
              py="1"
              px="2"
              borderRadius="full"
            >
              <Text fontSize="12px" color="white">
                {sku}
              </Text>
            </Badge>
            {isNew ? (
              <Badge
                colorPalette="green"
                py="1"
                px="2"
                borderRadius="full"
                fontSize="12px"
              >
                NEW
              </Badge>
            ) : null}
            {isHot ? (
              <Badge
                colorPalette="yellow"
                py="1"
                px="2"
                borderRadius="full"
                fontSize="12px"
              >
                HOT
              </Badge>
            ) : null}
          </Flex>
        </Box>

        <Box p="4">
          <Flex justifyContent="space-between" align="center">
            <Text fontWeight="bold" mb="4" fontSize="16px">
              {name}
            </Text>
          </Flex>

          <Flex justify="space-between" align="center" mb="1">
            <Text fontSize="sm" color="text.secondary">
              Price
            </Text>
            <Flex align="center" gap="1">
              <Text fontWeight="medium" fontSize="md">
                {price.toFixed(2)}
              </Text>
              <Box
                boxSize="14px"
                backgroundImage="url('/ton_symbol.svg')"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
              />
            </Flex>
          </Flex>

          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="text.secondary">
              APY
            </Text>
            <Text color="green.400" fontWeight="medium">
              +{roi.toFixed(2)}%
            </Text>
          </Flex>

          {isSoldOut ? (
            <Flex
              justify="space-between"
              align="center"
              bgColor="red.500"
              borderRadius="lg"
              py="2"
              mt="4"
              fontWeight="600"
            >
              <Text w="full" textAlign="center" fontSize="14px">
                SOLD OUT
              </Text>
            </Flex>
          ) : (
            <Flex
              justify="space-between"
              align="center"
              bgColor="primary"
              borderRadius="lg"
              py="2"
              mt="4"
              fontWeight="600"
            >
              <Text w="full" textAlign="center" fontSize="14px">
                BUY
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};
