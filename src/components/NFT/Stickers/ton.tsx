"use client";

import { Flex, FlexProps, Text, VStack } from "@chakra-ui/react";
import { StickerProps } from "./base";
import { numberToString } from "@/lib/utils/number";
import { TonIcon } from "@/components/TonIcon";
import { PureTonIcon } from "@/components/Icons/PureTonIcon";

export const StickerTon = ({
  loop = false,
  autoplay = false,
  isDisabled = true,
  price,
  ...flexProps
}: StickerProps & FlexProps) => {
  return (
    <Flex
      {...flexProps}
      h="full"
      w="full"
      justifyContent="center"
      align="center"
    >
      <VStack gap="0">
        <PureTonIcon w={price ? "70%" : "full"} />
        {price && (
          <Flex align="center" gap="1">
            <Text fontSize="18px" fontWeight="600">
              {numberToString(price)}
            </Text>
            <TonIcon boxSize="18px" />
          </Flex>
        )}
      </VStack>
    </Flex>
  );
};
