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
import { ProfileNFTModal } from "./Modal";
import { TonIcon } from "@/components/TonIcon";
import { Skeleton } from "@/components/Skeleton";

export interface ProfileNFTProps {
  payload: NftWithTransactions;
}

export const getNftState = (
  payload: NftWithTransactions
): {
  isCollected: boolean;
  collectDate?: Date;
  countdown?: React.ReactNode;
} => {
  const state: {
    isCollected: boolean;
    collectDate?: Date;
    countdown?: React.ReactNode;
  } = {
    isCollected: false,
  };

  if (!payload.transactions.length) {
    state.collectDate = new Date(
      new Date(payload.createdAt).getTime() + 60 * 60 * 24 * 1000
    );
  } else {
    state.collectDate = new Date(
      new Date(payload.transactions[0].createdAt).getTime() +
        60 * 60 * 24 * 1000
    );
  }

  if (state.collectDate.getTime() <= Date.now()) {
    state.collectDate = undefined;
  } else {
    state.countdown = useCountdown(state.collectDate);
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
                  {payload.nft.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <TonIcon boxSize="14px" />
              </Flex>
            </Flex>

            <Box mt="4">
              {nftState.countdown ? (
                <Box>
                  <Flex
                    ml="3px"
                    color="text.secondary"
                    fontSize="12px"
                    gap="1"
                    opacity="0.7"
                  >
                    collect in:
                  </Flex>

                  <Flex
                    mt="3px"
                    justifyContent="center"
                    py="1"
                    borderRadius="md"
                    bgColor="background.secondary"
                    color="text.secondary"
                  >
                    {nftState.countdown}
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

      <ProfileNFTModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        payload={payload}
      />
    </>
  );
};
