import { MajorIcon } from "@/components/Icons/MajorIcon";
import { PureTonIcon } from "@/components/Icons/PureTonIcon";
import { TonIcon } from "@/components/TonIcon";
import { Flex, Tabs, Text } from "@chakra-ui/react";
import { memo } from "react";

export const TabValue = {
  STARS: "STARS",
  TON: "TON",
} as const;
export type TabValue = keyof typeof TabValue;

const StarsTab = memo(() => (
  <Flex align="center" gap="2">
    <Text color="#fcc135" fontSize="18px" fontWeight="600">
      STARS
    </Text>
    <MajorIcon boxSize="18px" />
  </Flex>
));

const TonTab = memo(() => (
  <Flex align="center" gap="2">
    <Text color="primary" fontSize="18px" fontWeight="600">
      TON
    </Text>
    <TonIcon boxSize="18px" />
  </Flex>
));

export const Selection = (props: {
  value: TabValue;
  setValue: (value: TabValue) => void;
}) => {
  return (
    <Tabs.Root
      defaultValue={TabValue.STARS}
      variant="plain"
      fitted
      size="md"
      value={props.value}
      onValueChange={(e) => props.setValue(e.value as TabValue)}
    >
      <Tabs.List>
        {Object.keys(TabValue).map((tab) => {
          const isSelected = props.value == tab;
          return (
            <Tabs.Trigger
              key={tab}
              value={tab}
              bgColor={isSelected ? "background.secondary" : "transparent"}
              borderRadius="lg"
              opacity={isSelected ? "1" : "0.4"}
            >
              {tab === TabValue.STARS ? <StarsTab /> : null}
              {tab === TabValue.TON ? <TonTab /> : null}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {/* <Tabs.Content value={TabValue.STARS}>Withdraw</Tabs.Content>
      <Tabs.Content value={TabValue.TON}>Deposit</Tabs.Content> */}
    </Tabs.Root>
  );
};
