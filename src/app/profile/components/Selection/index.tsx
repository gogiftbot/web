"use client";

import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";
import { Flex, Icon, Tabs, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { LuLock } from "react-icons/lu";

export const TabValue = {
  Ton: "Ton",
  Gift: "Gift",
} as const;
export type TabValue = keyof typeof TabValue;

export const Selection = (props: {
  value: TabValue;
  setValue: (value: TabValue) => void;
  isGiftDisabled?: boolean;
}) => {
  const t = useTranslations("profile");

  const haptic = useHapticFeedback();

  const handleClick = useCallback(
    (value: TabValue) => {
      if (value === "Gift" && props.isGiftDisabled) return;
      haptic.onClick();
      props.setValue(value);
    },
    [props.isGiftDisabled]
  );

  return (
    <Tabs.Root
      defaultValue={TabValue.Ton}
      variant="plain"
      fitted
      size="lg"
      value={props.value}
      onValueChange={(e) => handleClick(e.value as TabValue)}
    >
      <Tabs.List>
        {Object.keys(TabValue).map((tab) => {
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
              <Flex gap="2" align="center">
                <Text fontSize="15px">{t(tab)}</Text>
                {props.isGiftDisabled && tab === TabValue.Gift && (
                  <Icon boxSize="15px">
                    <LuLock />
                  </Icon>
                )}
              </Flex>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};
