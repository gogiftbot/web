"use client";

import { Center, Flex, FlexProps, Spinner } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import { useTouch } from "@/lib/hooks/useTouch";
import { Lottie, StickerProps } from "../base";
import json from "../jsons/cases/easter-egg.json";

export const StickerEasterEgg = ({
  loop = false,
  autoplay = false,
  isDisabled = true,
  ...flexProps
}: StickerProps & FlexProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const lottieRef = useRef<any>(null);

  const handleClick = useCallback(() => {
    if (!lottieRef.current || isPlaying) return;

    lottieRef.current.goToAndPlay(0, true);
    setIsPlaying(true);
  }, [lottieRef.current, isPlaying]);

  const onDomLoaded = useCallback(() => setIsLoaded(true), []);
  const onComplete = useCallback(() => setIsPlaying(false), []);

  const { isActive, ...touch } = useTouch({
    handleClick,
    isDisabled,
  });

  return (
    <Flex
      {...flexProps}
      {...touch}
      h="full"
      w="full"
      justifyContent="center"
      align="center"
      position="relative"
    >
      {!isLoaded && (
        <Center position="absolute">
          <Spinner />
        </Center>
      )}

      <Lottie
        onDOMLoaded={onDomLoaded}
        onComplete={onComplete}
        lottieRef={lottieRef}
        animationData={json}
        loop={loop}
        autoplay={autoplay}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </Flex>
  );
};
