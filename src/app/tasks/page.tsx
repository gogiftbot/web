"use client";

import { TransitionLink } from "@/components/PageTransition";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Dashboard } from "./components/Dashboard";
import { Task, TaskProps, Wrapper } from "./components/Task";

const tasks: TaskProps[] = [
  {
    isDone: true,
    isLocked: true,
    title: "Subscribe to YouTube channel",
    description: "1",
  },
  {
    isDone: false,
    isLocked: true,
    title: "Follow on Twitter",
    description: "1",
  },
  {
    isDone: false,
    isLocked: false,
    title: "Daily Check-in",
    description: "1",
  },
  {
    isDone: false,
    isLocked: false,
    title: "Complete Profile",
    description: "0.5",
  },
];

export default function Root() {
  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="90px">
        <Box mt="6">
          <Heading size="2xl">Tasks</Heading>
          <Text color="text.secondary">Complete tasks to earn rewards</Text>
        </Box>

        <Dashboard />

        <Heading>Your Tasks list</Heading>

        <VStack gap="2" mt="2">
          {tasks.map((task: any) => (
            <Task key={task.id} task={task} />
          ))}
        </VStack>
      </VStack>
    </TransitionLink>
  );
}
