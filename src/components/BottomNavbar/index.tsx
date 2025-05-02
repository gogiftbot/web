"use client";

// import { AuthenticationContext } from "@/services/Authentication.service";
import { Flex, Icon, Box, IconProps, Text } from "@chakra-ui/react";
import { LuShoppingBag, LuWallet, LuBookCheck, LuUsers } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useContext } from "react";
import { useTouch } from "@/lib/hooks/useTouch";
// import { useTouch } from "../useTouch";

const NavbarTab = ({
  path,
  TabIcon,
  title,
}: {
  path: string;
  TabIcon: (props: IconProps) => JSX.Element;
  title: string;
}) => {
  // const { isAuthenticated } = useContext(AuthenticationContext);

  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.includes(path);
  const isDisabled = pathname.endsWith(path);

  const { isActive: touchIsActive, ...touch } = useTouch({
    handleClick: () => {
      router.push(path);
    },
    isDisabled: isDisabled || isActive,
    // isDisabled: isDisabled || (isPrivate && !isAuthenticated) || isActive,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      opacity={isActive || touchIsActive ? 1 : 0.4}
      {...touch}
    >
      {/* <Icon as={icon} boxSize="20px" /> */}
      {/* <Icon boxSize="12px"> */}
      <TabIcon size="md" />
      {/* </Icon> */}
      <Text fontSize="9px" mt="1">
        {title}
      </Text>
    </Box>
  );
};

export const BottomNavBar = () => {
  return (
    <Box
      w="full"
      bottom="4"
      zIndex={999}
      position="fixed"
      borderTopRadius="xl"
      px="6"
    >
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
              <LuWallet />
            </Icon>
          )}
          title="Profile"
          path="/profile"
        />
        <NavbarTab
          TabIcon={() => (
            <Icon size="md">
              <LuShoppingBag />
            </Icon>
          )}
          title="Market"
          path="/market"
        />

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
      </Flex>
    </Box>
  );
};
