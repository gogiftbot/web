"use client";

export const useTelegram = (): [string] => {
  if (process.env.NODE_ENV !== "production") {
    return [
      "user=%7B%22id%22%3A341856633%2C%22first_name%22%3A%22Denis%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mrMuraveiko%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F_DC_OVd9ETbkHlq5MPI3P80XJ1UipDWm2h9bMu-3TdU.svg%22%7D&chat_instance=-1048507513791783267&chat_type=private&auth_date=1746372188&signature=yd6_N3HHLMC5pdXJqEhx0k7P8CN5S-p2XQfXKEO0_MyVbB8GKFGDFo8vUhyrPTSwV33VSCp2z4Si8fx_sogzBg&hash=8d76fe34fd9d17a637ef3f2c1782cb6dcec189693bcb3e364760f854cd470c5e",
    ];
  }

  return [window.Telegram?.WebApp?.initData as unknown as string];
};
