"use client";

import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { Switch, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

export const BonusSwitch = (props: {
  bonusValue: number;
  isBonus: boolean;
  onChange: (value: boolean) => void;
  isDisabled?: boolean;
}) => {
  const t = useTranslations("gifts");

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
      checked={props.isBonus}
      onCheckedChange={(e) => handleChange(e.checked)}
      disabled={props.isDisabled}
    >
      <Switch.HiddenInput />
      <Switch.Label>
        <Text color="text.secondary" fontSize="15px">
          {t("promo.description_1")}{" "}
          <Text as="span" color={ColorPallette.blue.color} fontWeight="600">
            {props.bonusValue}%
          </Text>{" "}
          {t("promo.description_2")}
        </Text>
      </Switch.Label>
      <Switch.Control backgroundColor="background.secondary">
        <Switch.Thumb
          backgroundColor={
            props.isBonus ? ColorPallette.blue.color : "text.secondary"
          }
        />
      </Switch.Control>
    </Switch.Root>
  );
};
