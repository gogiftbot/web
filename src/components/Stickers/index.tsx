"use client";

import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Skeleton } from "../Skeleton";
import { Stickers as NftStickers } from "../NFT/Stickers";
import { TonIcon } from "../TonIcon";
import { AccountWithGifts } from "@/app/api/account/selector";
import { AccountStickerModal } from "./Modal";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { useRouter } from "next/navigation";
import { numberToString } from "@/lib/utils/number";
import { useTranslations } from "next-intl";
import { ColorPallette } from "@/lib/styles/ColorPallette";

const MotionBox = motion(Box);

export const CaseStickers = React.memo(
  (props: {
    withFill?: boolean;
    isLoading?: boolean;
    items?: CaseWithGifts["gifts"];
  }) => {
    if (props.isLoading) {
      return (
        <Flex gap="3" justifyContent="center" wrap="wrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} h="110px" w="85px" borderRadius="12px" />
          ))}
        </Flex>
      );
    }
    return (
      <Flex gap="3" justifyContent="center" wrap="wrap">
        {props.items?.map((nft) => {
          // @ts-ignore
          const Sticker = NftStickers[nft.sku];
          const fill =
            nft.price < 1
              ? "text.secondary"
              : nft.price >= 10
              ? ColorPallette.star.color
              : "primary";
          return (
            <Box
              key={nft.id}
              bgColor="background.primary"
              borderRadius="12px"
              shadow="lg"
              pb="1"
            >
              <Box
                borderRadius="12px"
                overflow="hidden"
                h="85px"
                w="85px"
                p="2"
              >
                <Sticker
                  fill={props.withFill ? fill : "primary"}
                  isDisabled={false}
                />
              </Box>

              <Flex justify="center">
                <Flex align="center" gap="1" fontSize="12px" fontWeight="600">
                  {numberToString(nft.price)}
                  <TonIcon boxSize="12px" />
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    );
  }
);

const AccountSticker = React.memo(
  (props: { gift: AccountWithGifts["gifts"][number] }) => {
    const disclosure = useDisclosure();
    // @ts-ignore
    const Sticker = NftStickers[props.gift.nft.sku];

    const { isActive, ...touch } = useTouch({
      handleClick: () => {
        disclosure.onOpen();
      },
    });

    return (
      <>
        <MotionBox
          initial={{
            scale: 1,
          }}
          animate={{
            scale: isActive ? 0.95 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          {...touch}
          bgColor="background.primary"
          borderRadius="12px"
          shadow="lg"
          width="calc(33.33% - 6px)"
          userSelect="none"
        >
          <Box borderRadius="12px" overflow="hidden" width="100%" p="2">
            <Sticker h="110px" />
          </Box>
        </MotionBox>

        <AccountStickerModal
          isOpen={disclosure.open}
          setIsOpen={disclosure.setOpen}
          gift={props.gift}
        />
      </>
    );
  }
);

export const AccountStickers = React.memo(
  (props: { items?: AccountWithGifts["gifts"] }) => {
    const t = useTranslations("profile");

    const router = useRouter();

    const { isActive, ...touch } = useTouch({
      handleClick: () => {
        router.push("/gifts");
      },
    });

    if (!props.items?.length) {
      return (
        <Box>
          <Text fontWeight="600" fontSize="17px">
            {t("gift_description_1")}
          </Text>
          <Text color="text.secondary" fontSize="14px" mt="3">
            {t("gift_description_2")}{" "}
            <Text
              as="span"
              color="primary"
              fontWeight="600"
              {...touch}
              opacity={isActive ? 0.7 : 1}
            >
              {t("gift_description_3")}
            </Text>{" "}
            {t("gift_description_4")}
          </Text>
        </Box>
      );
    }

    return (
      <Flex gap="9px" justifyContent="flex-start" wrap="wrap">
        {props.items?.map((item) => (
          <AccountSticker key={item.id} gift={item} />
        ))}
      </Flex>
    );
  }
);
