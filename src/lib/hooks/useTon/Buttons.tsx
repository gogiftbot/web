"use client";

import { Box, Flex, Text, FlexProps } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import React from "react";

const MotionBox = motion(Box);

export const TonButton = ({
  pallette,
  onClick,
  children,
  isDisabled,
  ...props
}: FlexProps & {
  pallette: keyof typeof ColorPallette;
  children?: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
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
        bgColor={`${ColorPallette[pallette].bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette[pallette].color}
        py="2"
        px="4"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
        gap="3"
      >
        <Text
          as="span"
          fontSize="md"
          fontWeight="600"
          color={ColorPallette[pallette].color}
        >
          {children}
        </Text>
      </Flex>
    </MotionBox>
  );
};
