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
} from "@chakra-ui/react";
import { Sticker } from "../Sticker";
import { nft } from "@/generated/prisma";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { TableDescription } from "../Table";
import { BackButton } from "../BackButton";

export const MarketNFTModal = (props: {
  nft: nft;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Dialog.Root
      motionPreset="scale"
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
                <Flex
                  position="relative"
                  w="full"
                  align="center"
                  justify="center"
                >
                  <Box position="absolute" left="0">
                    <BackButton onClick={() => props.setIsOpen(false)} />
                  </Box>

                  <Heading textAlign="center" size="2xl">
                    {props.nft.title} #{props.nft.sku}
                  </Heading>
                </Flex>

                <VStack shadow="lg">
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

                <TableDescription nft={props.nft} />

                <HStack w="full">
                  {/* <CancelButton w="50%" setIsOpen={props.setIsOpen} /> */}
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
