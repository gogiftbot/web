import { useTouch } from "@/lib/hooks/useTouch";
import {
  Box,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Collapsible,
  useDisclosure,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { LuArrowUpAZ, LuArrowDownAZ, LuCheck, LuLock } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";

const MotionBox = motion(Box);

const WrapperSkeleton = () => (
  <Stack>
    <Skeleton h="15px" w="80%" borderRadius="md" shadow="lg" />
    <Skeleton h="15px" w="60%" borderRadius="md" shadow="lg" />
  </Stack>
);

export const Wrapper = (props: {
  title?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  defaultIsOpen?: boolean;
  startingHeight?: number;
}) => {
  const { open, onToggle } = useDisclosure({
    defaultOpen: props.defaultIsOpen,
  });

  const { isActive, onTouchEnd, onTouchMove, onTouchStart } = useTouch({
    handleClick: onToggle,
  });

  return (
    <Box>
      <Collapsible.Root>
        <Collapsible.Trigger py="3">
          <Flex align="center">
            <Box px="5px" opacity={isActive ? 0.7 : 1}>
              {open ? (
                <Icon size="md">
                  <LuArrowUpAZ />
                </Icon>
              ) : (
                <Icon size="md">
                  <LuArrowDownAZ />
                </Icon>
              )}
            </Box>

            <Heading>{props.title}</Heading>
          </Flex>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <Box padding="4">{props.children}</Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
    // <Box>
    //   <Box
    //     onTouchEnd={onTouchEnd}
    //     onTouchMove={onTouchMove}
    //     onTouchStart={onTouchStart}
    //   >
    //     {props.isLoading ? (
    //       <Skeleton h="30px" w="40%" borderRadius="md" shadow="lg" />
    //     ) : (
    //   <Box display="flex" alignItems="center">
    //     <Box px="5px" opacity={isActive ? 0.4 : 1}>
    //       {open ? (
    //         <Icon size="md">
    //           <LuArrowUpAZ />
    //         </Icon>
    //       ) : (
    //         <Icon size="md">
    //           <LuArrowDownAZ />
    //         </Icon>
    //       )}
    //     </Box>
    //     <Heading>{props.title}</Heading>
    //   </Box>
    //     )}
    //   </Box>
    //   <Box>
    //     {props.isLoading ? (
    //       <Stack gap={5} mt="20px">
    //         <WrapperSkeleton />
    //         <WrapperSkeleton />
    //         <WrapperSkeleton />
    //       </Stack>
    //     ) : (
    //       <Collapsible
    //         in={open}
    //         animateOpacity
    //         startingHeight={props.startingHeight}
    //       >
    //         <Box mt="20px">{props.children}</Box>
    //       </Collapsible>
    //     )}
    //   </Box>
    // </Box>
  );
};

export type TaskProps = {
  title: string;
  isLocked: boolean;
  isDone: boolean;
  description?: string;
};

export const Task = (props: { task: TaskProps }) => {
  //   const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { isActive, ...rest } = useTouch({
    handleClick: async () => {
      //   if (props.task.metadata?.link) router.push(props.task.metadata?.link);
      //   if (props.task.metadata?.externalLink) {
      //     try {
      //       setIsLoading(true);
      //       const response = await ApiService.request<{
      //         responseObject: { redirect?: string; action?: string };
      //       }>("GET", props.task.metadata?.externalLink);
      //       if (response.status === 200) {
      //         if (response.data.responseObject.redirect) {
      //           router.push(response.data.responseObject.redirect);
      //         }
      //         if (response.data.responseObject.action === "addToHomeScreen") {
      //           window.Telegram?.WebApp?.addToHomeScreen?.();
      //         }
      //       }
      //     } finally {
      //       setIsLoading(false);
      //     }
      //   }
    },
    isDisabled: props.task.isDone || props.task.isLocked,
    //   || (!props.task.metadata?.link && !props.task.metadata?.externalLink),
  });

  return (
    <MotionBox
      {...rest}
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
      py="10px"
      px="20px"
      bgColor={`background.primary/${isActive ? 70 : 100}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      opacity={props.task.isDone || props.task.isLocked ? 0.4 : 1}
    >
      <Heading size="md">{props.task.title}</Heading>

      {isLoading ? (
        <Spinner />
      ) : props.task.isDone ? (
        <Icon size="md">
          <LuCheck />
        </Icon>
      ) : props.task.isLocked ? (
        <Icon size="md">
          <LuLock />
        </Icon>
      ) : (
        <Flex align="center" gap="2">
          <Text fontWeight="600">{props.task.description}</Text>
          <Box
            boxSize="18px"
            backgroundImage="url('/ton_symbol.svg')"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
          />
        </Flex>
      )}
    </MotionBox>
  );
};
