"use client";

import { Box, Flex, Text, FlexProps, Icon, Spinner } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import React from "react";
import { TonIcon } from "../TonIcon";
import { LuLock } from "react-icons/lu";

const MotionBox = motion(Box);

export const SellButton = ({
  price,
  onClick,
  isDisabled,
  ...props
}: FlexProps & {
  price: number;
  onClick: () => Promise<void>;
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
        bgColor={`${ColorPallette.green.bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette.green.color}
        py="3"
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
          color={ColorPallette.green.color}
        >
          Sell
        </Text>
      </Flex>
    </MotionBox>
  );
};

export const KeepButton = ({
  onClick,
  isDisabled,
  ...props
}: FlexProps & {
  onClick: () => Promise<void>;
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
        bgColor={`${ColorPallette.red.bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette.red.color}
        py="3"
        px="4"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
      >
        <Text
          as="span"
          fontSize="md"
          fontWeight="600"
          color={ColorPallette.red.color}
        >
          Keep
        </Text>
      </Flex>
    </MotionBox>
  );
};

export const OpenButton = ({
  onClick,
  isDisabled,
  isLoading,
  ...props
}: FlexProps & {
  onClick: () => Promise<void>;
  isDisabled?: boolean;
  isLoading?: boolean;
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
        {...props}
        bgColor={`${ColorPallette.blue.bg}/${isActive ? 70 : 100}`}
        opacity={isDisabled ? 0.7 : 1}
        color={ColorPallette.blue.color}
        py="3"
        px="4"
        shadow="lg"
        borderRadius="lg"
        align="center"
        justifyContent="center"
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
            <Text
              as="span"
              fontSize="md"
              fontWeight="600"
              color={ColorPallette.blue.color}
            >
              OPEN
            </Text>
          )}
        </Flex>
      </Flex>
    </MotionBox>
  );
};
