"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AnimationControls, motion, useAnimation } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
// import { Sticker } from "../NFT/Sticker";
import { useTouch } from "@/lib/hooks/useTouch";
import { TonIcon } from "../TonIcon";
import { KeepButton, OpenButton, SellButton } from "./Buttons";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { gift_case, nft } from "@/generated/prisma";
import { CaseWithGifts } from "@/lib/selectors/account";
import { Skeleton, SkeletonText } from "../Skeleton";
import { Stickers as NftStickers } from "../NFT/Stickers";

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

const Item = (props: {
  nft: {
    sku: string;
  };
}) => {
  const Sticker = NftStickers[props.nft.sku];
  return (
    <Box position="relative">
      <Box borderRadius="12px" overflow="hidden" position="relative">
        <Sticker h="120px" />
      </Box>
    </Box>
  );
};

const RewardComponent = (props: {
  nft: nft;
  onSell: () => Promise<void>;
  onKeep: () => Promise<void>;
}) => {
  const Sticker = NftStickers[props.nft.sku];
  return (
    <Box>
      <VStack justify="center" w="full">
        <Box
          shadow="lg"
          borderRadius="12px"
          overflow="hidden"
          h="full"
          w="full"
        >
          <Sticker loop autoplay />
        </Box>
      </VStack>

      <VStack mt="3" w="full" align="start" gap="3">
        <Text fontSize="14px" color="text.secondary" as="span">
          <Text color="primary" as="span" fontWeight="600">
            Wow!
          </Text>{" "}
          You pulled <TextTag>{props.nft.title}</TextTag> valued at{" "}
          <TextTag>
            <Box as="span" display="inline-flex" alignItems="center" gap="1">
              {props.nft.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <TonIcon boxSize="14px" />
            </Box>
          </TextTag>
          <br />
          Want to sell it or keep it for later?
        </Text>

        <HStack gap="3" w="full">
          <KeepButton onClick={props.onKeep} />
          <SellButton onClick={props.onSell} price={props.nft.price} />
        </HStack>
      </VStack>
    </Box>
  );
};

const Wheel = (props: {
  ref: React.RefObject<HTMLDivElement | null>;
  control: AnimationControls;
  isLoading?: boolean;
  items: CaseWithGifts["gifts"];
}) => {
  return (
    <Box
      ref={props.ref}
      overflow="hidden"
      w="100%"
      position="relative"
      bg="gray.900"
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
};

const Stickers = (props: {
  isLoading?: boolean;
  items: CaseWithGifts["gifts"];
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
      {props.items.map((nft, index) => {
        const Sticker = NftStickers[nft.sku];
        return (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Box bgColor="background.primary" borderRadius="12px" shadow="lg">
              <Box borderRadius="12px" overflow="hidden" h="85px" w="85px">
                <Sticker isDisabled={false} />
              </Box>

              <Flex justify="center" py="1">
                <Flex align="center" gap="1" fontSize="12px" fontWeight="600">
                  {nft.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  <TonIcon boxSize="12px" />
                </Flex>
              </Flex>
            </Box>
          </motion.div>
        );
      })}
    </Flex>
  );
};

export function Case({
  payload,
  isLoading,
  updateAccount,
}: {
  payload: CaseWithGifts;
  isLoading?: boolean;
  updateAccount: () => Promise<void>;
}) {
  const BOX_PRICE = 10;

  const [gift, setGift] = useState<nft | null>(null);
  const [purchaseIsLoading, setPurchaseIsLoading] = useState(false);

  const disclosure = useDisclosure();
  const control = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const repeatedItems = useMemo<CaseWithGifts["gifts"]>(
    () => Array(20).fill(payload.gifts).flat(),
    [payload.gifts]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () =>
      setContainerWidth(containerRef.current!.offsetWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onSell = useCallback(async () => {
    if (!gift) return;
    setGift(null);
    disclosure.setOpen(false);
  }, [gift]);

  const onClick = useCallback(async () => {
    if (!containerWidth || !gift?.id) return;

    const targetIndex = repeatedItems.findIndex(
      (item, i) => item.id === gift.id && i > 30
    );
    const centerOffset = containerWidth / 2 - ITEM_WIDTH / 2;
    const ITEM_MARGIN = 12;
    const scrollOffset =
      targetIndex * (ITEM_WIDTH + ITEM_MARGIN) - centerOffset;
    control.set({ x: 0 });
    await control.start({
      x: -scrollOffset,
      transition: {
        duration: 5,
        ease: [0.15, 0.6, 0.75, 0.99],
      },
    });
  }, [repeatedItems, containerWidth, gift, control]);

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
        // await updateAccount();
        // disclosure.setOpen(true);
        await onClick();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setPurchaseIsLoading(false);
    }
  }, [payload.id, onClick, updateAccount, payload.gifts]);

  return (
    <Box>
      {disclosure.open && gift ? (
        <RewardComponent nft={gift} onKeep={onSell} onSell={onSell} />
      ) : (
        <Box>
          <Box mb="10">
            <Wheel
              ref={containerRef}
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
                <Box
                  as="span"
                  display="inline-flex"
                  alignItems="center"
                  gap="1"
                >
                  {BOX_PRICE.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  <TonIcon boxSize="14px" />
                </Box>
              </TextTag>
            )}{" "}
            and get a random sticker from the list. Each spin gives you a chance
            to drop a rare and valuable sticker — some are worth way more than
            the cost.
          </Text>

          <Box mt="5">
            {isLoading ? (
              <Skeleton h="48px" borderRadius="lg" />
            ) : (
              <OpenButton onClick={purchase} isLoading={purchaseIsLoading} />
            )}
          </Box>
        </Box>
      )}

      {/* {items?.[1]?.id && <RewardComponent nft={items[1]} />}
      <Box my="10" /> */}
      <Box mt="10">
        <Text ml="5px" color="text.secondary" fontSize="14px" mb="5px">
          Possible stickers inside
        </Text>
        <Stickers isLoading={isLoading} items={payload.gifts} />
      </Box>
    </Box>
  );
}
