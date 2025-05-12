"use client";
import { useCallback, useEffect, useState } from "react";

export const useHapticFeedback = () => {
  const [isActive, setIsActive] = useState(false);

  const onClick = useCallback(() => {
    if (typeof window === "undefined") return;
    window.Telegram?.WebApp?.HapticFeedback?.selectionChanged?.();
  }, []);

  const onSuccess = useCallback(() => {
    if (typeof window === "undefined") return;
    window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.("success");
  }, []);

  const onError = useCallback(() => {
    if (typeof window === "undefined") return;
    window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.("error");
  }, []);

  const onImpact = useCallback((style: string) => {
    if (typeof window === "undefined") return;
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.(style);
  }, []);

  const onStart = useCallback(() => {
    onImpact("heavy");
    setIsActive(true);
  }, []);

  const onEnd = useCallback(() => {
    onImpact("rigid");
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive) {
      const vibrationInterval = setInterval(() => {
        onImpact("medium");
      }, 300);

      return () => {
        clearInterval(vibrationInterval);
      };
    }
  }, [isActive]);

  return { onClick, onSuccess, onError, onImpact, onStart, onEnd };
};
