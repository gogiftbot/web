"use client";

import {
  Box,
  Flex,
  Text,
  Dialog,
  Portal,
  Heading,
  VStack,
  HStack,
  FlexProps,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { Sticker } from "../Sticker";
import { nft } from "@prisma/client";
import { useTouch } from "@/lib/hooks/useTouch";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { TableDivider, TableItem } from "../Table";

const MotionBox = motion(Box);

export const MarketNFTModal = (props: {
  nft: nft;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const CancelButton = (buttonProps: FlexProps) => {
    const { isActive, ...touch } = useTouch({
      handleClick: () => {
        props.setIsOpen(false);
      },
    });

    return (
      <MotionBox
        initial={{
          scale: 1,
        }}
        animate={{
          scale: isActive ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        {...touch}
        w="full"
      >
        <Flex
          {...buttonProps}
          bgColor={`${ColorPallette.red.bg}/${isActive ? 70 : 100}`}
          color={ColorPallette.red.color}
          py="3"
          px="6"
          shadow="lg"
          borderRadius="lg"
          align="center"
          justifyContent="center"
        >
          <Text fontSize="md" fontWeight="600">
            Cancel
          </Text>
        </Flex>
      </MotionBox>
    );
  };

  return (
    <Dialog.Root
      scrollBehavior="inside"
      size="full"
      lazyMount
      open={props.isOpen}
      onOpenChange={(e) => props.setIsOpen(e.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bgColor="background.secondary">
            <Dialog.Body px="6" py="10">
              <VStack>
                <Heading textAlign="center" size="2xl">
                  {props.nft.title} #{props.nft.sku}
                </Heading>

                <VStack mt="10" shadow="lg">
                  <Flex align="center">
                    {props.nft.isSoldOut ? (
                      <Flex
                        ml="12px"
                        h="24px"
                        px="9px"
                        py="3px"
                        bgColor={ColorPallette.red.bg}
                        align="center"
                        borderRadius="lg"
                      >
                        <Text
                          color={ColorPallette.red.color}
                          fontSize="12px"
                          fontWeight="600"
                        >
                          SOLD
                        </Text>
                      </Flex>
                    ) : null}

                    {props.nft.isNew ? (
                      <Flex
                        ml="12px"
                        h="24px"
                        px="9px"
                        py="3px"
                        bgColor={ColorPallette.green.bg}
                        align="center"
                        borderRadius="lg"
                      >
                        <Text
                          color={ColorPallette.green.color}
                          fontSize="12px"
                          fontWeight="600"
                        >
                          NEW
                        </Text>
                      </Flex>
                    ) : null}

                    {props.nft.isHot ? (
                      <Flex
                        ml="12px"
                        h="24px"
                        px="9px"
                        py="3px"
                        bgColor={ColorPallette.yellow.bg}
                        align="center"
                        borderRadius="lg"
                      >
                        <Text
                          color={ColorPallette.yellow.color}
                          fontSize="12px"
                          fontWeight="600"
                        >
                          HOT
                        </Text>
                      </Flex>
                    ) : null}
                  </Flex>
                  <Box
                    borderRadius="12px"
                    overflow="hidden"
                    position="relative"
                    shadow="lg"
                  >
                    <Sticker sku={props.nft.sku} loop autoplay isDisabled />
                  </Box>
                  <Text color="text.secondary">
                    {props.nft.createdAt.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </VStack>

                <Box
                  bgColor="background.primary"
                  borderRadius="lg"
                  w="full"
                  mt="10"
                  shadow="lg"
                >
                  <VStack py="3">
                    <TableItem
                      title="Price"
                      value={
                        <Flex align="center" gap="1">
                          {props.nft.price.toFixed(2)}
                          <Box
                            boxSize="14px"
                            backgroundImage="url('/ton_symbol.svg')"
                            backgroundSize="contain"
                            backgroundRepeat="no-repeat"
                          />
                        </Flex>
                      }
                      px="6"
                    />
                    <TableDivider />
                    <TableItem title="Issued" value="13952 of 14489" px="6" />
                    <TableDivider />
                    <TableItem
                      title="Model"
                      value="Crypto Punk"
                      px="6"
                      tag="0.5%"
                    />
                    <TableDivider />
                    <TableItem
                      title="Backdrop"
                      value="Pine Green"
                      px="6"
                      tag="1%"
                    />
                    <TableDivider />
                    <TableItem
                      title="Symbol"
                      value="Bull of Heaven"
                      px="6"
                      tag="0.5%"
                    />
                  </VStack>
                </Box>

                <HStack w="full">
                  <CancelButton w="50%" />
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
