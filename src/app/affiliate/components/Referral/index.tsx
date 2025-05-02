import { TonIcon } from "@/components/TonIcon";
import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionBox = motion(Box);

export type ReferralProps = {
  referral: {
    id: string;
    name: string;
    investment: number;
    earnings: number;
    nfts: number;
    date: Date;
  };
};

export const Referral = (props: ReferralProps) => {
  return (
    <MotionBox
      w="full"
      borderRadius="lg"
      shadow="lg"
      py="2"
      px="4"
      bgColor="background.primary"
    >
      <HStack justifyContent="space-between" w="full">
        <Text fontWeight="600">{props.referral.name}</Text>
        <Text fontSize="sm" color="text.secondary">
          {props.referral.date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      </HStack>

      <HStack justifyContent="space-between" mt="4">
        <VStack gap="0">
          <Text fontSize="12px" color="text.secondary">
            Investment
          </Text>

          <Flex align="center" gap="1">
            <Text fontSize="14px" fontWeight="600">
              {props.referral.investment}
            </Text>
            <TonIcon boxSize="12px" />
          </Flex>
        </VStack>

        <VStack gap="0">
          <Text fontSize="12px" color="text.secondary">
            Earnings
          </Text>

          <Flex align="center" gap="1">
            <Text fontSize="14px" fontWeight="600">
              {props.referral.earnings}
            </Text>
            <TonIcon boxSize="12px" />
          </Flex>
        </VStack>

        <VStack gap="0">
          <Text fontSize="12px" color="text.secondary">
            NFT's
          </Text>
          <Text fontSize="14px" fontWeight="600">
            {props.referral.nfts}
          </Text>
        </VStack>
      </HStack>
    </MotionBox>
  );
};
