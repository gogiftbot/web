"use client";

import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

export const useCountdown = (endDate: Date) => {
  const [time, setTime] = useState(endDate.getTime() - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const countdown = getTimeRemaining(new Date(time));

  return (
    <Flex
      align="center"
      fontSize="12px"
      color="text.secondary"
      fontWeight="600"
    >
      <Icon boxSize="12px">
        <FaRegClock />
      </Icon>
      <HStack ml="2" gap="0">
        <Text as="span">{countdown.hours}:</Text>
        <Text as="span">{countdown.minutes}:</Text>
        <Text as="span">{countdown.seconds}</Text>
      </HStack>
    </Flex>
  );
};

function getTimeRemaining(endDate: Date) {
  const seconds = Math.floor((endDate.getTime() / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((endDate.getTime() / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((endDate.getTime() / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const days = Math.floor(endDate.getTime() / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}
