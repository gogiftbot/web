import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useTouch } from "@/lib/hooks/useTouch";

interface StickerProps {
  sku: string;
}

export const Sticker = ({ sku }: StickerProps) => {
  const lottieRef = useRef<any>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      lottieRef.current?.play();
    },
  });

  useEffect(() => {
    const fetchAnimation = async () => {
      const res = await fetch(`/nft/${sku}.json`);
      const data = await res.json();
      setAnimationData(data);
    };

    fetchAnimation();
  }, [sku]);

  return (
    // w="200px" h="200px"
    <Box {...touch}>
      {animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
        />
      ) : (
        <Spinner />
      )}
    </Box>
  );
};
