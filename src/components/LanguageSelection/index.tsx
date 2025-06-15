"use client";

import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { Tabs, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

export const LanguageTabValue = {
  EN: "RU",
  RU: "EN",
} as const;
export type LanguageTabValue = keyof typeof LanguageTabValue;

export const LanguageSelection = (props: {
  value: LanguageTabValue;
  setValue: (value: LanguageTabValue) => Promise<void>;
}) => {
  const t = useTranslations("profile");

  const haptic = useHapticFeedback();

  const handleClick = useCallback(async (value: LanguageTabValue) => {
    haptic.onClick();
    await props.setValue(value);
  }, []);

  return (
    <Tabs.Root
      defaultValue={LanguageTabValue.EN}
      variant="plain"
      fitted
      size="md"
      value={props.value}
      onValueChange={(e) => handleClick(e.value as LanguageTabValue)}
    >
      <Tabs.List>
        {Object.keys(LanguageTabValue).map((tab) => {
          const isSelected = props.value == tab;
          return (
            <Tabs.Trigger
              key={tab}
              value={tab}
              color="text.secondary"
              bgColor={isSelected ? "background.secondary" : "transparent"}
              borderRadius="lg"
              fontWeight="600"
              opacity={isSelected ? "1" : "0.4"}
            >
              <Text fontSize="15px">{t(`language.${tab}`)}</Text>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};
