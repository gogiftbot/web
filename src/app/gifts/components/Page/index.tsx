"use client";

import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { motion } from "motion/react";

import { useTouch } from "@/lib/hooks/useTouch";
import { Dashboard } from "../Dashboard";
import { Skeleton } from "@/components/Skeleton";
import { Case } from "@/components/Case";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import React, { useCallback, useState } from "react";
import { CaseWithGifts } from "@/app/api/cases/selector";
import { Button } from "@/components/Button";
import { Stickers } from "@/components/NFT/Stickers";
import { PageWrapper } from "@/components/PageWrapper";
import { ColorPallette } from "@/lib/styles/ColorPallette";

const MotionBox = motion(Box);

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
    <PageWrapper>
      <Dashboard account={props.account} isLoading={props.isLoading} />

      <Box mt="10">
        {props.isLoading ? (
          <LoadingCases />
        ) : (
          <>
            {!(typeof caseIndex === "number") ? (
              <>
                <Heading mb="1">Gift cases</Heading>
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
