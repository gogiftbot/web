"use client";

import { Box, Flex, HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { AnimationControls, motion, useAnimation } from "motion/react";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
import { TonIcon } from "../TonIcon";
import { OpenButton } from "./Buttons";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { nft } from "@/generated/prisma";
import { Skeleton } from "../Skeleton";
import { Stickers as NftStickers } from "../NFT/Stickers";
import { RewardModal } from "./Modal";
import { AccountWithGifts } from "@/app/api/account/selector";
import { CaseStickers } from "../Stickers";
import { CaseWithGifts } from "@/app/api/cases/selector";

const MotionHStack = motion(HStack);

const ITEM_WIDTH = 120;

const TopTriangle = () => (
  <Box
    position="absolute"
    top="0"
    left="50%"
    transform="translateX(-50%)"
    zIndex="2"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box h="2px" bg="text.secondary" w="100px" borderRadius="full" />
    <Icon color="text.secondary" mt="-4px" size="sm">
      <TbTriangleInvertedFilled />
    </Icon>
  </Box>
);

const BottomTriangle = () => (
  <Box
    position="absolute"
    bottom="0"
    left="50%"
    transform="translateX(-50%)"
    zIndex="2"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Icon color="text.secondary" mb="-5px" size="sm">
      <TbTriangleFilled />
    </Icon>
    <Box h="2px" bg="text.secondary" w="100px" borderRadius="full" />
  </Box>
);

const SideShadow = ({ side }: { side: "left" | "right" }) => {
  const props = {
    left: {
      left: "0",
      gradientFrom: "background.secondary",
      gradientTo: "transparent",
    },
    right: {
      right: "0",
      gradientFrom: "transparent",
      gradientTo: "background.secondary",
    },
  };

  return (
    <Box
      position="absolute"
      top="0"
      h="100%"
      w="120px"
      zIndex={5}
      pointerEvents="none"
      bgGradient="to-r"
      {...props[side]}
    />
  );
};

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

const Item = React.memo(
  (props: {
    nft: {
      sku: string;
    };
  }) => {
    // @ts-ignore
    const Sticker = NftStickers[props.nft.sku];
    return (
      <Box borderRadius="12px" overflow="hidden" h="120px" p="2">
        <Sticker />
      </Box>
    );
  }
);

const Wheel = React.memo(
  (props: {
    control: AnimationControls;
    isLoading?: boolean;
    items: CaseWithGifts["gifts"];
    ref: RefObject<HTMLDivElement | null>;
  }) => {
    return (
      <Box
        ref={props.ref}
        overflow="hidden"
        position="relative"
        bgColor="background.secondary"
      >
        <SideShadow side="left" />
        <SideShadow side="right" />

        <TopTriangle />
        <BottomTriangle />

        <MotionHStack gap="3" animate={props.control} py="5" h="full">
          {props.isLoading ? (
            <>
              <Skeleton w={`${ITEM_WIDTH}px`} h="120px" borderRadius="12px" />
              <Skeleton w={`${ITEM_WIDTH}px`} h="120px" borderRadius="12px" />
              <Skeleton w={`${ITEM_WIDTH}px`} h="120px" borderRadius="12px" />
            </>
          ) : (
            props.items.map((item, i) => (
              <Box
                key={i}
                w={`${ITEM_WIDTH}px`}
                textAlign="center"
                h="full"
                flexShrink={0}
              >
                <Item nft={item} />
              </Box>
            ))
          )}
        </MotionHStack>
      </Box>
    );
  }
);

export function Case({
  account,
  payload,
  isLoading,
}: {
  account?: AccountWithGifts | null;
  payload: CaseWithGifts;
  isLoading?: boolean;
}) {
  const [gift, setGift] = useState<nft | null>(null);
  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);

  const disclosure = useDisclosure();
  const control = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const isEnoughFunds = useMemo(
    () => payload.price > (account?.balance ?? 0),
    [payload.price, account?.balance]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const repeatedItems = useMemo<CaseWithGifts["gifts"]>(
    () => Array(5).fill(payload.gifts).flat(),
    [payload.gifts]
  );

  const onClick = useCallback(
    async (giftId: string) => {
      if (!containerWidth) return;

      control.stop();
      control.set({ x: 0 });

      const allIndexes = repeatedItems
        .map((item, i) => (item.id === giftId ? i : -1))
        .filter((index) => index !== -1);

      const targetIndex =
        allIndexes.length >= 2 ? allIndexes[allIndexes.length - 2] : undefined;

      if (!targetIndex) return;

      const centerOffset = containerWidth / 2 - ITEM_WIDTH / 2;
      const ITEM_MARGIN = 12;
      const scrollOffset =
        targetIndex * (ITEM_WIDTH + ITEM_MARGIN) - centerOffset;

      await control.start({
        x: -scrollOffset,
        transition: {
          duration: 5,
          ease: [0.15, 0.6, 0.75, 0.99],
        },
      });
      disclosure.onOpen();
    },
    [repeatedItems, containerWidth, control, disclosure]
  );

  const purchase = useCallback(async () => {
    setPurchaseIsLoading(true);
    try {
      const res = await fetch("/api/cases/open", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ caseId: payload.id }),
      });
      if (res.ok) {
        const data = await res.json();
        if (!data.gift) throw new Error("InvalidGift");
        setGift(data.gift);
        await onClick(data.gift.id);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setPurchaseIsLoading(false);
    }
  }, [payload.id, onClick, repeatedItems, containerWidth, control]);

  return (
    <Box>
      <Box mb="10">
        <Wheel
          ref={ref}
          control={control}
          items={repeatedItems}
          isLoading={isLoading}
        />
      </Box>

      <Text
        color="text.secondary"
        fontSize="14px"
        lineHeight="1.5"
        alignItems="center"
        as="span"
      >
        <Text as="span" fontWeight="600" color="primary">
          Feeling lucky?
        </Text>{" "}
        Spin the wheel for just{" "}
        {isLoading ? (
          <Box display="inline-flex" verticalAlign="middle">
            <Skeleton h="27px" w="70px" borderRadius="lg" />
          </Box>
        ) : (
          <TextTag>
            <Box as="span" display="inline-flex" alignItems="center" gap="1">
              {payload.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <TonIcon boxSize="14px" />
            </Box>
          </TextTag>
        )}{" "}
        and get a random sticker from the <TextTag>{payload.title}</TextTag>{" "}
        case. Each spin gives you a chance to drop a rare and valuable sticker —
        some are worth way more than the cost.
      </Text>

      <Box mt="5">
        {isLoading ? (
          <Skeleton h="48px" borderRadius="lg" />
        ) : (
          <OpenButton
            h="48px"
            onClick={purchase}
            isLoading={purchaseIsLoading}
            isDisabled={!isEnoughFunds}
          />
        )}
      </Box>

      <RewardModal
        isOpen={disclosure.open}
        setIsOpen={disclosure.setOpen}
        nft={gift}
      />

      <Box mt="10">
        <Text ml="5px" color="text.secondary" fontSize="14px" mb="5px">
          Possible stickers inside
        </Text>
        <CaseStickers isLoading={isLoading} items={payload.gifts} />
      </Box>
    </Box>
  );
}
