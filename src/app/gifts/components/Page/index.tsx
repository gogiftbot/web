"use client";

import {
  Box,
  Heading,
  Flex,
  Text,
  HStack,
  VStack,
  Field,
  Input,
  Group,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";

import { useTouch } from "@/lib/hooks/useTouch";
import { Dashboard } from "../Dashboard";
import { Skeleton } from "@/components/Skeleton";
import { Case } from "@/components/Case";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { Stickers } from "@/components/NFT/Stickers";
import { PageWrapper } from "@/components/PageWrapper";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { GiftsHistory } from "@/app/api/gift/selector";
import { numberToString } from "@/lib/utils/number";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
import { AccountContext } from "@/components/Context/AccountContext";
import { FreeCase } from "@/components/FreeCase";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

type PageProps = {
  cases: CaseWithGifts[];
  freeCase: CaseWithGifts["gifts"];
  account?: AccountWithGifts | null;
  isLoading?: boolean;
};

const FreeCaseWrapper = (props: { onClick: () => void }) => {
  const { isActive, ...touch } = useTouch({
    handleClick: props.onClick,
  });

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
      bgColor={`primary/${isActive ? 70 : 100}`}
      borderRadius="lg"
      shadow="lg"
      width="calc(50% - 6px)"
      aspectRatio="1"
      userSelect="none"
      position="relative"
      pb="4"
      pt="2"
    >
      <Flex justifyContent="center" h="100%" w="100%" pl="10%" pt="5%">
        <Box
          h="100%"
          w="100%"
          backgroundImage="url('/free_case.svg')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
        />
      </Flex>

      {/* <Flex
        justify="center"
        position="absolute"
        top="2"
        width="full"
        gap="2"
        align="center"
      >
        <Text fontSize="15px" fontWeight="600" color="text.secondary">
          Free
          <Text color="primary" as="span" ml="9px">
            NEW
          </Text>
        </Text>
      </Flex> */}

      {/* <Flex justify="center" position="absolute" bottom="2" width="full">
        <Flex align="center" gap="1">
          <Text fontSize="18px" fontWeight="600">
            {numberToString(0)}
          </Text>
          <TonIcon boxSize="18px" />
        </Flex>
      </Flex> */}
    </MotionBox>
  );
};

const CaseWrapper = (props: {
  case: Pick<CaseWithGifts, "sku" | "title" | "price">;
  onClick: () => void;
}) => {
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
      borderRadius="lg"
      shadow="lg"
      width="calc(50% - 6px)"
      aspectRatio="1"
      userSelect="none"
      position="relative"
      pb="4"
      pt="2"
    >
      <VStack h="full" gap="0" justifyContent="flex-start">
        <Flex justifyContent="center" h="full">
          <Box w="90%">
            <Sticker />
          </Box>
        </Flex>
      </VStack>

      <Flex
        justify="center"
        position="absolute"
        top="2"
        width="full"
        gap="2"
        align="center"
      >
        <Text fontSize="15px" fontWeight="600" color="text.secondary">
          {props.case.title}
          {props.case.title === "Heart’s Secret" && (
            <Text color="primary" as="span" ml="9px">
              NEW
            </Text>
          )}
        </Text>
      </Flex>

      <Flex justify="center" position="absolute" bottom="2" width="full">
        <Flex align="center" gap="1">
          <Text fontSize="18px" fontWeight="600">
            {numberToString(props.case.price)}
          </Text>
          <TonIcon boxSize="18px" />
        </Flex>
      </Flex>
    </MotionBox>
  );
};

