import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

/**
 * CONTEXT
 * Runs on every API request
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await auth();

  return {
    db,
    session,
    headers: opts.headers,
  };
};

/**
 * INIT tRPC
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,

  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

/**
 * ROUTER
 */
export const createTRPCRouter = t.router;

/**
 * SERVER CALLER
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * MIDDLEWARE (DEV SAFE)
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  // safe dev delay (only if NODE_ENV)
  if (process.env.NODE_ENV === "development") {
    const waitMs = Math.floor(Math.random() * 200);
    await new Promise((r) => setTimeout(r, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[tRPC] ${path} took ${end - start}ms`);

  return result;
});

/**
 * PUBLIC PROCEDURE
 */
export const publicProcedure = t.procedure.use(timingMiddleware);

/**
 * PROTECTED PROCEDURE (LOGIN REQUIRED)
 */
export const protectedProcedure = t.procedure
  .use(timingMiddleware)
  .use(({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in",
      });
    }

    return next({
      ctx: {
        session: ctx.session,
        db: ctx.db,
      },
    });
  });