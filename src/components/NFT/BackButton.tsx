"use client";

import { useTouch } from "@/lib/hooks/useTouch";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";

export const BackButton = (props: { onClick: () => void }) => {
  const { isActive, ...touch } = useTouch({
    handleClick: props.onClick,
  });

  return (
    <Flex
      {...touch}
      align="center"
      gap="1"
      color="text.secondary"
      opacity={isActive ? 0.7 : 1}
    >
      <Icon size="sm">
        <LuArrowLeft />
      </Icon>
      <Text>Back</Text>
    </Flex>
  );
};
