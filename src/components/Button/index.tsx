"use client";

import { Box, Flex, Text, FlexProps, Icon, Spinner } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import React from "react";
import { LuLock } from "react-icons/lu";

const MotionBox = motion(Box);

export const Button = ({
  onClick,
  isDisabled,
  isLoading,
  children,
  text,
  pallette = "blue",
  ...props
}: FlexProps & {
  onClick?: () => Promise<void> | void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  text?: string;
  pallette?: keyof typeof ColorPallette;
}) => {
  const { isActive, ...touch } = useTouch({
    handleClick: onClick,
    isDisabled: isDisabled || isLoading,
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
        bgColor={`${ColorPallette[pallette].bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette[pallette].color}
        py="3"
        px="4"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
        userSelect="none"
        {...props}
      >
        <Flex gap="2" align="center">
          {isDisabled ? (
            <Icon boxSize="14px">
              <LuLock />
            </Icon>
          ) : null}
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {text ? (
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="600"
                  color={ColorPallette[pallette].color}
                >
                  {text}
                </Text>
              ) : (
                children
              )}
            </>
          )}
        </Flex>
      </Flex>
    </MotionBox>
  );
};
