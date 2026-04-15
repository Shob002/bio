import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";

import { db } from "~/server/db";

/**
 * Extend NextAuth Session type
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: "USER" | "ADMIN";
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  providers: [
    DiscordProvider,

    // 🔐 ADMIN LOGIN
    Credentials({
      name: "Admin Login",
      credentials: {
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (credentials?.password === "admin123") {
          return {
            id: "admin",
            name: "Admin",
            email: "admin@bioorgo.com",
            role: "ADMIN",
          } as any;
        }

        return null;
      },
    }),
  ],

  adapter: PrismaAdapter(db),

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // ✅ attach role + id to session
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role ?? "USER";
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "USER" | "ADMIN";
      }
      return session;
    },
  },
} satisfies NextAuthConfig;