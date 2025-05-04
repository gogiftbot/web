"use client";

import { Box, Flex, Text, FlexProps } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import React from "react";

const MotionBox = motion(Box);

export const CollectButton = ({
  onClick,
  countdown,
  isDisabled,
  ...props
}: FlexProps & {
  countdown?: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      onClick();
    },
    isDisabled: isDisabled || !!countdown,
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
        bgColor={`${ColorPallette.green.bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette.green.color}
        py="3"
        px="6"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
      >
        <Text fontSize="md" fontWeight="600" color={ColorPallette.green.color}>
          {countdown || "Collect"}
        </Text>
      </Flex>
    </MotionBox>
  );
};
