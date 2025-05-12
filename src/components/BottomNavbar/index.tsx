"use client";

import { Flex, Icon, Box, IconProps, Text } from "@chakra-ui/react";
import {
  LuShoppingBag,
  LuWallet,
  LuBookCheck,
  LuUsers,
  LuGift,
  LuUser,
  LuLock,
} from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX } from "react";
import { useTouch } from "@/lib/hooks/useTouch";

const DisabledIcon = React.memo(() => (
  <Icon size="md">
    <LuLock />
  </Icon>
));

const NavbarTab = (props: {
  path: string;
  title: string;
  isDisabled?: boolean;
  TabIcon: (props: IconProps) => JSX.Element;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.includes(props.path);
  const isDisabled = pathname.endsWith(props.path);

  const { isActive: touchIsActive, ...touch } = useTouch({
    handleClick: () => {
      router.push(props.path);
    },
    isDisabled: props.isDisabled || isDisabled || isActive,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      opacity={isActive || touchIsActive ? 1 : 0.4}
      {...touch}
    >
      {props.isDisabled ? <DisabledIcon /> : <props.TabIcon />}
      <Text fontSize="9px" mt="1">
        {props.title}
      </Text>
    </Box>
  );
};

export const BottomNavBar = () => {
  const pathname = usePathname();

  return (
    <Box
      w="full"
      bottom="6"
      zIndex={999}
      position="fixed"
      borderTopRadius="xl"
      px="6"
      maxW="600px"
    >
      {pathname !== "/not-found" ? (
        <Flex
          as="nav"
          justifyContent="space-around"
          bg="background.primary"
          alignItems="center"
          py="3"
          borderRadius="2xl"
          shadow="lg"
        >
          <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuGift />
              </Icon>
            )}
            title="Gifts"
            path="/gifts"
          />

          <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuBookCheck />
              </Icon>
            )}
            isDisabled
            title="Tasks"
            path="/tasks"
          />
          <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuUsers />
              </Icon>
            )}
            title="Friends"
            path="/affiliate"
          />
          <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuUser />
              </Icon>
            )}
            title="Profile"
            path="/profile"
          />
        </Flex>
      ) : null}
    </Box>
  );
};
