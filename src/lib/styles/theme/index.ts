import { createSystem, defaultConfig } from "@chakra-ui/react";

import { fonts } from "./fonts";

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts,
      colors: {
        primary: { value: "#2AABEE" },
        secondary: { value: "#229ED9" },
        text: {
          secondary: { value: "#a0a7b5" },
        },
        background: {
          primary: { value: "#1e2735" },
          secondary: { value: "#0f1c2e" },
        },
      },
    },
  },
});

export default customTheme;
