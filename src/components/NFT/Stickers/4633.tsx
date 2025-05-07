"use client";

import { Flex, FlexProps } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTouch } from "@/lib/hooks/useTouch";
import { Lottie, StickerProps } from "./base";
import json from "../jsons/4633.json";

export const Sticker4633 = ({
  loop = false,
  autoplay = false,
  isDisabled = true,
  ...flexProps
}: StickerProps & FlexProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const lottieRef = useRef<any>(null);

  const handleClick = () => {
    if (!lottieRef.current || isPlaying) return;

    lottieRef.current.goToAndPlay(0, true);
    setIsPlaying(true);
  };

  const { isActive, ...touch } = useTouch({
    handleClick,
    isDisabled,
  });

  return (
    <Flex {...flexProps} {...touch} justifyContent="center" align="center">
      <Lottie
        onComplete={() => {
          setIsPlaying(false);
        }}
        lottieRef={lottieRef}
        animationData={json}
        loop={loop}
        autoplay={autoplay}
      />
    </Flex>
  );
};
