import {
  Skeleton as Skl,
  SkeletonText as SklText,
  SkeletonProps,
  SkeletonTextProps,
} from "@chakra-ui/react";

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

export const SkeletonText = (props: SkeletonTextProps) => (
  <SklText
    variant="shine"
    css={{
      "--start-color": "#1a2a40",
      "--end-color": "#24384f",
    }}
    w="full"
    noOfLines={3}
    {...props}
  />
);
