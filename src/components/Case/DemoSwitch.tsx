"use client";
import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Switch, Text } from "@chakra-ui/react";
import { useCallback } from "react";

export const DemoSwitch = (props: {
  isDemo: boolean;
  onChange: (value: boolean) => void;
  isDisabled?: boolean;
}) => {
  const hapticFeedback = useHapticFeedback();

  const handleChange = useCallback(
    (value: boolean) => {
      hapticFeedback.onClick();
      props.onChange(value);
    },
    [props.onChange]
  );

  return (
    <Switch.Root
      size="lg"
      checked={props.isDemo}
      onCheckedChange={(e) => handleChange(e.checked)}
      disabled={props.isDisabled}
    >
      <Switch.HiddenInput />
      <Switch.Label>
        <Text color="text.secondary" fontSize="15px">
          Demo
        </Text>
      </Switch.Label>
      <Switch.Control backgroundColor="background.primary">
        <Switch.Thumb
          backgroundColor={
            props.isDemo ? ColorPallette.blue.color : "text.secondary"
          }
        />
      </Switch.Control>
    </Switch.Root>
  );
};
