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
  iconColor,
  containerWidth,
  ...props
}: FlexProps & {
  onClick?: () => Promise<void> | void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  text?: string;
  pallette?: keyof typeof ColorPallette;
  iconColor?: string;
  containerWidth?: string;
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
      w={containerWidth || "full"}
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
          {isDisabled && !isLoading ? (
            <Icon boxSize="14px">
              <LuLock color={iconColor} />
            </Icon>
          ) : null}
          {isLoading ? (
            <Spinner color={iconColor} />
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
