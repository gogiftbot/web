"use client";
import { useCallback } from "react";

export const useHapticFeedback = () => {
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

  return { onClick, onSuccess, onError };
};
