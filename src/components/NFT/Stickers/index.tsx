import { memo } from "react";
import { FlexProps } from "@chakra-ui/react";

import { Sticker12676 } from "./12676";
import { Sticker1519 } from "./1519";
import { Sticker2244 } from "./2244";
import { Sticker2488 } from "./2488";
import { Sticker2551 } from "./2551";
import { Sticker2798 } from "./2798";
import { Sticker4119 } from "./4119";
import { Sticker4633 } from "./4633";
import { Sticker494 } from "./494";
import { Sticker7718 } from "./7718";
import { StickerProps } from "./base";

export const Stickers: Record<
  string,
  (props: StickerProps & FlexProps) => React.ReactNode
> = Object.freeze({
  "12676": memo(Sticker12676),
  "1519": memo(Sticker1519),
  "2244": memo(Sticker2244),
  "2488": memo(Sticker2488),
  "2551": memo(Sticker2551),
  "2798": memo(Sticker2798),
  "4119": memo(Sticker4119),
  "4633": memo(Sticker4633),
  "494": memo(Sticker494),
  "7718": memo(Sticker7718),
});
