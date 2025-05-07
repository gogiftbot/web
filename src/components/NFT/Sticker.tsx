"use client";

import dynamic from "next/dynamic";

import { Flex, FlexProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "../Skeleton";
import { useTouch } from "@/lib/hooks/useTouch";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface StickerProps {
  sku: string;
  autoplay?: boolean;
  loop?: boolean;
  isDisabled?: boolean;
}

export const Sticker = ({
  sku,
  loop = false,
  autoplay = false,
  isDisabled = true,
  ...flexProps
}: StickerProps & FlexProps) => {
  const [sticker, setSticker] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      const res = await fetch(`/nft/${sku}.json`);
      const data = await res.json();
      setSticker(data);
    };

    fetchAnimation();
  }, [sku]);

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
      {sticker ? (
        <Lottie
          onComplete={() => {
            setIsPlaying(false);
          }}
          lottieRef={lottieRef}
          animationData={sticker}
          loop={loop}
          autoplay={autoplay}
        />
      ) : (
        <Skeleton h="full" />
      )}
    </Flex>
  );
};
