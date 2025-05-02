import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
});

export const fonts = {
  heading: { value: roboto.style.fontFamily },
  body: { value: roboto.style.fontFamily },
};
