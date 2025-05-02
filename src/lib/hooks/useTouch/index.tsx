"use client";

import { TouchEvent, useCallback, useState } from "react";
import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";

type Props<J> = {
  handleClick?: (options?: J) => void;
  isDisabled?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
};

export const useTouch = <T, J = void>(props: Props<J>) => {
  const hapticFeedback = useHapticFeedback();

  const [options, setOptions] = useState<J>();
  const [isActive, setIsActive] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startTouchPosition, setStartTouchPosition] = useState<number | null>(
    null
  );
  const [endTouchPosition, setEndTouchPosition] = useState<number | null>(null);

  const onTouchMove = useCallback(
    (event: TouchEvent<T>) => {
      setEndTouchPosition(event.touches[0].clientY);
      if (Math.abs((startTouchPosition || 0) - (endTouchPosition || 0)) > 10) {
        setIsMoving(true);
      }
    },
    [startTouchPosition, endTouchPosition]
  );

  const onTouchStart = useCallback(
    (event: TouchEvent<T>, options: J) => {
      props.onStart?.();
      if (!props.isDisabled) {
        setOptions(options);
        setStartTouchPosition(event.touches[0].clientY);
        setIsActive(true);
      }
    },
    [props.onStart, props.isDisabled]
  );

  const onTouchEnd = useCallback(
    (event: TouchEvent<T>) => {
      event.preventDefault();
      setIsMoving(false);
      setIsActive(false);
      props.onEnd?.();

      if (!isMoving) {
        hapticFeedback.onClick();
        if (!props.isDisabled) props.handleClick?.(options);
      }
    },
    [isMoving, props.onEnd, props.handleClick, props.isDisabled, options]
  );

  return { isActive, onTouchMove, onTouchStart, onTouchEnd };
};
