import NextAuth from "next-auth";
import { cache } from "react";
import { authConfig } from "./config";

// ✅ create NextAuth instance
const nextAuth = NextAuth(authConfig);

// ✅ export handlers for API route
export const handlers = nextAuth.handlers;

// ✅ export signIn / signOut for client usage
export const signIn = nextAuth.signIn;
export const signOut = nextAuth.signOut;

// ✅ cached auth (important for App Router performance)
export const auth = cache(nextAuth.auth);