"use client";

export const useTelegram = (): [string] => {
  if (process.env.NODE_ENV !== "production") {
    return [
      "query_id=AAF5UWAUAAAAAHlRYBRI8odE&user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&auth_date=1747319966&signature=-WYh77B3y3WPA1qA7Sc0nOIEqRV1zeRtiub08lyCBzLgGGmZPrk-Izkrvdz4653wRTW8E28DIjiA-URMHpeQAg&hash=c3510b4517db0c7da4c36487aa30470fbf7947ae1df0b6730d241d32e231772f",
    ];
  }

  return [window.Telegram?.WebApp?.initData as unknown as string];
};
