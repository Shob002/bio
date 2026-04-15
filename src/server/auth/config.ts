import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("LOGIN:", credentials);

        const password = credentials?.password;

        if (password === "admin123") {
          return {
            id: "1",
            name: "Admin",
            role: "ADMIN",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        session.user.name = token.name as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/admin/login", // 🔥 important fix for redirect loop issues
  },

  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;