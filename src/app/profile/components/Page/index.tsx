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
  HStack,
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
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/Button";

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const [value, setValue] = useState("10");
  const [tab, setTab] = useState<TabValue>(TabValue.Deposit);

  const [isLoading, setIsLoading] = useState(false);
  const [ConnectWallet, wallet] = useConnectWallet({
    isLoading: props.isLoading,
    accountId: props.account?.id,
    buttonProps: {
      h: "40px",
    },
  });

  const { isActive, ...touch } = useTouch({
    handleClick: async () => {
      await wallet.onSend({ value: parseFloat(value) });
    },
  });

  return (
    <PageWrapper>
      <Flex justify="flex-start" gap="3">
        {props.isLoading ? (
          <Skeleton h="64px" w="64px" borderRadius="full" />
        ) : (
          <Avatar.Root shape="full" size="2xl">
            <Avatar.Fallback name={props.account?.username} />
            <Avatar.Image src={props.account?.avatarUrl ?? undefined} />
          </Avatar.Root>
        )}

        <Box>
          {props.isLoading ? (
            <SkeletonText noOfLines={1} h="32px" />
          ) : (
            <Heading size="2xl">{props.account?.username}</Heading>
          )}
          <Text color="text.secondary">Manage your balance and inventory</Text>
        </Box>
      </Flex>

      <Box mt="10">
        <Dashboard account={props.account} />
      </Box>

      <Box
        mt="10"
        bgColor="background.primary"
        p="5"
        borderRadius="12px"
        shadow="lg"
      >
        <Selection value={tab} setValue={setTab} />

        <Text color="text.secondary" my="5" fontSize="16px">
          {!wallet.isConnected
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
              <InputGroup endElement={<TonIcon boxSize="21px" mr="20px" />}>
                <NumberInput.Input
                  pl="5"
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
          {!wallet.isConnected ? (
            <ConnectWallet />
          ) : (
            <>
              <Button
                isDisabled={props.isLoading}
                h="40px"
                onClick={async () => {
                  await wallet.onSend({ value: parseFloat(value) });
                }}
                text="Process"
              />
            </>
          )}
        </Box>
      </Box>

      <Box mt="2">
        {wallet.isConnected ? (
          <Box
            bgColor="background.primary"
            p="3"
            borderRadius="12px"
            shadow="lg"
          >
            <HStack justifyContent="space-between" align="center">
              <VStack gap="0" align="start" lineHeight="1">
                <Text color="text.secondary" fontSize="12px">
                  Connected wallet:
                </Text>
                <Text
                  mt="1"
                  maxW="150px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {wallet.walletAddress}
                </Text>
              </VStack>

              <Box>
                <ConnectWallet />
              </Box>
            </HStack>
          </Box>
        ) : null}
      </Box>

      <Box mt="10">
        <Heading ml="5px" color="text.secondary" fontSize="14px">
          Your inventory
        </Heading>
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
    </PageWrapper>
  );
}
