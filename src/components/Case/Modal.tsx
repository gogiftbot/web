"use client";

import { Box, Text, Dialog, Portal, VStack, HStack } from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { nft } from "@/generated/prisma";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import { KeepButton, SellButton } from "./Buttons";
import React, { useCallback } from "react";

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
        scrollBehavior="inside"
        placement="center"
        lazyMount
        open={props.isOpen}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              bgColor="background.secondary"
              borderRadius="21px"
              mx="6"
            >
              <Dialog.Body px="5" py="5">
                <VStack>
                  <VStack justify="center" w="full">
                    <Box
                      shadow="lg"
                      borderRadius="12px"
                      overflow="hidden"
                      h="full"
                      w="full"
                    >
                      <Sticker loop autoplay />
                    </Box>
                  </VStack>

                  <VStack mt="5" w="full" align="start" gap="3">
                    <Text
                      fontSize="14px"
                      lineHeight="1.5"
                      color="text.secondary"
                      as="span"
                    >
                      <Text color="primary" as="span" fontWeight="600">
                        Wow!
                      </Text>
                      <br />
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
                      <br />
                      Want to sell or keep it for later?
                    </Text>

                    <HStack gap="3" w="full" mt="5">
                      <KeepButton onClick={onSell} />
                      <SellButton onClick={onSell} price={props.nft.price} />
                    </HStack>
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
