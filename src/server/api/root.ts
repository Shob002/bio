import { postRouter } from "~/server/api/routers/post";
import { productRouter } from "~/server/api/routers/product";
import { contactRouter } from "~/server/api/routers/contact"; // ✅ ADD THIS

import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  product: productRouter,
  contact: contactRouter, // ✅ ADD THIS
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);