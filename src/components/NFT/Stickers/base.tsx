"use client";

import React from "react";
import dynamic from "next/dynamic";

export const Lottie = React.memo(
  dynamic(() => import("lottie-react"), { ssr: false })
);

export interface StickerProps {
  autoplay?: boolean;
  loop?: boolean;
  isDisabled?: boolean;
}
