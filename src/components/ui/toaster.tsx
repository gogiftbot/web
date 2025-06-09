"use client";

import useDeviceDetect from "@/lib/hooks/useDeviceDetect";
import { ColorPallette } from "@/lib/styles/ColorPallette";
import {
  Toaster as ChakraToaster,
  Portal,
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
  const { isMobile } = useDeviceDetect();
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            mt={isMobile ? "90px" : "6"}
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
