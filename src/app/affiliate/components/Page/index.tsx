"use client";

import { CustomTextInput } from "@/components/TextInput";
import { CopyButton } from "@/components/TextInput/CopyButton";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "../Dashboard";
import { Referral } from "../Referral";
import React, { useMemo } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { Skeleton } from "@/components/Skeleton";
import { config } from "@/lib/services/config.service";
import { AccountWithGifts } from "@/app/api/account/selector";
import { useTranslations } from "next-intl";

const LoadingReferrals = React.memo(() =>
  Array.from({ length: 3 }, (_, i) => (
    <Skeleton key={i} borderRadius="lg" h="60px" />
  ))
);

export default function Page(props: {
  isLoading?: boolean;
  account: AccountWithGifts | null;
}) {
  const t = useTranslations("friends");

  const referralLink = useMemo(() => {
    if (!props.account?.referral?.value) `https://t.me/${config.BOT_NAME}`;
    return `https://t.me/${config.BOT_NAME}?startapp=${props.account?.referral?.value}`;
  }, [props.account?.referral?.value]);

  const Referrals = useMemo(() => {
    if (!props.account?.referral?.accounts.length)
      return (
        <Box
          w="full"
          bgColor="background.primary"
          shadow="lg"
          borderRadius="lg"
          px="3"
          py="3"
        >
          <Text fontWeight="600" fontSize="17px">
            {t("list_empty_title")}
          </Text>
          <Text color="text.secondary" fontSize="14px" mt="3">
            {t("list_empty_description")}
          </Text>
        </Box>
      );

    return props.account.referral.accounts.map((referral) => (
      <Referral key={referral.id} account={referral} />
    ));
  }, [props.account?.referral?.accounts]);

  return (
    <PageWrapper>
      <Box>
        <Heading size="2xl">{t("title")}</Heading>
        <Text color="text.secondary">{t("title_secondary")}</Text>
      </Box>

      <Box mt="15px">
        {props.isLoading ? (
          <Skeleton h="87px" borderRadius="21px" />
        ) : (
          <Dashboard account={props.account} />
        )}
      </Box>

      <Box mt="15px">
        <CustomTextInput
          isLoading={props.isLoading}
          description={t("referral_link_title")}
          postDescription={
            <>
              {t("referral_link_description_1")}{" "}
              <Text as="span" fontWeight="600" color="primary">
                {props.account?.referral?.percent || 0}%
              </Text>{" "}
              {t("referral_link_description_2")}
            </>
          }
          placeholder="link"
          initialValue={`t.me/${config.BOT_NAME}`}
          rightElement={
            <Box pr="12px">
              <CopyButton value={referralLink} />
            </Box>
          }
          isEditable={false}
        />
      </Box>

      <Box>
        <Heading mt="15px" color="text.secondary" fontSize="15px">
          {t("list_title")}
        </Heading>

        <VStack gap="2" mt="3px">
          {props.isLoading ? <LoadingReferrals /> : Referrals}
        </VStack>
      </Box>
    </PageWrapper>
  );
}
