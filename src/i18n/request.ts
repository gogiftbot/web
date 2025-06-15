import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { getRequestConfig } from "next-intl/server";

const allowedLanguages = ["en", "ru"];

export default getRequestConfig(async () => {
  const session = await getServerSession(authOptions);

  const defaultLocale = "en";

  if (!session?.user) {
    return {
      locale: defaultLocale,
      messages: (await import(`../../messages/${defaultLocale}.json`)).default,
    };
  }

  const account = await prisma.account.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      language: true,
    },
  });
  const language = account?.language?.toLocaleLowerCase();

  const locale =
    language && allowedLanguages.includes(language) ? language : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
