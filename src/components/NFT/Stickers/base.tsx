"use client";

import dynamic from "next/dynamic";

export const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export interface StickerProps {
  autoplay?: boolean;
  loop?: boolean;
  isDisabled?: boolean;
}
