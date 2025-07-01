"use client";

import { Box, Text, Dialog, Portal, VStack } from "@chakra-ui/react";
import { TonIcon } from "@/components/TonIcon";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Stickers } from "../NFT/Stickers";
import React, { useCallback } from "react";
import { Button } from "../Button";
import { numberToString } from "@/lib/utils/number";
import { useTranslations } from "next-intl";
import { RewardI } from ".";

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
    reward: RewardI | null;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    if (!props.reward) return <></>;

    const t = useTranslations("gifts");

    // @ts-ignore
    const Sticker = Stickers[props.reward.sku];

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
                      <TextTag>{props.reward.title}</TextTag>{" "}
                      {t("reward_title_3")}{" "}
                      <TextTag>
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          gap="1"
                        >
                          {numberToString(props.reward.price)}
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
                        {t("reward_description_1")}
                      </Text>

                      <Box w="full" mt="1">
                        <Button
                          onClick={onKeep}
                          text={t("close_button")}
                          pallette="blue"
                        />
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
