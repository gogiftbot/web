"use client";

import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Icon, useClipboard } from "@chakra-ui/react";
import { LuCopy } from "react-icons/lu";
import { motion } from "motion/react";
import { useEffect } from "react";
import { toaster } from "../ui/toaster";

const MotionBox = motion(Box);

type Props = { value?: string };

export const CopyButton = (props: Props) => {
  const clipboard = useClipboard();

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      clipboard.copy();
      toaster.create({
        description: "Copied to clipboard",
      });
    },
  });

  useEffect(() => {
    if (props.value) clipboard.setValue(props.value);
  }, [props.value]);

  return (
    <MotionBox
      {...touch}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isActive ? 0.9 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Icon color="text.secondary" opacity={isActive ? 0.7 : 1} size="md">
        <LuCopy />
      </Icon>
    </MotionBox>
  );
};
