"use client";

import { Flex, Icon, Box, IconProps, Text } from "@chakra-ui/react";
import {
  LuShoppingBag,
  LuWallet,
  LuBookCheck,
  LuUsers,
  LuGift,
  LuUser,
} from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { JSX } from "react";
import { useTouch } from "@/lib/hooks/useTouch";

const NavbarTab = ({
  path,
  TabIcon,
  title,
}: {
  path: string;
  TabIcon: (props: IconProps) => JSX.Element;
  title: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.includes(path);
  const isDisabled = pathname.endsWith(path);

  const { isActive: touchIsActive, ...touch } = useTouch({
    handleClick: () => {
      router.push(path);
    },
    isDisabled: isDisabled || isActive,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      opacity={isActive || touchIsActive ? 1 : 0.4}
      {...touch}
    >
      <TabIcon size="md" />
      <Text fontSize="9px" mt="1">
        {title}
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
          {/* <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuShoppingBag />
              </Icon>
            )}
            title="Market"
            path="/market"
          /> */}

          <NavbarTab
            TabIcon={() => (
              <Icon size="md">
                <LuBookCheck />
              </Icon>
            )}
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
