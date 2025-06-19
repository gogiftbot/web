"use client";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  InputGroup,
  NumberInput,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Dashboard } from "../Dashboard";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
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
import { ExternalLink } from "./ExternalLink";
import { useTranslations } from "next-intl";
import {
  LanguageSelection,
  LanguageTabValue,
} from "@/components/LanguageSelection";
import { useRouter } from "next/navigation";
import { BonusSwitch } from "./BonusSwitch";

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const t = useTranslations("profile");
  const router = useRouter();

  const { fetchAccount } = useContext(AccountContext);
  const [value, setValue] = useState("10");
  const [tab, setTab] = useState<TabValue>(TabValue.Deposit);
  const [bonus, setBonus] = useState<string | undefined>(undefined);

  const [language, setLanguage] = useState<LanguageTabValue>(
    LanguageTabValue.EN
  );
  const [accountUpdateIsLoading, setAccountUpdateIsLoading] = useState(false);

  const balance = useMemo(
    () => props.account?.balance ?? 0,
    [props.account?.balance]
  );

  const [isLoading, setIsLoading] = useState(false);
  const [ConnectWallet, wallet] = useConnectWallet({
    isLoading: props.isLoading,
    accountId: props.account?.id,
    bonusId: bonus,
    buttonProps: {
      h: "42px",
    },
  });

  useEffect(() => {
    if (props.account?.language) setLanguage(props.account.language);
  }, [props.account]);

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
          description: t("success"),
          type: "success",
        });
      } catch (error) {
        toaster.create({
          description: t("bad_request"),
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }

      return;
    }
  }, [wallet.walletAddress, tab, value, balance, fetchAccount]);

  const onLanguageUpdate = useCallback(
    async (language: LanguageTabValue) => {
      if (accountUpdateIsLoading) return;
      setLanguage(language);

      setAccountUpdateIsLoading(true);
      try {
        const res = await fetch("/api/account/update", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            language,
          }),
        });
        if (!res.ok) throw new Error("BadRequest");
        fetchAccount?.();
        router.refresh();
      } catch (error) {
        toaster.create({
          description: t("bad_request"),
          type: "error",
        });
      } finally {
        setAccountUpdateIsLoading(false);
      }
    },
    [language, accountUpdateIsLoading, router, fetchAccount]
  );

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
          <Text color="text.secondary">{t("title")}</Text>
        </Box>
      </Flex>

      <Box
        mt="2"
        bgColor="background.primary"
        p="5"
        borderRadius="12px"
        shadow="lg"
      >
        <Selection value={tab} setValue={setTab} isWithdrawDisabled />

        <Text color="text.secondary" my="5" fontSize="15px">
          {!wallet.isConnected
            ? t("wallet_description_1")
            : t("wallet_description_2")}
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
                h="42px"
                onClick={onProcess}
                text={t("process_button")}
              />
            </>
          )}
        </Box>

        {props.account?.bonuses.length && tab === TabValue.Deposit ? (
          <Flex mt="5" justifyContent="flex-end">
            <BonusSwitch
              isBonus={!!bonus}
              bonusValue={props.account.bonuses[0].value}
              onChange={(value) => {
                setBonus(value ? props.account!.bonuses[0].id : undefined);
              }}
            />
          </Flex>
        ) : null}
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
                {t("connected_wallet")}:
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
          {t("inventory_title")}
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

      <Box mt="10">
        <Heading ml="5px" color="text.secondary" fontSize="14px">
          {t("language.title")}
        </Heading>
        {props.isLoading ? (
          <Skeleton h="56px" borderRadius="lg" />
        ) : (
          <Box
            bgColor="background.primary"
            px="3"
            py="2"
            borderRadius="12px"
            shadow="lg"
          >
            <LanguageSelection value={language} setValue={onLanguageUpdate} />
          </Box>
        )}
      </Box>

      <Box mt="2">
        <VStack gap="3">
          <ExternalLink
            title={t("link_community")}
            description="t.me/GoGift_announcements"
            link="https://t.me/GoGift_announcements"
          />
          <ExternalLink
            title={t("link_support")}
            description="t.me/GoGift_Support"
            link="https://t.me/GoGift_Support"
          />
        </VStack>
      </Box>
    </PageWrapper>
  );
}
