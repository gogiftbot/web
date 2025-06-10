"use client";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  InputGroup,
  NumberInput,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Dashboard } from "../Dashboard";
import { useCallback, useContext, useMemo, useState } from "react";
import { AccountWithGifts } from "@/app/api/account/selector";
import { TonIcon } from "@/components/TonIcon";
import { Selection, TabValue } from "../Selection";
import { useConnectWallet } from "@/lib/hooks/useTon";
import { AccountStickers } from "@/components/Stickers";
import { Skeleton, SkeletonText } from "@/components/Skeleton";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/Button";
import { AccountContext } from "@/components/Context/AccountContext";
import { toaster } from "@/components/ui/toaster";
import { LuExternalLink } from "react-icons/lu";
import { ExternalLink } from "./ExternalLink";

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const { fetchAccount } = useContext(AccountContext);
  const [value, setValue] = useState("10");
  const [tab, setTab] = useState<TabValue>(TabValue.Deposit);
  const balance = useMemo(
    () => props.account?.balance ?? 0,
    [props.account?.balance]
  );

  const [isLoading, setIsLoading] = useState(false);
  const [ConnectWallet, wallet] = useConnectWallet({
    isLoading: props.isLoading,
    accountId: props.account?.id,
    buttonProps: {
      h: "40px",
    },
  });

  const onProcess = useCallback(async () => {
    const floatValue = parseFloat(value);
    if (floatValue < 1) return;

    if (tab === TabValue.Deposit) {
      await wallet.onSend({ value: floatValue });
      return;
    }

    if (tab === TabValue.Withdraw) {
      if (floatValue > balance) return;
      if (!wallet.walletAddress) return;

      setIsLoading(true);

      try {
        const res = await fetch("/api/account/withdraw", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            amount: floatValue,
            address: wallet.walletAddress,
          }),
        });
        if (!res.ok) throw new Error("BadRequest");
        await fetchAccount?.();
        toaster.create({
          description: "Success!",
          type: "success",
        });
      } catch (error) {
        toaster.create({
          description: "Something bad happened",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }

      return;
    }
  }, [wallet.walletAddress, tab, value, balance, fetchAccount]);

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

      <Box
        mt="2"
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
              min={1}
              max={
                tab === TabValue.Withdraw ? props.account?.balance : undefined
              }
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
                isLoading={isLoading}
                isDisabled={
                  !value ||
                  ((balance < parseFloat(value) || 1 > parseFloat(value)) &&
                    tab === TabValue.Withdraw) ||
                  (tab === TabValue.Deposit && parseFloat(value) < 1)
                }
                h="40px"
                onClick={onProcess}
                text="Process"
              />
            </>
          )}
        </Box>
      </Box>

      {wallet.isConnected && !props.isLoading ? (
        <Box
          mt="2"
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
                mt="2"
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

      <Box mt="2">
        {props.isLoading ? (
          <Skeleton h="87px" borderRadius="12px" />
        ) : (
          <Dashboard account={props.account} />
        )}
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

      <Box mt="2">
        <VStack gap="3">
          <ExternalLink
            title="Community channel"
            description="t.me/GoGift_announcements"
            link="https://t.me/GoGift_announcements"
          />
          <ExternalLink
            title="Contact support"
            description="t.me/GoGift_Support"
            link="https://t.me/GoGift_Support"
          />
        </VStack>
      </Box>
    </PageWrapper>
  );
}
