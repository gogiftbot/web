"use client";

import { ColorPallette } from "@/lib/styles/ColorPallette";
import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Text,
  Toast,
  createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top-start",
  pauseOnPageIdle: true,
  max: 1,
});

const ToasterPallette: Record<
  string,
  (typeof ColorPallette)[keyof typeof ColorPallette]
> = {
  success: ColorPallette.green,
  error: ColorPallette.red,
  info: ColorPallette.blue,
};

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            mt="44px"
            borderRadius="lg"
            bgColor={ToasterPallette[toast.type || "info"].bg}
            color={ToasterPallette[toast.type || "info"].color}
          >
            <Stack gap="1" flex="1" maxWidth="100%" px="3" py="3">
              <Toast.Title>
                <Text fontSize="14px" fontWeight="600">
                  {toast.description}
                </Text>
              </Toast.Title>
            </Stack>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
