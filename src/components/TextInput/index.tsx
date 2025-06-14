"use client";

import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Input, InputGroup, Text } from "@chakra-ui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Skeleton } from "../Skeleton";

type Props = {
  onValueChange?: (newValue: string) => void;
  initialValue?: string;
  placeholder?: string;
  description?: string;
  postDescription?: React.ReactNode;
  dynamicValue?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
  rightElement?: ReactNode;
  onEvent?: () => void;
  children?: ReactNode;
};

export const CustomTextInput = (props: Props) => {
  const { isEditable = true } = props;
  const [value, setValue] = useState(props.initialValue || "");

  const onChange = useCallback((v: string) => {
    setValue(v);
  }, []);

  useEffect(() => {
    props.onValueChange?.(value);
  }, [value]);

  useEffect(() => {
    if (props.dynamicValue) setValue(props.dynamicValue);
  }, [props.dynamicValue]);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      if (props.onEvent) {
        props.onEvent?.();
      }
    },
    isDisabled: props.isDisabled,
  });

  return (
    <>
      <Box w="full" position="relative">
        {props.description ? (
          <Text
            color="text.secondary"
            pl="3px"
            textAlign="start"
            fontSize="12px"
          >
            {props.description}
          </Text>
        ) : null}

        {props.isLoading ? (
          <Skeleton h="44px" borderRadius="lg" shadow="lg" />
        ) : (
          <InputGroup endElement={props.rightElement}>
            <Input
              px="12px"
              {...touch}
              readOnly={!isEditable}
              disabled={props.isDisabled}
              size="lg"
              shadow="lg"
              borderRadius="lg"
              bgColor="background.primary"
              borderColor="background.primary"
              variant="flushed"
              placeholder={props.placeholder}
              value={value}
              onChange={(event) => {
                onChange(event.currentTarget.value);
              }}
            />
          </InputGroup>
        )}

        {props.postDescription ? (
          <Text
            mt="6px"
            color="text.secondary"
            pl="3px"
            textAlign="start"
            fontSize="12px"
          >
            {props.postDescription}
          </Text>
        ) : null}

        {props.children}
      </Box>
    </>
  );
};
