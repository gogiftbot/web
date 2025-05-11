import prisma from "@/lib/prisma";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "telegram",
      credentials: {
        accountId: { type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.accountId) return null;

        const account = await prisma.account.findUnique({
          where: { id: credentials.accountId },
        });

        if (!account) return null;

        return {
          id: account.id,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      try {
        await prisma.account.findUniqueOrThrow({
          where: {
            id: token.sub,
          },
        });
        session.user.id = <string>token.sub;
        console.log("SESSION", session.user);
        return session;
      } catch (error) {
        return null;
      }
    },
    jwt({ token, account, user }) {
      // return token;
      return { ...token, user };
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
