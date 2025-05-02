"use client";

import {
  Box,
  Flex,
  Text,
  HStack,
  BoxProps,
  StackProps,
} from "@chakra-ui/react";

export const TableItem = ({
  title,
  value,
  tag,
  ...props
}: { title: string; value: React.ReactNode; tag?: string } & StackProps) => {
  return (
    <HStack w="full" {...props}>
      <Box w="90px">
        <Text color="text.secondary">{title}</Text>
      </Box>
      <Flex align="center">
        <Box fontWeight="600">{value}</Box>
        {tag ? (
          <Flex
            ml="12px"
            h="24px"
            px="9px"
            py="3px"
            bgColor="#26394b"
            align="center"
            borderRadius="lg"
          >
            <Text color="#4cb2ff" fontSize="12px" fontWeight="600">
              {tag}
            </Text>
          </Flex>
        ) : null}
      </Flex>
    </HStack>
  );
};
export const TableDivider = (props: BoxProps) => (
  <Box bgColor="background.secondary" h="2px" w="full" {...props} />
);
