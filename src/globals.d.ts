interface TelegramPayload {
  user: string;
  chat_instance: string;
  chat_type: string;
  auth_date: string;
  hash: string;
  start_param?: string;
}

declare interface Window {
  Telegram?: {
    WebApp?: {
      platform?: string;
      ready?: () => void;
      initData?: TelegramPayload;
      initDataUnsafe?: TelegramPayload;
      disableVerticalSwipes?: () => void;
      setHeaderColor?: (color: string) => void;
      setBackgroundColor?: (color: string) => void;
      enableClosingConfirmation?: () => void;
      lockOrientation?: () => void;
      requestWriteAccess?: () => void;
      requestFullscreen?: (foo?: (isAccessGranted: boolean) => void) => void;
      addToHomeScreen?: () => void;
      isFullscreen?: boolean;
      HapticFeedback?: {
        notificationOccurred?: (value: "error" | "success" | "warning") => void;
        selectionChanged?: () => void;
        impactOccurred?: (style: string) => void;
      };
      BackButton?: {
        isVisible?: boolean;
        onClick?: (callback: () => void) => void;
        offClick?: (callback: () => void) => void;
        show?: () => void;
        hide?: () => void;
      };
      openInvoice?: (
        url: string,
        callbacK: (event: "paid" | "cancelled" | "failed" | "pending") => void
      ) => void;
      showPopup?: (a: any) => void;
    };
    Utils?: {
      urlParseQueryString?: (
        data?: Partial<TelegramPayload>
      ) => TelegramPayload;
    };
  };
}

declare type AsyncFunc<T = void, J = void> = (payload: T) => J | Promise<J>;

declare interface Context {
  prisma: import("@/generated/prisma").PrismaClient;
}
