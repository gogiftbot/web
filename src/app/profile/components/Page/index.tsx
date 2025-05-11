"use client";

import { TransitionLink } from "@/components/PageTransition";
import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { motion } from "motion/react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  InputGroup,
  NumberInput,
  Spinner,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Dashboard } from "../Dashboard";
import { useState } from "react";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import { Selection, TabValue } from "../Selection";
import { useConnectWallet } from "@/lib/hooks/useTon";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import { useTouch } from "@/lib/hooks/useTouch";
import { AccountStickers } from "@/components/Stickers";
import { Skeleton, SkeletonText } from "@/components/Skeleton";

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const [value, setValue] = useState("10");
  const [tab, setTab] = useState<TabValue>(TabValue.Deposit);

  const [isLoading, setIsLoading] = useState(false);
  const [ConnectWallet, connectWallet] = useConnectWallet({
    isLoading: props.isLoading,
    accountId: props.account?.id,
  });

  const { isActive, ...touch } = useTouch({
    handleClick: async () => {
      await connectWallet.onSend({ value: parseFloat(value) });
    },
  });

  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="90px">
        <Flex justify="flex-start" gap="3" mt="5">
          {props.isLoading ? (
            <Skeleton h="64px" w="64px" />
          ) : (
            <Avatar.Root shape="rounded" size="2xl">
              <Avatar.Fallback name={props.account?.username} />
              <Avatar.Image src={props.account?.avatarUrl} />
            </Avatar.Root>
          )}

          <Box>
            {props.isLoading ? (
              <SkeletonText noOfLines={1} h="32px" />
            ) : (
              <Heading size="2xl">{props.account?.username}</Heading>
            )}
            <Text color="text.secondary">
              Manage your balance and inventory
            </Text>
          </Box>
        </Flex>

        <Box mt="5">
          <Dashboard />
        </Box>

        <Box
          mt="5"
          bgColor="background.primary"
          p="5"
          borderRadius="12px"
          shadow="lg"
        >
          <Selection value={tab} setValue={setTab} />

          <Text color="text.secondary" my="5">
            {!connectWallet.isConnected
              ? "Connect your TON wallet to manage deposits and withdrawals."
              : "Securely transfer funds between your wallet and the platform. Processing typically completes within a few minutes."}
          </Text>

          <Box mt="2">
            {props.isLoading ? (
              <Skeleton h="44px" borderRadius="lg" />
            ) : (
              <NumberInput.Root
                defaultValue="20"
                value={value}
                onValueChange={(e) => setValue(e.value)}
                variant="flushed"
                size="lg"
              >
                {/* <NumberInput.Label />
              <NumberInput.ValueText />

              <NumberInput.Scrubber /> */}
                <InputGroup endElement={<TonIcon boxSize="21px" mr="20px" />}>
                  <NumberInput.Input
                    pl="5"
                    // color="text.primary"
                    shadow="lg"
                    borderRadius="lg"
                    bgColor="background.secondary"
                    borderColor="background.secondary"
                  />
                </InputGroup>
              </NumberInput.Root>
            )}
          </Box>

          <Box mt="2">
            {!connectWallet.isConnected ? (
              <ConnectWallet />
            ) : (
              <>
                <Flex
                  {...touch}
                  bgColor={`${ColorPallette.blue.bg}/${isActive ? 70 : 100}`}
                  // opacity={isDisabled ? 0.7 : 1}
                  color={ColorPallette.blue.color}
                  py="2"
                  px="4"
                  shadow="lg"
                  borderRadius="lg"
                  align="center"
                  justifyContent="center"
                  gap="3"
                >
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <Text
                      as="span"
                      fontSize="md"
                      fontWeight="600"
                      color={ColorPallette.blue.color}
                    >
                      PROCESS
                    </Text>
                  )}
                </Flex>
              </>
            )}
          </Box>
        </Box>

        <Box>
          <Text mt="5" ml="5px" color="text.secondary" fontSize="14px" mb="5px">
            Your inventory
          </Text>
          {props.isLoading ? (
            <Skeleton h="113px" borderRadius="lg" />
          ) : (
            <Box
              bgColor="background.primary"
              p="3"
              borderRadius="12px"
              shadow="lg"
            >
              <AccountStickers items={props.account?.gifts} />
            </Box>
          )}
        </Box>
      </VStack>
    </TransitionLink>
  );
}
