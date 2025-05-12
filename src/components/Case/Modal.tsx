"use client";

import { Box, Text, Dialog, Portal, VStack, HStack } from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback, useContext, useState } from "react";
import { Button } from "../Button";
import { AccountGiftWithNft } from "@/app/api/cases/open/selector";
import { AccountContext } from "../Context/AccountContext";

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
    gift: AccountGiftWithNft | null;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.gift) return <></>;

    const { fetchAccount } = useContext(AccountContext);
    const [sellIsLoading, setSellIsLoading] = useState(false);

    // @ts-ignore
    const Sticker = Stickers[props.gift.nft.sku];

    const onSell = useCallback(async () => {
      setSellIsLoading(true);
      try {
        const res = await fetch("/api/gift/sell", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ accountGiftId: props.gift?.id }),
        });
        if (!res.ok) throw new Error("BadRequest");
        await fetchAccount?.();

        props.setIsOpen(false);
      } catch (e) {
        console.log(e);
      } finally {
        setSellIsLoading(false);
      }
    }, [props.gift?.id, fetchAccount]);

    const onKeep = useCallback(async () => {
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
                      You pulled <TextTag>{props.gift.nft.title}</TextTag>{" "}
                      valued at{" "}
                      <TextTag>
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          gap="1"
                        >
                          {props.gift.price.toLocaleString("en-US", {
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
                        <Button onClick={onKeep} text="Keep" pallette="blue" />
                        <Button
                          isLoading={sellIsLoading}
                          onClick={onSell}
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
