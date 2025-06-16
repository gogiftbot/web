export const numberToString = (value: number, digits = 2) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

export const findMinAboveN = <T extends { price: number }>(
  arr: T[],
  N: number
): T => {
  const sorted = [...arr].sort((a, b) => b.price - a.price);
  const last = sorted.findLast((obj) => obj.price > N);
  if (!last) throw new Error("ElementNotFound");
  return last;
};
