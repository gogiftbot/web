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
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback, useContext, useState } from "react";
import { Button } from "../Button";
import { AccountWithGifts } from "@/app/api/account/selector";
import { useTouch } from "@/lib/hooks/useTouch";
import { AiOutlineCloseCircle } from "react-icons/ai";
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

export const AccountStickerModal = React.memo(
  (props: {
    gift: AccountWithGifts["gifts"][number];
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.gift) return <></>;

    const { fetchAccount } = useContext(AccountContext);
    const [sellIsLoading, setSellIsLoading] = useState(false);
    const [withdrawIsLoading, setWithdrawIsLoading] = useState(false);

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
          body: JSON.stringify({ accountGiftId: props.gift.id }),
        });
        if (!res.ok) throw new Error("BadRequest");
        await fetchAccount?.();
        props.setIsOpen(false);
      } catch (e) {
        console.log(e);
      } finally {
        setSellIsLoading(false);
      }
    }, [props.gift.id, fetchAccount]);

    const onWithdraw = useCallback(async () => {
      setWithdrawIsLoading(true);
      try {
        const res = await fetch("/api/gift/withdraw", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ accountGiftId: props.gift.id }),
        });
        if (!res.ok) throw new Error("BadRequest");
        await fetchAccount?.();
        props.setIsOpen(false);
      } catch (e) {
        console.log(e);
      } finally {
        setWithdrawIsLoading(false);
      }
    }, [fetchAccount]);

    const { isActive, ...touch } = useTouch({
      handleClick: () => {
        props.setIsOpen(false);
      },
    });

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
              pb="6"
            >
              <Dialog.Body px="5" py="5" position="relative">
                <Box
                  {...touch}
                  position="absolute"
                  right="5"
                  top="5"
                  zIndex="2"
                  opacity={isActive ? 0.7 : 1}
                >
                  <Icon boxSize="30px" color="text.secondary">
                    <AiOutlineCloseCircle />
                  </Icon>
                </Box>

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
                      <Text as="span" color="primary" fontWeight="600">
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
                          onClick={onWithdraw}
                          isLoading={withdrawIsLoading}
                          text="Withdraw"
                          pallette="blue"
                        />
                        <Button
                          onClick={onSell}
                          isLoading={sellIsLoading}
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
