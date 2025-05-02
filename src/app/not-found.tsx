import { Box, Heading } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl">
        Not found
      </Heading>
    </Box>
  );
}
