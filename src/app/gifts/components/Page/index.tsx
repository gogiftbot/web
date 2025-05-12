"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  VStack,
  BoxProps,
} from "@chakra-ui/react";
import { motion } from "motion/react";

import { ProfileNFT } from "@/components/NFT";
import { TransitionLink } from "@/components/PageTransition";
import { useTouch } from "@/lib/hooks/useTouch";
import { useRouter } from "next/navigation";
import { Dashboard } from "../Dashboard";
import { Skeleton } from "@/components/Skeleton";
import { Case } from "@/components/Case";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import React, { useCallback, useState } from "react";
import { CaseWithGifts } from "@/app/api/cases/selector";

const MotionBox = motion(Box);

type PageProps = {
  cases: CaseWithGifts[];
  account?: AccountWithGifts | null;
  isLoading?: boolean;
};

const CaseWrapper = (props: {
  index: number;
  case: CaseWithGifts;
  onClick: () => void;
}) => {
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
      bgColor={`background.primary/${isActive ? 70 : 100}`}
      borderRadius="12px"
      shadow="lg"
      width="calc(33.33% - 6px)"
      aspectRatio="1"
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
    >
      <VStack justify="center" gap="0" my="3">
        <Text fontSize="12px" color="text.secondary" fontWeight="600">
          {props.case.title}
        </Text>
        <Flex align="center" gap="1">
          <Text fontSize="12px" fontWeight="600">
            {props.case.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <TonIcon boxSize="12px" />
        </Flex>
      </VStack>

      <Flex
        h="50%"
        w="100%"
        align="center"
        justify="flex-end"
        flexDirection="column"
      >
        <Box
          h="100%"
          aspectRatio="1"
          backgroundImage={`url('/gift_${props.index}.png')`}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
        />
      </Flex>
    </MotionBox>
  );
};

const LoadingCases = React.memo(() => (
  <Flex gap="9px" justifyContent="space-between">
    {Array.from({ length: 3 }, (_, i) => (
      <MotionBox
        key={i}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        borderRadius="12px"
        shadow="lg"
        width="calc(33.33% - 6px)"
        aspectRatio="1"
      >
        <Skeleton borderRadius="12px" h="full" w="full" />
      </MotionBox>
    ))}
  </Flex>
));

export default function Page(props: PageProps) {
  const [caseIndex, setCaseIndex] = useState<number | undefined>(undefined);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      setCaseIndex(undefined);
    },
  });

  const onClick = useCallback((index: number) => {
    setCaseIndex(index);
  }, []);

  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="96px">
        <Dashboard account={props.account} isLoading={props.isLoading} />

        <Heading>Sticker cases</Heading>

        {props.isLoading ? (
          <LoadingCases />
        ) : (
          <>
            {!(typeof caseIndex === "number") ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Flex gap="9px" justifyContent="space-between" wrap="wrap">
                  {props.cases.map((item, i) => (
                    <CaseWrapper
                      key={item.id}
                      index={i + 1}
                      onClick={() => onClick(i)}
                      case={item}
                    />
                  ))}
                </Flex>
              </motion.div>
            ) : null}

            {typeof caseIndex === "number" ? (
              <>
                <Box {...touch}>
                  <Text color="primary" opacity={isActive ? 0.7 : 1}>
                    Get back
                  </Text>
                </Box>
                <Case
                  account={props.account}
                  isLoading={props.isLoading}
                  payload={props.cases[caseIndex]}
                />
              </>
            ) : null}
          </>
        )}
      </VStack>
    </TransitionLink>
  );
}
