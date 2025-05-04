"use client";

import { Box, Flex, Text, VStack, HStack, Separator } from "@chakra-ui/react";
import { motion } from "motion/react";
import { BalanceChart } from "@/components/BalanceChart";
import { TonIcon } from "@/components/TonIcon";

export const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        shadow="lg"
        backgroundColor="background.primary"
        borderRadius="21px"
        px="7"
        py="4"
      >
        <HStack justifyContent="space-between" mt="2">
          <VStack gap="0">
            <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
              3
            </Text>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Referrals
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Flex align="center" gap="2">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                48,000
              </Text>
              <TonIcon boxSize="18px" />
            </Flex>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Investment
            </Text>
          </VStack>

          <Separator opacity="0.15" orientation="vertical" height="8" />

          <VStack gap="0">
            <Flex align="center" gap="2">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                7,9000
              </Text>
              <TonIcon boxSize="18px" />
            </Flex>
            <Text fontSize="sm" color="text.secondary" mt="1">
              Earnings
            </Text>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  );
};
