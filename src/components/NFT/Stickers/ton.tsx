"use client";

import {
  Flex,
  FlexProps,
  Icon,
  IconProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StickerProps } from "./base";
import { numberToString } from "@/lib/utils/number";
import { TonIcon } from "@/components/TonIcon";

const PureTonIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={(props.fill as string) || "#2AABEE"}
        d="M19.011 9.201L12.66 19.316a.857.857 0 0 1-1.453-.005L4.98 9.197a1.8 1.8 0 0 1-.266-.943a1.856 1.856 0 0 1 1.881-1.826h10.817c1.033 0 1.873.815 1.873 1.822c0 .334-.094.664-.274.951M6.51 8.863l4.632 7.144V8.143H6.994c-.48 0-.694.317-.484.72m6.347 7.144l4.633-7.144c.214-.403-.005-.72-.485-.72h-4.148z"
      />
    </svg>
  </Icon>
);

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
        <PureTonIcon w={price ? "70%" : "full"} fill={flexProps.fill} />
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
