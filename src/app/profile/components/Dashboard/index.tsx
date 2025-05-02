"use client";

import { Box, Flex, Text, VStack, HStack, Separator } from "@chakra-ui/react";
import { motion } from "motion/react";
import { BalanceChart } from "@/components/BalanceChart";

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
        my="10"
      >
        <HStack justifyContent="space-between" mt="2">
          <VStack gap="0" align="start">
            <Text fontSize="sm" color="text.secondary" lineHeight="0.5">
              Total balance
            </Text>
            <Flex align="center" gap="2">
              <Text fontSize="4xl" fontWeight="600">
                28,889
              </Text>
              <Box
                boxSize="30px"
                backgroundImage="url('/ton_symbol.svg')"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
              />
            </Flex>
          </VStack>
          <Box width="full" pl="6">
            <BalanceChart height="12" width="full" />
          </Box>
        </HStack>

        <Separator opacity="0.15" my="2" variant="dashed" />

        <HStack justifyContent="space-between" mt="4">
          <VStack gap="0">
            <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
              5
            </Text>
            <Text fontSize="sm" color="text.secondary">
              Stickers
            </Text>
          </VStack>

          <VStack gap="0">
            <Flex align="center" gap="2">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                363
              </Text>
              <Box
                boxSize="18px"
                backgroundImage="url('/ton_symbol.svg')"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
              />
            </Flex>

            <Text fontSize="sm" color="text.secondary">
              Daily income
            </Text>
          </VStack>

          <VStack gap="0">
            <Flex align="center" gap="2">
              <Text fontSize="xl" fontWeight="600" lineHeight="1.1">
                10,890
              </Text>
              <Box
                boxSize="18px"
                backgroundImage="url('/ton_symbol.svg')"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
              />
            </Flex>

            <Text fontSize="sm" color="text.secondary">
              Monthly est.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  );
};
