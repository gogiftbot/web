"use client";

import { Box, Text, Dialog, Portal, VStack, HStack } from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { nft } from "@/generated/prisma";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback } from "react";
import { Button } from "../Button";
import { AccountWithGifts } from "@/app/api/account/selector";

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

export const AccountStickerModal = React.memo(
  (props: {
    gift: AccountWithGifts["gifts"][number];
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.gift) return <></>;

    const Sticker = Stickers[props.gift.nft.sku];

    const onSell = useCallback(async () => {
      props.setIsOpen(false);
    }, []);

    return (
      <Dialog.Root
        scrollBehavior="inside"
        placement="bottom"
        lazyMount
        open={props.isOpen}
        onOpenChange={(e) => props.setIsOpen(e.open)}
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
                      <Text as="span" color="primary">
                        Wow!
                      </Text>{" "}
                      <Text as="span">
                        This is your <TextTag>{props.gift.nft.title}</TextTag>
                      </Text>
                      <br />
                      You originally pulled it from the{" "}
                      <TextTag>{props.gift.case.title}</TextTag> case. It's
                      currently valued at{" "}
                      <TextTag>
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          gap="1"
                        >
                          {props.gift.nft.price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          <TonIcon boxSize="14px" />
                        </Box>
                      </TextTag>
                      <br />
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
                        <Button
                          onClick={() => {}}
                          text="Withdraw"
                          pallette="blue"
                        />
                        <Button
                          onClick={() => {}}
                          text="Sell"
                          pallette="green"
                        />
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
