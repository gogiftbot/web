import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Input, InputGroup, Skeleton, Text } from "@chakra-ui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";

type Props = {
  onValueChange?: (newValue: string) => void;
  initialValue?: string;
  placeholder?: string;
  description?: string;
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
  });

  return (
    <>
      <Box w="full" position="relative">
        {props.description ? (
          <Text color="text.secondary" px="5px" textAlign="start">
            {props.description}
          </Text>
        ) : null}

        {props.isLoading ? (
          <Skeleton h="40px" borderRadius="md" shadow="md" />
        ) : (
          <InputGroup endElement={props.rightElement}>
            <Input
              px="3"
              {...touch}
              readOnly={!isEditable}
              disabled={props.isDisabled}
              size="lg"
              color="text.secondary"
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

        {props.children}
      </Box>
    </>
  );
};
