import { Box, BoxProps } from "@chakra-ui/react";

export const TonIcon = (props: BoxProps) => (
  <Box
    {...props}
    backgroundImage="url('/ton_symbol.svg')"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
  />
);
