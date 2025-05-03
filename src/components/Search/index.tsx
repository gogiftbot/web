"use client";

import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const MotionInput = motion(Input);

type CustomSearchProps = {
  onValueChange?: (newValue: string) => void;
};

export const CustomSearch = (props: CustomSearchProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    props.onValueChange?.(value);
  }, [value]);

  return (
    <motion.div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <InputGroup
        startElement={
          <Icon size="sm" ml="4">
            <LuSearch />
          </Icon>
        }
      >
        <MotionInput
          size="lg"
          pr="5"
          color="text.secondary"
          shadow="lg"
          borderRadius="lg"
          bgColor="background.primary"
          borderColor="background.primary"
          placeholder="Search sticker.."
          variant="flushed"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputGroup>
    </motion.div>
  );
};
