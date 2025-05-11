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
      ready?: () => void;
      initData?: TelegramPayload;
      initDataUnsafe?: TelegramPayload;
      disableVerticalSwipes?: () => void;
      setHeaderColor?: (color: string) => void;
      setBackgroundColor?: (color: string) => void;
      enableClosingConfirmation?: () => void;
      lockOrientation?: () => void;
      requestFullscreen?: () => void;
      addToHomeScreen?: () => void;
      HapticFeedback?: {
        notificationOccurred?: (value: "error" | "success" | "warning") => void;
        selectionChanged?: () => void;
      };
      BackButton?: {
        onClick?: (callback: () => void) => void;
        show?: () => void;
        hide?: () => void;
      };
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
  // cache: import("modules/cache.module").CacheI;
  // logger: import("modules/logger.module").LoggerI;
  // pubsub: import("modules/pubsub.module").PubSubI;
}
