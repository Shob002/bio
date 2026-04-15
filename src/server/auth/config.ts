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

  interface User {
    role?: "USER" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "USER" | "ADMIN";
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
        if (credentials?.password === process.env.ADMIN_PASSWORD) {
          return {
            id: "admin",
            name: "Admin",
            email: "admin@bioorgo.com",
            role: "ADMIN",
          };
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role ?? "USER";
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? "";
        session.user.role = (token.role ?? "USER") as "USER" | "ADMIN";
      }
      return session;
    },
  },
} satisfies NextAuthConfig;