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

const MotionBox = motion(Box);

export const CaseStickers = React.memo(
  (props: { isLoading?: boolean; items?: CaseWithGifts["gifts"] }) => {
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
                <Sticker isDisabled={false} />
              </Box>

              <Flex justify="center">
                <Flex align="center" gap="1" fontSize="12px" fontWeight="600">
                  {nft.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
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
            No stickers yet?
          </Text>
          <Text color="text.secondary" fontSize="14px" mt="3">
            Time to unlock some new stickers! Check{" "}
            <Text
              as="span"
              color="primary"
              fontWeight="600"
              {...touch}
              opacity={isActive ? 0.7 : 1}
            >
              Gifts
            </Text>{" "}
            and claim the one you like.
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
