import { useTouch } from "@/lib/hooks/useTouch";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";

const MotionFlex = motion(Flex);

export const ExternalLink = (props: {
  title: string;
  description: string;
  link: string;
}) => {
  const router = useRouter();

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      router.push(props.link);
    },
  });

  return (
    <MotionFlex
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isActive ? 0.98 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      w="full"
      borderRadius="lg"
      shadow="lg"
      py="2"
      pl="3"
      pr="6"
      bgColor="background.primary"
      justifyContent="space-between"
      alignItems="center"
      userSelect="none"
      {...touch}
    >
      <Box>
        <Text color="text.secondary" fontSize="12px">
          {props.title}
        </Text>
        <Text fontSize="15px" fontWeight="600">
          {props.description}
        </Text>
      </Box>

      <Icon color="text.secondary" boxSize="21px">
        <LuExternalLink />
      </Icon>
    </MotionFlex>
  );
};
