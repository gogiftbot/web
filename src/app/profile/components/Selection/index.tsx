import { Tabs } from "@chakra-ui/react";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

export const TabValue = {
  Deposit: "Deposit",
  Withdraw: "Withdraw",
} as const;
export type TabValue = keyof typeof TabValue;

export const Selection = (props: {
  value: TabValue;
  setValue: (value: TabValue) => void;
}) => {
  return (
    <Tabs.Root
      defaultValue={TabValue.Deposit}
      variant="plain"
      fitted
      size="sm"
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
              color="text.secondary"
              bgColor={isSelected ? "background.secondary" : "transparent"}
              borderRadius="lg"
              fontWeight="600"
              opacity={isSelected ? "1" : "0.4"}
            >
              {/* <LuUser /> */}
              {tab}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {/* <Tabs.Content value={Ta}>Withdraw</Tabs.Content>
      <Tabs.Content value="Deposit">Deposit</Tabs.Content> */}
    </Tabs.Root>
  );
};
