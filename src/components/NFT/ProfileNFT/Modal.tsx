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
  Timeline,
} from "@chakra-ui/react";
import { Sticker } from "../Sticker";
import { TableDescription, TableTag } from "../Table";
import { getNftState, ProfileNFTProps } from "./NFT";
import { TonIcon } from "@/components/TonIcon";
import { BackButton } from "../BackButton";
import { SellButton } from "../SellButton";
import { CollectButton } from "../CollectButton";

const Connector = () => (
  <Timeline.Connector pt="7px">
    <Timeline.Separator borderColor="primary" />
    <Timeline.Indicator
      outlineColor="primary"
      boxSize="10px"
      ml="5px"
      bgColor="background.secondary"
    />
  </Timeline.Connector>
);

const TimelineDate = ({ date }: { date: Date }) => (
  <Timeline.Title whiteSpace="nowrap" color="text.secondary">
    {date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    })}
    ,<br />
    {date.toLocaleTimeString("en-US", {
      timeStyle: "short",
    })}
  </Timeline.Title>
);

export const ProfileNFTModal = (props: {
  payload: ProfileNFTProps["payload"];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const nftState = getNftState(props.payload);

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
                    {props.payload.nft.title} #{props.payload.nft.sku}
                  </Heading>
                </Flex>

                <VStack shadow="lg">
                  <Box
                    borderRadius="12px"
                    overflow="hidden"
                    position="relative"
                    shadow="lg"
                  >
                    <Sticker
                      sku={props.payload.nft.sku}
                      loop
                      autoplay
                      isDisabled
                    />
                  </Box>
                  <Text color="text.secondary">
                    {props.payload.nft.createdAt.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </VStack>

                <TableDescription nft={props.payload.nft} />

                <Timeline.Root size="md" pl="3" mb="10" mt="12">
                  <Timeline.Item>
                    <Timeline.Content width="90px" pb="3">
                      <TimelineDate date={props.payload.createdAt} />
                    </Timeline.Content>
                    <Connector />
                    <Timeline.Content>
                      <Timeline.Title>
                        <TableTag color="blue">
                          {props.payload.nft.title}
                        </TableTag>
                        is now yours!
                      </Timeline.Title>
                    </Timeline.Content>
                  </Timeline.Item>

                  {props.payload.transactions.map((transaction) => (
                    <Timeline.Item key={transaction.id}>
                      <Timeline.Content width="90px" pb="3">
                        <TimelineDate date={transaction.createdAt} />
                      </Timeline.Content>
                      <Connector />
                      <Timeline.Content>
                        <Timeline.Title>
                          Cha-ching!
                          <TableTag color="blue">
                            <Flex align="center" gap="1">
                              {transaction.amount.toFixed(2)}
                              <TonIcon boxSize="14px" />
                            </Flex>
                          </TableTag>
                          collected.
                        </Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>
                  ))}

                  <Timeline.Item>
                    <Timeline.Connector pt="7px" pb="7px">
                      <Timeline.Separator borderColor="primary" />
                    </Timeline.Connector>
                  </Timeline.Item>
                </Timeline.Root>

                <Box>
                  <Box color="text.secondary">
                    <Text>
                      Your journey starts the moment you buy a sticker. Every 24
                      hours, it generates profit just waiting to be collected.
                    </Text>
                    <Text mt="3px">
                      Do this 30 times, and you'll unlock the ability to sell it
                      back for the full price you paid.
                    </Text>
                  </Box>

                  <HStack w="full" mt="5">
                    <SellButton
                      w="full"
                      onClick={() => {}}
                      isDisabled={
                        props.payload.transactions.length !==
                        props.payload.nft.iterations
                      }
                    />
                    <CollectButton
                      w="full"
                      countdown={nftState.countdown}
                      onClick={() => {}}
                    />
                  </HStack>
                </Box>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
