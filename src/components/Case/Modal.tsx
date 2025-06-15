"use client";

import { Box, Text, Dialog, Portal, VStack, HStack } from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { Button } from "../Button";
import { AccountContext } from "../Context/AccountContext";
import { toaster } from "../ui/toaster";
import { numberToString } from "@/lib/utils/number";
import { CaseService } from "@/lib/services/case.service";
import { useTranslations } from "next-intl";

const TextTag = (props: { children: React.ReactNode }) => (
  <Box
    px="9px"
    py="5px"
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
    gift: {
      id: string;
      nft: { id: string; title: string; price: number; sku: string };
    } | null;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.gift) return <></>;

    const t = useTranslations("gifts");

    const { fetchAccount } = useContext(AccountContext);
    const [sellIsLoading, setSellIsLoading] = useState(false);

    const isTonReward = useMemo(
      () => props.gift?.nft.sku === CaseService.TON_GIFT,
      [props.gift.nft.sku]
    );

    // @ts-ignore
    const Sticker = Stickers[props.gift.nft.sku];

    const onSell = useCallback(async () => {
      if (props.gift?.id === "demo") {
        props.setIsOpen(false);
        return;
      }

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
        toaster.create({
          description: t("success"),
          type: "success",
        });
      } catch (e) {
        toaster.create({
          description: t("bad_request"),
          type: "error",
        });
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
              pb="6"
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
                    <Text fontSize="14px" color="text.secondary" as="span">
                      <Text color="primary" as="span" fontWeight="600">
                        {t("reward_title_1")}!
                      </Text>{" "}
                      {t("reward_title_2")}{" "}
                      <TextTag>{props.gift.nft.title}</TextTag>{" "}
                      {t("reward_title_3")}{" "}
                      <TextTag>
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          gap="1"
                        >
                          {numberToString(props.gift.nft.price)}
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
                        {isTonReward
                          ? t("reward_description_1")
                          : t("reward_description_2")}
                      </Text>

                      <Box w="full" mt="1">
                        {!isTonReward ? (
                          <HStack gap="3">
                            <Button
                              onClick={onKeep}
                              text={t("keep_button")}
                              pallette="blue"
                            />
                            <Button
                              isLoading={sellIsLoading}
                              onClick={onSell}
                              text={t("sell_button")}
                              pallette="green"
                            />
                          </HStack>
                        ) : (
                          <Button
                            onClick={onKeep}
                            text={t("close_button")}
                            pallette="blue"
                          />
                        )}
                      </Box>
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
