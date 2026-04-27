import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  create: adminProcedure
    .input(
      z.object({
        title: z.string().min(1),
        scientific: z.string().optional().default("-"),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().optional().default("product image"),
        description: z.string().min(1),
        featured: z.boolean().optional().default(false),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.product.create({
        data: input,
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.product.delete({
        where: { id: input.id },
      });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        scientific: z.string().optional().default("-"),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().optional().default("product image"),
        description: z.string().min(1),
        featured: z.boolean().optional().default(false),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { id, ...data } = input;

      return ctx.db.product.update({
        where: { id },
        data,
      });
    }),
});