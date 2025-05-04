"use client";

import { Box, Flex, Text, FlexProps, Icon } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { LuLock } from "react-icons/lu";

const MotionBox = motion(Box);

export const SellButton = ({
  onClick,
  isDisabled,
  ...props
}: FlexProps & { isDisabled?: boolean; onClick: () => void }) => {
  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      onClick();
    },
    isDisabled,
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
      w="full"
    >
      <Flex
        {...props}
        opacity={isDisabled ? 0.7 : 1}
        bgColor={`${ColorPallette.red.bg}/${isActive ? 70 : 100}`}
        color={ColorPallette.red.color}
        py="3"
        px="6"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
      >
        <Flex gap="2" align="center">
          <Text fontSize="md" fontWeight="600">
            Sell
          </Text>
          <Icon boxSize="14px">
            <LuLock />
          </Icon>
        </Flex>
      </Flex>
    </MotionBox>
  );
};
