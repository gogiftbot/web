"use client";

import {
  Box,
  Flex,
  HStack,
  Icon,
  Separator,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
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
import { TonIcon } from "../TonIcon";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Skeleton } from "../Skeleton";
import { Stickers as NftStickers } from "../NFT/Stickers";
import { RewardModal } from "./Modal";
import { AccountWithGifts } from "@/app/api/account/selector";
import { CaseStickers } from "../Stickers";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { Button } from "../Button";
import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { AccountGiftWithNft } from "@/app/api/cases/open/selector";
import { useRouter } from "next/navigation";
import { AccountContext } from "../Context/AccountContext";
import { toaster } from "../ui/toaster";
import { numberToString } from "@/lib/utils/number";
import { MajorIcon } from "../MajorIcon";
import { DemoSwitch } from "./DemoSwitch";
import { usePaymentLink } from "@/lib/hooks/usePaymentLink";
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

const StarTag = (props: { children: React.ReactNode }) => (
  <Box
    px="9px"
    py="3px"
    bgColor={ColorPallette.blue.bg}
    as="span"
    display="inline-flex"
    alignItems="center"
    borderRadius="lg"
  >
    <Text as="span" color="#ffc233" fontWeight="600">
      {props.children}
    </Text>
  </Box>
);

const Item = React.memo(
  (props: {
    w: number;
    nft: {
      sku: string;
      price: number;
    };
  }) => {
    // @ts-ignore
    const Sticker = NftStickers[props.nft.sku];
    return (
      <Box p="10px" w={`${props.w}px`}>
        <Box borderRadius="lg" overflow="hidden" w="full" aspectRatio="1">
          <Sticker price={props.nft.price} />
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

export function FreeCase({
  account,
  payload,
  isLoading,
}: {
  account?: AccountWithGifts | null;
  payload: CaseWithGifts["gifts"];
  isLoading?: boolean;
}) {
  const t = useTranslations("gifts");
  const router = useRouter();

  const { fetchAccount } = useContext(AccountContext);

  const [gift, setGift] = useState<{
    id: string;
    nft: { id: string; title: string; price: number; sku: string };
  } | null>(null);
  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  const disclosure = useDisclosure();
  const control = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const itemWidth = useMemo(() => containerWidth / 3, [containerWidth]);
  const ref = useRef<HTMLDivElement>(null);

  const { onStart, onEnd } = useHapticFeedback();

  // const isEnoughFunds = useMemo(
  //   () => payload.price <= (account?.balance ?? 0),
  //   [payload.price, account?.balance]
  // );

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

  const repeatedItems = useMemo(() => payload, [payload]);
  // useMemo<CaseWithGifts["gifts"]>(
  //   () => shuffleArray(padArray(payload, 100)),
  //   [payload]
  // );

  const onClick = useCallback(
    async (giftId: string) => {
      if (!containerWidth) return;

      control.stop();
      control.set({ x: 0 });

      const targetIndex = repeatedItems.findLastIndex(
        (item) => item.id === giftId
      );

      if (!targetIndex) return;

      const centerOffset = containerWidth / 2 - itemWidth / 2;
      const scrollOffset = targetIndex * itemWidth - centerOffset;

      try {
        onStart();
        await control.start({
          x: -scrollOffset,
          transition: {
            duration: 10,
            ease: [0, 0, 0, 1],
          },
        });
      } finally {
        onEnd();
      }
      disclosure.onOpen();
    },
    [repeatedItems, containerWidth, itemWidth, control, disclosure]
  );

  const purchase = useCallback(async () => {
    // if (!isEnoughFunds && !isDemo) {
    //   toaster.create({
    //     description: t("not_enough_funds"),
    //     type: "error",
    //   });
    //   router.push("/profile");
    //   return;
    // }

    setPurchaseIsLoading(true);

    try {
      // const res = await fetch(`/api/cases/open`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({ caseId: payload.id, isDemo }),
      // });
      // if (res.ok) {
      //   fetchAccount?.();
      //   const data = (await res.json()) as { gift?: AccountGiftWithNft };
      //   if (!data.gift) throw new Error("InvalidGift");
      //   setGift(data.gift);
      //   await onClick(data.gift.nft.id);
      // }
    } catch (e) {
      toaster.create({
        description: t("bad_request"),
        type: "error",
      });
    } finally {
      setPurchaseIsLoading(false);
    }
  }, [
    fetchAccount,
    // isEnoughFunds,
    // payload.id,
    onClick,
    isDemo,
    repeatedItems,
    containerWidth,
    control,
  ]);

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
              text={t("open_button")}
              onClick={purchase}
              isLoading={purchaseIsLoading}
              isDisabled
            />

            {/* <Button
              h="44px"
              onClick={purchaseInStars}
              isLoading={purchaseInStarsIsLoading}
              isDisabled={purchaseIsLoading}
              iconColor="#ffc233"
            >
              <Flex align="center" gap="2">
                <Text
                  color="#ffc233"
                  fontSize="md"
                  fontWeight="600"
                  lineHeight="1.1"
                >
                  {payload.starPrice}
                </Text>
                <MajorIcon boxSize="15px" mb="1px" />
              </Flex>
            </Button> */}

            {/* <HStack justifyContent="space-between" w="full">
              <Text color="text.secondary" fontSize="15px">
                {t("or_open")}{" "}
                <Text color="#ffc233" as="span">
                  {t("stars")}
                </Text>
              </Text>

              <DemoSwitch
                isDemo={isDemo}
                onChange={setIsDemo}
                isDisabled={purchaseIsLoading}
              />
            </HStack> */}
          </VStack>
        )}
      </Box>

      <RewardModal
        isOpen={disclosure.open}
        setIsOpen={disclosure.setOpen}
        gift={gift}
      />

      <Box mt="10">
        <Text ml="5px" color="text.secondary" fontSize="14px" mb="5px">
          {t("possible_rewards")}
        </Text>
        <CaseStickers isLoading={isLoading} items={payload} />
      </Box>
    </Box>
  );
}
