"use client";

import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (window.Telegram?.WebApp) {
      const platform = window.Telegram.WebApp.platform;
      setIsMobile(platform === "ios" || platform === "android");
    } else {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    }
  }, []);

  return { isMobile };
};

export default useDeviceDetect;
