import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({

  // ➕ CREATE PRODUCT
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        scientific: z.string().optional().default("-"),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().optional().default("product image"),
        description: z.string().min(1),
        featured: z.boolean().optional().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({
        data: input,
      });
    }),

  // 📦 GET ALL PRODUCTS
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  // ❌ DELETE PRODUCT
  delete: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete({
        where: { id: input.id },
      });
    }),

  // ✏️ UPDATE PRODUCT (SAFE VERSION)
  update: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        scientific: z.string().optional().default("-"),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().optional().default("product image"),
        description: z.string().min(1),
        featured: z.boolean().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      return ctx.db.product.update({
        where: { id },
        data,
      });
    }),
});