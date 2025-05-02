import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useTouch } from "@/lib/hooks/useTouch";

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
  isDisabled = false,
}: StickerProps) => {
  const lottieRef = useRef<any>(null);
  const [sticker, setSticker] = useState<any>(null);

  const { isActive, ...touch } = useTouch({
    handleClick: () => {
      lottieRef.current?.stop();
      lottieRef.current?.play();
    },
    isDisabled,
  });

  useEffect(() => {
    const fetchAnimation = async () => {
      const res = await fetch(`/nft/${sku}.json`);
      const data = await res.json();
      setSticker(data);
    };

    fetchAnimation();
  }, [sku]);

  return (
    <Flex {...touch} h="187px" w="187px" justifyContent="center" align="center">
      {sticker ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={sticker}
          loop={loop}
          autoplay={autoplay}
        />
      ) : (
        <Spinner color="primary" size="lg" />
      )}
    </Flex>
  );
};
