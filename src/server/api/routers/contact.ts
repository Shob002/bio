import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  // ➕ Create Contact
  create: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(2, "Name must be at least 2 characters"),

        email: z
          .string()
          .email("Invalid email address"),

        message: z
          .string()
          .min(5, "Message must be at least 5 characters"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const contact = await ctx.db.contact.create({
          data: {
            name: input.name,
            email: input.email,
            message: input.message,
          },
        });

        return {
          success: true,
          data: contact,
        };
      } catch (error) {
        throw new Error("Failed to save contact");
      }
    }),

  // 📄 Get All Contacts (for admin later)
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  // ❌ Delete Contact (admin use)
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.contact.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),
});