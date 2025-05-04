import { Skeleton as Skl, SkeletonProps } from "@chakra-ui/react";

export const Skeleton = (props: SkeletonProps) => (
  <Skl
    variant="shine"
    css={{
      "--start-color": "#1a2a40",
      "--end-color": "#24384f",
    }}
    w="full"
    {...props}
  />
);
