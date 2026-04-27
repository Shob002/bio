import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const createTRPCContext = async () => {
  const session = await auth();

  return {
    db,
    session,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

/* 🔐 PROTECTED */
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx });
});

/* 🔥 ADMIN ONLY */
export const adminProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  if ((ctx.session.user as any).role !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN" });
  }

  return next({ ctx });
});