"use client";

import {
  Box,
  Text,
  Dialog,
  Portal,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { nft } from "@/generated/prisma";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback } from "react";
import { Button } from "../Button";
import { useTouch } from "@/lib/hooks/useTouch";
import { motion } from "motion/react";

const TextTag = (props: { children: React.ReactNode }) => (
  <Box
    px="9px"
    py="3px"
    bgColor={ColorPallette.blue.bg}
    as="span"
    display="inline-flex"
    alignItems="center"
    borderRadius="lg"
  >
    <Text as="span" color={ColorPallette.blue.color} fontWeight="600">
      {props.children}
    </Text>
  </Box>
);

export const RewardModal = React.memo(
  (props: {
    nft: nft | null;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.nft) return <></>;

    const Sticker = Stickers[props.nft.sku];

    const onSell = useCallback(async () => {
      props.setIsOpen(false);
    }, []);

    return (
      <Dialog.Root
        scrollBehavior="outside"
        lazyMount
        placement="bottom"
        open={props.isOpen}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              bgColor="background.secondary"
              borderTopRadius="21px"
              pb="10"
            >
              <Dialog.Body px="5" py="5">
                <VStack>
                  <Box
                    shadow="lg"
                    borderRadius="12px"
                    overflow="hidden"
                    h="full"
                    w="full"
                  >
                    <Sticker loop autoplay />
                  </Box>

                  <VStack mt="5" w="full" align="start" gap="3">
                    <Text
                      fontSize="14px"
                      lineHeight="1.5"
                      color="text.secondary"
                      as="span"
                    >
                      <Text color="primary" as="span" fontWeight="600">
                        Wow!
                      </Text>{" "}
                      You pulled <TextTag>{props.nft.title}</TextTag> valued at{" "}
                      <TextTag>
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          gap="1"
                        >
                          {props.nft.price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          <TonIcon boxSize="14px" />
                        </Box>
                      </TextTag>
                    </Text>

                    <Box mt="5" w="full">
                      <Text
                        fontSize="14px"
                        lineHeight="1.5"
                        color="text.secondary"
                      >
                        Would you like to sell it or withdraw it to your wallet?
                      </Text>
                      <HStack gap="3" w="full" mt="1">
                        <Button onClick={onSell} text="Keep" pallette="blue" />
                        <Button onClick={onSell} text="Sell" pallette="green" />
                      </HStack>
                    </Box>
                  </VStack>
                </VStack>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  }
);
