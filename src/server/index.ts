import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
	userList: publicProcedure.query(async () => {
		// Retrieve users from a datasource, this is an imaginary database
		return [
			{
				id: 1,
				name: "John Doe",
			},
			{
				id: 2,
				name: "Jane Doe",
			},
		];
	}),
	userCreate: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async (opts) => {
			const { input } = opts;

			return {
				id: 3,
				name: input.name,
			};
		}),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
