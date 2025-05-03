"use client";

import dynamic from "next/dynamic";

import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
}: StickerProps) => {
  const [sticker, setSticker] = useState<any>(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      const res = await fetch(`/nft/${sku}.json`);
      const data = await res.json();
      setSticker(data);
    };

    fetchAnimation();
  }, [sku]);

  return (
    <Flex h="187px" w="187px" justifyContent="center" align="center">
      {sticker ? (
        <Lottie animationData={sticker} loop={loop} autoplay={autoplay} />
      ) : (
        <Spinner color="primary" size="lg" />
      )}
    </Flex>
  );
};
