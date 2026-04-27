import { createTRPCRouter } from "~/server/api/trpc";

import { productRouter } from "~/server/api/routers/product";
import { contactRouter } from "~/server/api/routers/contact";

export const appRouter = createTRPCRouter({
  product: productRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;