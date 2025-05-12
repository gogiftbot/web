import { VStack } from "@chakra-ui/react";
import { TransitionLink } from "../PageTransition";

export const PageWrapper = (props: { children: React.ReactNode }) => {
  return (
    <TransitionLink>
      <VStack align="stretch" px={6} pb="96px">
        {props.children}
      </VStack>
    </TransitionLink>
  );
};