const LoadingCases = React.memo(() => {
  return (
    <Flex gap="12px" justifyContent="space-between" wrap="wrap">
      {Array.from({ length: 5 }, (_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          borderRadius="lg"
          shadow="lg"
          width="calc(50% - 6px)"
          aspectRatio="1"
        >
          <Skeleton borderRadius="12px" h="full" w="full" />
        </MotionBox>
      ))}
    </Flex>
  );
});

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
      <Sticker isDisabled={false} p="2" />
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
  const t = useTranslations("gifts");
  const router = useRouter();

  const { fetchAccount } = useContext(AccountContext);

  const [caseIndex, setCaseIndex] = useState<number | undefined>(undefined);
  const [isFreeCase, setIsFreeCase] = useState<boolean>(false);
  const [gifts, setGifts] = useState<GiftsHistory[]>([]);

  const [promo, setPromo] = useState("");
  const [promoIsLoading, setPromoIsLoading] = useState(false);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      setCaseIndex(undefined);
      setIsFreeCase(false);
    },
  });

  const linkTouch = useTouch({
    handleClick: () => {
      router.push("https://t.me/GoGift_announcements");
    },
  });

  const fetchGifts = useCallback(async () => {
    const res = await fetch("/api/gift");
    if (res.ok) {
      const data = await res.json();
      setGifts(data);
    }
  }, []);

  useEffect(() => {
    fetchGifts();
  }, []);

  const onClick = useCallback((index: number) => {
    setCaseIndex(index);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!promo) return;
    setPromoIsLoading(true);

    try {
      const res = await fetch(`/api/account/promo`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ value: promo }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        if (["PromoNotFound", "PromoUsed", "PromoNoUses"].includes(errorText)) {
          throw new Error(errorText);
        }
        throw new Error("bad_request");
      }
      fetchAccount?.();
      router.push("/profile");
      toaster.create({
        description: t("success"),
        type: "success",
      });
    } catch (e) {
      toaster.create({
        description: t(`promo.${(e as Error).message}`),
        type: "error",
      });
    } finally {
      setPromoIsLoading(false);
    }
  }, [promo, router, fetchAccount]);

  const Live = useMemo(() => {
    return gifts.length ? (
      <HStack gap="2">
        <VStack gap="2">
          <AdvancedPulse />
          <Text
            color={ColorPallette.green.color}
            writingMode="vertical-lr"
            fontSize="15px"
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
    ) : null;
  }, [gifts]);

  return (
    <PageWrapper>
      <Box>
        <Box mb="12px">
          <Dashboard account={props.account} isLoading={props.isLoading} />
        </Box>
        {props.isLoading ? (
          <>
            <Skeleton borderRadius="lg" h="138px" w="full" mb="12px" />
            <Box mb="12px">
              <LoadingCases />
            </Box>
          </>
        ) : (
          <>
            {!(typeof caseIndex === "number") && !isFreeCase ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    mb="12px"
                    bgColor="background.primary"
                    p="15px"
                    borderRadius="lg"
                    shadow="lg"
                  >
                    <Box mb="15px" pl="3px">
                      <Text fontSize="18px" fontWeight="600">
                        🔓 {t("promo_title")}
                      </Text>
                      <Text color="text.secondary" fontSize="15px">
                        {t("promo_title_secondary")}{" "}
                        <Text
                          userSelect="none"
                          as="span"
                          color={ColorPallette.blue.color}
                          opacity={linkTouch.isActive ? 0.7 : 1}
                          {...linkTouch}
                        >
                          @GoGift
                        </Text>
                      </Text>
                    </Box>

                    <Group attached w="full">
                      <Input
                        fontSize="15px"
                        flex="1"
                        pl="15px"
                        value={promo}
                        onChange={(e) => setPromo(e.currentTarget.value)}
                        backgroundColor="background.secondary"
                        borderRadius="lg"
                        size="lg"
                        placeholder={t("promo_placeholder")}
                        variant="flushed"
                        border="none"
                        css={{
                          "--focus-color": "transparent",
                        }}
                      />
                      <Button
                        h="44px"
                        onClick={onSubmit}
                        borderLeftRadius="none"
                        containerWidth="120px"
                        shadow="none"
                        isLoading={promoIsLoading}
                      >
                        <Text
                          as="span"
                          fontSize="15px"
                          fontWeight="600"
                          color={ColorPallette.blue.color}
                        >
                          {t("submit_button")}
                        </Text>
                      </Button>
                    </Group>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Flex gap="12px" justifyContent="space-between" wrap="wrap">
                    <FreeCaseWrapper onClick={() => setIsFreeCase(true)} />
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
                      {t("get_back")}
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

            {isFreeCase ? (
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
                      {t("get_back")}
                    </Text>
                  </MotionBox>
                </Flex>

                <FreeCase
                  account={props.account}
                  isLoading={props.isLoading}
                  payload={props.freeCase}
                />
              </>
            ) : null}
          </>
        )}
      </Box>
    </PageWrapper>
  );
}
