"use client";

import { ColorPallette } from "@/lib/styles/ColorPallette";
import {
  Box,
  Flex,
  Text,
  HStack,
  BoxProps,
  StackProps,
  FlexProps,
  TextProps,
  VStack,
} from "@chakra-ui/react";
import { TonIcon } from "../TonIcon";
import { nft } from "@/generated/prisma";

type PalletteColor = keyof typeof ColorPallette;

export const TableTag = ({
  color,
  children,
  flexProps,
  textProps,
}: {
  color: PalletteColor;
  children: React.ReactNode;
  flexProps?: FlexProps;
  textProps?: TextProps;
}) => (
  <Flex
    px="9px"
    py="3px"
    bgColor={ColorPallette[color].bg}
    align="center"
    borderRadius="lg"
    {...flexProps}
  >
    <Text
      as="span"
      color={ColorPallette[color].color}
      fontSize="12px"
      fontWeight="600"
      {...textProps}
    >
      {children}
    </Text>
  </Flex>
);

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
          <TableTag color="blue" flexProps={{ ml: "12px", h: "24px" }}>
            {tag}
          </TableTag>
        ) : null}
      </Flex>
    </HStack>
  );
};
export const TableDivider = (props: BoxProps) => (
  <Box bgColor="background.secondary" h="2px" w="full" {...props} />
);

export const TableDescription = (props: { nft: nft }) => {
  return (
    <Box w="full" mt="10">
      <Text color="text.secondary" textAlign="start" fontSize="14px" pl="5px">
        Sticker description
      </Text>

      <Box bgColor="background.primary" borderRadius="lg" shadow="lg" mt="3px">
        <VStack py="3">
          <TableItem
            title="Price"
            value={
              <Flex align="center" gap="1">
                {props.nft.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                <TonIcon boxSize="14px" />
              </Flex>
            }
            px="6"
          />
          <TableDivider />
          <TableItem title="Issued" value="13952 of 14489" px="6" />
          <TableDivider />
          <TableItem title="Model" value="Crypto Punk" px="6" tag="0.5%" />
          <TableDivider />
          <TableItem title="Backdrop" value="Pine Green" px="6" tag="1%" />
          <TableDivider />
          <TableItem title="Symbol" value="Bull of Heaven" px="6" tag="0.5%" />
        </VStack>
      </Box>
    </Box>
  );
};
