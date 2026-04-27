import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().optional(),
        message: z.string().min(5),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.contactMessage.create({
        data: input,
      });
    }),

  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.db.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  delete: adminProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.contactMessage.delete({
        where: { id: input.id },
      });
    }),
});