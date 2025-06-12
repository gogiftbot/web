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
import { AnimationControls, motion, useAnimation } from "motion/react";
import React, {
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
import { account_gift, nft } from "@/generated/prisma";
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

function padArray<T>(array: T[], length: number): T[] {
  if (length <= 0) return [];

  const result: T[] = [];

  for (let i = 0; i < length; i++) {
    result.push(array[i % array.length]);
  }

  return result;
}

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
      price: number;
    };
  }) => {
    // @ts-ignore
    const Sticker = NftStickers[props.nft.sku];
    return (
      <Box borderRadius="12px" overflow="hidden" h="120px" p="2">
        <Sticker price={props.nft.price} />
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
  const router = useRouter();

  const { fetchAccount } = useContext(AccountContext);

  const [gift, setGift] = useState<{
    id: string;
    nft: { id: string; title: string; price: number; sku: string };
  } | null>(null);
  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);
  const [purchaseInStarsIsLoading, setPurchaseInStarsIsLoading] =
    useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const paymentLink = usePaymentLink();

  const disclosure = useDisclosure();
  const control = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { onStart, onEnd } = useHapticFeedback();

  const isEnoughFunds = useMemo(
    () => payload.price <= (account?.balance ?? 0),
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
    () => padArray(payload.gifts, 100),
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
        allIndexes.length >= 2
          ? allIndexes[allIndexes.length - 2]
          : allIndexes[allIndexes.length - 1];

      if (!targetIndex) return;

      const centerOffset = containerWidth / 2 - ITEM_WIDTH / 2;
      const ITEM_MARGIN = 12;
      const scrollOffset =
        targetIndex * (ITEM_WIDTH + ITEM_MARGIN) - centerOffset;

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
    [repeatedItems, containerWidth, control, disclosure]
  );

  const purchase = useCallback(async () => {
    if (!isEnoughFunds && !isDemo) {
      toaster.create({
        description: "Not enough funds",
        type: "error",
      });
      router.push("/profile");
      return;
    }

    setPurchaseIsLoading(true);

    try {
      const res = await fetch(`/api/cases/open`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ caseId: payload.id, isDemo }),
      });
      if (res.ok) {
        fetchAccount?.();
        const data = (await res.json()) as { gift?: AccountGiftWithNft };
        if (!data.gift) throw new Error("InvalidGift");
        setGift(data.gift);
        await onClick(data.gift.nft.id);
      }
    } catch (e) {
      toaster.create({
        description: "Something bad happened",
        type: "error",
      });
    } finally {
      setPurchaseIsLoading(false);
    }
  }, [
    fetchAccount,
    isEnoughFunds,
    payload.id,
    onClick,
    isDemo,
    repeatedItems,
    containerWidth,
    control,
  ]);

  const purchaseInStars = useCallback(async () => {
    setPurchaseInStarsIsLoading(true);

    try {
      if (isDemo) {
        const res = await fetch(`/api/cases/open`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ caseId: payload.id, isDemo }),
        });

        if (!res.ok) throw new Error("BadRequest");

        fetchAccount?.();
        const data = (await res.json()) as { gift?: AccountGiftWithNft };
        if (!data.gift) throw new Error("InvalidGift");
        setGift(data.gift);
        await onClick(data.gift.nft.id);

        return;
      }

      const { link, transactionId } = await paymentLink.create(payload.id);
      const status = await paymentLink.open(link);

      if (status === "paid") {
        const res = await fetch(`/api/payment/open`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ transactionId, caseId: payload.id }),
        });
        if (!res.ok) throw new Error("BadRequest");

        fetchAccount?.();
        const data = (await res.json()) as { gift?: AccountGiftWithNft };
        if (!data.gift) throw new Error("InvalidGift");
        setGift(data.gift);
        await onClick(data.gift.nft.id);
      }
    } catch (e) {
      toaster.create({
        description: (e as Error).message,
        type: "error",
      });
    } finally {
      setPurchaseInStarsIsLoading(false);
    }
  }, [
    paymentLink,
    payload.id,
    fetchAccount,
    onClick,
    isDemo,
    repeatedItems,
    containerWidth,
    control,
  ]);

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
              {numberToString(payload.price)}
              <TonIcon boxSize="14px" />
            </Box>
          </TextTag>
        )}{" "}
        and get a random gift from the <TextTag>{payload.title}</TextTag> case.
      </Text>

      <Box mt="5">
        {isLoading ? (
          <Skeleton h="44px" borderRadius="lg" />
        ) : (
          <VStack gap="2">
            <Button
              h="44px"
              text="Open"
              onClick={purchase}
              isLoading={purchaseIsLoading}
              isDisabled={purchaseInStarsIsLoading}
            />

            <Button
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
            </Button>

            <HStack justifyContent="space-between" w="full">
              <Text color="text.secondary" fontSize="15px">
                or open in{" "}
                <Text color="#ffc233" as="span">
                  stars
                </Text>
              </Text>

              <DemoSwitch
                isDemo={isDemo}
                onChange={setIsDemo}
                isDisabled={purchaseIsLoading || purchaseInStarsIsLoading}
              />
            </HStack>
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
          Possible gifts inside
        </Text>
        <CaseStickers isLoading={isLoading} items={payload.gifts} />
      </Box>
    </Box>
  );
}
