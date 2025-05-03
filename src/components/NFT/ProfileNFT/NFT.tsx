"use client";

import { useCountdown } from "@/lib/hooks/useCountdown";
import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Flex, Image, Text, Badge } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { Sticker } from "../Sticker";
import { nft } from "@/generated/prisma";
import {
  AccountWithNftAndTransaction,
  NftWithTransactions,
} from "@/lib/selectors/account";

export interface ProfileNFTProps {
  payload: NftWithTransactions;
}

const getNftState = (
  payload: NftWithTransactions
): {
  isCollected: boolean;
  collectDate?: Date;
} => {
  const state: {
    isCollected: boolean;
    collectDate?: Date;
  } = {
    isCollected: false,
  };
  if (payload.transactions.length === payload.nft.iterations) {
    state.isCollected = true;
  }
  if (!payload.transactions.length) {
    state.collectDate = new Date(
      payload.createdAt.getTime() + 60 * 60 * 24 * 1000
    );
  } else {
    state.collectDate = new Date(
      payload.transactions[0].createdAt.getTime() + 60 * 60 * 24 * 1000
    );
  }

  if (state.collectDate.getTime() <= Date.now()) {
    state.collectDate = undefined;
  }

  return state;
};

export const ProfileNFT = ({ payload }: ProfileNFTProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      setIsOpen(true);
    },
  });

  const nftState = getNftState(payload);
  const countdown = nftState.collectDate
    ? useCountdown(nftState.collectDate)
    : null;

  return (
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
        <Box borderRadius="12px" overflow="hidden">
          <Sticker sku={payload.nft.sku} />
        </Box>

        <Box p="4">
          <Flex justifyContent="space-between" align="center">
            <Text fontWeight="bold" mb="4" fontSize="16px">
              {payload.nft.title}
            </Text>
          </Flex>

          <Flex justify="space-between" align="center" mb="1">
            <Text fontSize="sm" color="text.secondary">
              Price
            </Text>
            <Flex align="center" gap="1">
              <Text fontWeight="medium" fontSize="md">
                {payload.nft.price.toFixed(2)}
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
              +{payload.nft.roi.toFixed(2)}%
            </Text>
          </Flex>

          <Box mt="4">
            {countdown ? (
              <Box>
                <Flex
                  ml="3px"
                  color="text.secondary"
                  fontSize="12px"
                  gap="1"
                  opacity="0.7"
                >
                  collect
                  <Flex align="center" gap="1">
                    {(payload.nft.price * (payload.nft.roi / 100)).toFixed(2)}
                    <Box
                      boxSize="12px"
                      backgroundImage="url('/ton_symbol.svg')"
                      backgroundSize="contain"
                      backgroundRepeat="no-repeat"
                    />
                  </Flex>
                  in:
                </Flex>

                <Flex
                  mt="3px"
                  justifyContent="center"
                  py="1"
                  borderRadius="md"
                  bgColor="background.secondary"
                >
                  {countdown}
                </Flex>
              </Box>
            ) : (
              <Box>
                <Flex
                  ml="3px"
                  color="text.secondary"
                  fontSize="12px"
                  gap="1"
                  opacity="0.7"
                >
                  collect
                  <Flex align="center" gap="1">
                    {(payload.nft.price * (payload.nft.roi / 100)).toFixed(2)}
                    <Box
                      boxSize="12px"
                      backgroundImage="url('/ton_symbol.svg')"
                      backgroundSize="contain"
                      backgroundRepeat="no-repeat"
                    />
                  </Flex>
                </Flex>

                <Flex
                  mt="3px"
                  justify="space-between"
                  align="center"
                  bgColor="primary"
                  borderRadius="md"
                  py="1"
                  fontWeight="600"
                >
                  <Text w="full" textAlign="center" fontSize="12px">
                    COLLECT
                  </Text>
                </Flex>
              </Box>
            )}
            {nftState.isCollected ? <></> : null}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
