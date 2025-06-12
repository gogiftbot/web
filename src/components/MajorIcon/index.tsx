import { Box, BoxProps } from "@chakra-ui/react";

export const MajorIcon = (props: BoxProps) => (
  <Box
    {...props}
    backgroundImage="url('/major.png')"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
  />
);
