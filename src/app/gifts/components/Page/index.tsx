"use client";

import { Box, Heading, Flex, Text, HStack, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "motion/react";

import { useTouch } from "@/lib/hooks/useTouch";
import { Dashboard } from "../Dashboard";
import { Skeleton } from "@/components/Skeleton";
import { Case } from "@/components/Case";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { Button } from "@/components/Button";
import { Stickers } from "@/components/NFT/Stickers";
import { PageWrapper } from "@/components/PageWrapper";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { GiftsHistory } from "@/app/api/gift/selector";
import { getRandomNumber } from "@/lib/utils/math";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

type PageProps = {
  cases: CaseWithGifts[];
  account?: AccountWithGifts | null;
  isLoading?: boolean;
};

const CaseWrapper = (props: { case: CaseWithGifts; onClick: () => void }) => {
  const { isActive, ...touch } = useTouch({
    handleClick: props.onClick,
  });

  // @ts-ignore
  const Sticker = Stickers.cases[props.case.sku];

  return (
    <MotionBox
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isActive ? 0.98 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      {...touch}
      bgColor={`background.primary/${isActive ? 70 : 100}`}
      borderRadius="12px"
      shadow="lg"
      width="calc(50% - 6px)"
      aspectRatio="1"
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Flex top="3" position="absolute" w="full" justify="center">
        <Text fontSize="14px" color="text.secondary" fontWeight="600">
          {props.case.title}
        </Text>
      </Flex>

      <Sticker borderRadius="12px" mb="6" mt="3" />

      <Flex bottom="3" position="absolute" w="full" justify="center" px="6">
        <Button py="6px" borderRadius="md">
          <Flex align="center" gap="1">
            <Text fontSize="14px" fontWeight="600">
              {props.case.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <TonIcon boxSize="12px" />
          </Flex>
        </Button>
      </Flex>
    </MotionBox>
  );
};

const LoadingCases = React.memo(() => (
  <>
    <Heading mb="1">Sticker cases</Heading>
    <Flex gap="9px" justifyContent="space-between" wrap="wrap">
      {Array.from({ length: 3 }, (_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          borderRadius="12px"
          shadow="lg"
          width="calc(50% - 6px)"
          aspectRatio="1"
        >
          <Skeleton borderRadius="12px" h="full" w="full" />
        </MotionBox>
      ))}
    </Flex>
  </>
));

const LiveWrapper = (props: { gift: GiftsHistory; index: number }) => {
  // @ts-ignore
  const Sticker = Stickers[props.gift.nft.sku];

  return (
    <MotionBox
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      borderRadius="lg"
      shadow="lg"
      bgColor="background.primary"
    >
      <Sticker isDisabled={false} p="6px" />
    </MotionBox>
  );
};

const AdvancedPulse = () => {
  return (
    <MotionBox
      w="4px"
      h="4px"
      borderRadius="full"
      bg={ColorPallette.green.color}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.2, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        times: [0, 0.5, 1],
      }}
    />
  );
};

export default function Page(props: PageProps) {
  const [caseIndex, setCaseIndex] = useState<number | undefined>(undefined);
  const [gifts, setGifts] = useState<GiftsHistory[]>([]);
  const [data, setData] = useState<GiftsHistory[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      setCaseIndex(undefined);
    },
  });

  const fetchGifts = useCallback(async () => {
    const res = await fetch("/api/gift");
    if (res.ok) {
      const data = await res.json();
      setData(data);
      setGifts(data.slice(0, 5));
    }
  }, []);

  useEffect(() => {
    fetchGifts();
  }, []);

  const onClick = useCallback((index: number) => {
    setCaseIndex(index);
  }, []);

  const addGift = useCallback(() => {
    setGifts((items) => {
      if (!items.length) return [];
      const gift = {
        id: Date.now().toString(),
        nft: {
          sku: data[getRandomNumber(0, data.length - 1)]?.nft.sku,
        },
      };
      return [gift, ...items.slice(0, 4)];
    });
  }, [data]);

  useEffect(() => {
    const foo = () => {
      addGift();
      const interval = getRandomNumber(5, 60) * 1000;
      timeoutRef.current = setTimeout(foo, interval);
    };

    foo();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [addGift]);

  return (
    <PageWrapper>
      <Dashboard account={props.account} isLoading={props.isLoading} />

      <Box mt="5">
        {props.isLoading ? (
          <LoadingCases />
        ) : (
          <>
            {!(typeof caseIndex === "number") ? (
              <>
                {gifts.length ? (
                  <HStack gap="2">
                    <VStack gap="2">
                      <AdvancedPulse />
                      <Text
                        color={ColorPallette.green.color}
                        writingMode="vertical-lr"
                        fontSize="14px"
                      >
                        Live
                      </Text>
                    </VStack>
                    <MotionFlex gap="2" w="full">
                      <AnimatePresence mode="popLayout">
                        {gifts.map((item, i) => (
                          <LiveWrapper key={item.id} gift={item} index={i} />
                        ))}
                      </AnimatePresence>
                    </MotionFlex>
                  </HStack>
                ) : null}

                <Heading mb="1" mt="5">
                  Gift cases
                </Heading>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Flex gap="9px" justifyContent="space-between" wrap="wrap">
                    {props.cases.map((item, i) => (
                      <CaseWrapper
                        key={item.id}
                        onClick={() => onClick(i)}
                        case={item}
                      />
                    ))}
                  </Flex>
                </motion.div>
              </>
            ) : null}

            {typeof caseIndex === "number" ? (
              <>
                <Flex mb="3" justify="flex-end">
                  <MotionBox
                    initial={{
                      scale: 1,
                    }}
                    animate={{
                      scale: isActive ? 0.95 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    px="12px"
                    py="3px"
                    bgColor={`${ColorPallette.blue.bg}/${isActive ? 70 : 100}`}
                    alignItems="center"
                    borderRadius="lg"
                    shadow="lg"
                    display="inline-flex"
                    {...touch}
                  >
                    <Text
                      as="span"
                      color={ColorPallette.blue.color}
                      fontWeight="600"
                    >
                      Get back
                    </Text>
                  </MotionBox>
                </Flex>

                <Case
                  account={props.account}
                  isLoading={props.isLoading}
                  payload={props.cases[caseIndex]}
                />
              </>
            ) : null}
          </>
        )}
      </Box>
    </PageWrapper>
  );
}
