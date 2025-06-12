import { useCallback } from "react";

export const usePaymentLink = () => {
  const create = useCallback(async (caseId: string) => {
    const res = await fetch(`/api/payment/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ caseId }),
    });

    if (res.ok) {
      const data = (await res.json()) as {
        link?: string;
        transactionId?: string;
      };
      if (data.link && data.transactionId)
        return { link: data.link!, transactionId: data.transactionId! };
    }

    throw new Error("InvalidResponse");
  }, []);

  const open = useCallback(async (link: string) => {
    return new Promise((resolve, reject) =>
      window.Telegram?.WebApp?.openInvoice?.(link, async (status) => {
        resolve(status);
      })
    );
  }, []);

  return { create, open };
};
