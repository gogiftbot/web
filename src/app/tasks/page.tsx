"use client";

import { TransitionLink } from "@/components/PageTransition";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Task, TaskProps, Wrapper } from "./components/Task";
import { PageWrapper } from "@/components/PageWrapper";

export default function Root() {
  return (
    <PageWrapper>
      <Box>
        <Heading size="2xl">Tasks</Heading>
        <Text color="text.secondary">Complete tasks to earn rewards</Text>
      </Box>
    </PageWrapper>
  );
}
