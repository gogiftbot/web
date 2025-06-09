"use client";

import { TouchEvent, MouseEvent, useCallback, useState, useRef } from "react";
import { useHapticFeedback } from "@/lib/hooks/useHapticFeedback";

type Props<J> = {
  handleClick?: (options?: J) => void;
  isDisabled?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
};

export const useTouch = <T, J = void>(props: Props<J>) => {
  const hapticFeedback = useHapticFeedback();
  const positionRef = useRef({
    start: null as number | null,
    end: null as number | null,
  });

  const [options, setOptions] = useState<J>();
  const [isActive, setIsActive] = useState(false);
  const [interactionType, setInteractionType] = useState<
    "touch" | "mouse" | null
  >(null);

  // Общие функции для обновления позиций
  const updateEndPosition = (y: number) => {
    positionRef.current.end = y;
  };

  const resetPositions = () => {
    positionRef.current.start = null;
    positionRef.current.end = null;
  };

  // Обработчики для touch
  const onTouchStart = useCallback(
    (event: TouchEvent<T>, options?: J) => {
      if (props.isDisabled || interactionType) return;

      props.onStart?.();
      setOptions(options);
      setInteractionType("touch");
      setIsActive(true);

      const yPos = event.touches[0].clientY;
      positionRef.current.start = yPos;
      positionRef.current.end = null;
    },
    [props.isDisabled, interactionType, props.onStart]
  );

  const onTouchMove = useCallback(
    (event: TouchEvent<T>) => {
      if (interactionType !== "touch") return;
      updateEndPosition(event.touches[0].clientY);
    },
    [interactionType]
  );

  const onTouchEnd = useCallback(
    (event: TouchEvent<T>) => {
      if (interactionType !== "touch") return;

      event.preventDefault();
      setIsActive(false);
      props.onEnd?.();

      const { start, end } = positionRef.current;
      const isMoving =
        start !== null && end !== null && Math.abs(start - end) > 10;

      if (!isMoving && !props.isDisabled) {
        hapticFeedback.onClick();
        props.handleClick?.(options);
      }

      setInteractionType(null);
      resetPositions();
    },
    [interactionType, props, options, hapticFeedback]
  );

  // Обработчики для мыши
  const onMouseDown = useCallback(
    (event: MouseEvent<T>, options?: J) => {
      if (props.isDisabled || interactionType) return;

      props.onStart?.();
      setOptions(options);
      setInteractionType("mouse");
      setIsActive(true);

      const yPos = event.clientY;
      positionRef.current.start = yPos;
      positionRef.current.end = null;
    },
    [props.isDisabled, interactionType, props.onStart]
  );

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      if (interactionType !== "mouse") return;
      updateEndPosition(event.clientY);
    },
    [interactionType]
  );

  const onMouseUp = useCallback(
    (event: MouseEvent<T>) => {
      if (interactionType !== "mouse") return;

      event.preventDefault();
      setIsActive(false);
      props.onEnd?.();

      const { start, end } = positionRef.current;
      const isMoving =
        start !== null && end !== null && Math.abs(start - end) > 10;

      if (!isMoving && !props.isDisabled) {
        props.handleClick?.(options);
      }

      setInteractionType(null);
      resetPositions();
    },
    [interactionType, props, options]
  );

  const onMouseLeave = useCallback(() => {
    if (interactionType !== "mouse") return;

    setIsActive(false);
    props.onEnd?.();
    setInteractionType(null);
    resetPositions();
  }, [interactionType, props.onEnd]);

  return {
    isActive,
    // Touch handlers
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: onTouchEnd, // Используем тот же обработчик
    // Mouse handlers
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  };
};
