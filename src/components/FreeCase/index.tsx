"use client";

import { Box, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { motion, useAnimation, LegacyAnimationControls } from "motion/react";
import React, {
  memo,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Skeleton } from "../Skeleton";
import { Stickers as NftStickers } from "../NFT/Stickers";
import { RewardModal } from "./Modal";
import { CaseStickers } from "../Stickers";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { Button } from "../Button";
import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { AccountContext, FreeCaseI } from "../Context/AccountContext";
import { toaster } from "../ui/toaster";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useTranslations } from "next-intl";

const VirtualizedList = motion(List);
const MotionBox = motion(Box);

function padArray<T>(array: T[], length: number): T[] {
  if (length <= 0) return [];

  const result: T[] = [];

  for (let i = 0; i < length; i++) {
    result.push(array[i % array.length]);
  }

  return result;
}

function shuffleArray<T>(array: T[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

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

const SideShadow = ({ side, w }: { side: "left" | "right"; w: number }) => {
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
      w={`${w}px`}
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

const Sticker = NftStickers.ton;

const Item = React.memo(
  (props: {
    w: number;
    nft: {
      price: number;
    };
  }) => {
    const fill =
      props.nft.price < 1
        ? "text.secondary"
        : props.nft.price >= 10
        ? ColorPallette.star.color
        : "primary";
    return (
      <Box w={`${props.w}px`}>
        <Box borderRadius="lg" overflow="hidden" w="full" aspectRatio="1">
          <Sticker price={props.nft.price} fill={fill} />
        </Box>
      </Box>
    );
  }
);

const Wheel = React.memo(
  (props: {
    control: LegacyAnimationControls;
    containerWidth: number;
    isLoading?: boolean;
    items: CaseWithGifts["gifts"];
    ref: RefObject<HTMLDivElement | null>;
  }) => {
    const itemCount = props.items.length;

    const ITEM_WIDTH = props.containerWidth / 3;

    return (
      <Box
        ref={props.ref}
        overflow="hidden"
        position="relative"
        bgColor="background.secondary"
        h={`${ITEM_WIDTH + 30}px`}
        py="15px"
      >
        <SideShadow side="left" w={ITEM_WIDTH * 1.5} />
        <SideShadow side="right" w={ITEM_WIDTH * 1.5} />

        <TopTriangle />
        <BottomTriangle />

        {props.isLoading ? (
          <>
            <Skeleton
              w={`${ITEM_WIDTH}px`}
              aspectRatio="1"
              borderRadius="12px"
            />
            <Skeleton
              w={`${ITEM_WIDTH}px`}
              aspectRatio="1"
              borderRadius="12px"
            />
            <Skeleton
              w={`${ITEM_WIDTH}px`}
              aspectRatio="1"
              borderRadius="12px"
            />
          </>
        ) : (
          <MotionBox animate={props.control} w="full" h="full">
            <AutoSizer>
              {() => (
                <VirtualizedList
                  direction="horizontal"
                  height={ITEM_WIDTH}
                  width={itemCount * ITEM_WIDTH}
                  itemCount={itemCount}
                  itemSize={ITEM_WIDTH}
                >
                  {({ style, index }) => (
                    <div style={style}>
                      <Item nft={props.items[index]} w={ITEM_WIDTH} />
                    </div>
                  )}
                </VirtualizedList>
              )}
            </AutoSizer>
          </MotionBox>
        )}
      </Box>
    );
  }
);

export type RewardI = {
  id: string;
  title: string;
  sku: string;
  price: number;
};

export function FreeCase({
  payload,
  isLoading,
}: {
  payload: FreeCaseI;
  isLoading?: boolean;
}) {
  const t = useTranslations("gifts");

  const { fetchAccount, fetchCases } = useContext(AccountContext);

  const [reward, setReward] = useState<RewardI | null>(null);
  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);

  const disclosure = useDisclosure();
  const control = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const itemWidth = useMemo(() => containerWidth / 3, [containerWidth]);
  const ref = useRef<HTMLDivElement>(null);

  const { onStart, onEnd } = useHapticFeedback();

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
    () => shuffleArray(padArray(payload.rewards, 100)),
    [payload]
  );

  const onClick = useCallback(
    async (rewardId: string) => {
      if (!containerWidth) return;

      control.stop();
      control.set({ x: 0 });

      const targetIndex = repeatedItems.findLastIndex(
        (item) => item.id === rewardId
      );

      if (!targetIndex) return;

      const centerOffset = containerWidth / 2 - itemWidth / 2;
      const scrollOffset = targetIndex * itemWidth - centerOffset;

      console.log({
        containerWidth,
        targetIndex,
        itemWidth,
      });

      try {
        onStart();
        await control.start({
          x: -scrollOffset,
          transition: {
            duration: 10,
            ease: [0, 0, 0, 1],
          },
        });
        fetchAccount?.();
      } finally {
        onEnd();
      }
      disclosure.onOpen();
    },
    [
      fetchAccount,
      repeatedItems,
      containerWidth,
      itemWidth,
      control,
      disclosure,
    ]
  );

  const purchase = useCallback(async () => {
    if (!payload.keys) return;
    setPurchaseIsLoading(true);

    try {
      const res = await fetch(`/api/cases/free/open`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        fetchCases?.();
        const data = (await res.json()) as { reward?: RewardI };
        if (!data.reward) throw new Error("InvalidReward");
        setReward(data.reward);
        await onClick(data.reward.id);
      }
    } catch (e) {
      toaster.create({
        description: t("bad_request"),
        type: "error",
      });
    } finally {
      setPurchaseIsLoading(false);
    }
  }, [payload.keys, onClick, repeatedItems, containerWidth, control]);

  return (
    <Box>
      <Box mb="30px">
        <Wheel
          ref={ref}
          containerWidth={containerWidth}
          control={control}
          items={repeatedItems}
          isLoading={isLoading}
        />
      </Box>

      <Text
        color="text.secondary"
        fontSize="14px"
        lineHeight="1"
        alignItems="center"
        as="span"
      >
        <Text as="span" fontWeight="600" color="primary">
          {t("case_description_1")}
        </Text>{" "}
        {t("free_case_description_1")} <TextTag>Free</TextTag> {t("case")}.{" "}
        {t("free_case_description_2")}
      </Text>

      <Box mt="5">
        {isLoading ? (
          <Skeleton h="44px" borderRadius="lg" />
        ) : (
          <VStack gap="2">
            <Button
              h="44px"
              text={`${t("open_button")}${
                payload.keys ? ` (${payload.keys})` : ""
              }`}
              onClick={purchase}
              isLoading={purchaseIsLoading}
              isDisabled={!payload.keys}
            />
          </VStack>
        )}
      </Box>

      <RewardModal
        isOpen={disclosure.open}
        setIsOpen={disclosure.setOpen}
        reward={reward}
      />

      <Box mt="10">
        <Text ml="5px" color="text.secondary" fontSize="14px" mb="5px">
          {t("possible_rewards")}
        </Text>
        <CaseStickers withFill isLoading={isLoading} items={payload.rewards} />
      </Box>
    </Box>
  );
}
