import { PrismaClient } from "@prisma/client";

export const prisma: PrismaClient =
  (global as any).prisma ||
  new PrismaClient({
    log: ["error"],
  });

export * from "@prisma/client";

if (process.env.NODE_ENV !== "production") {
  (global as any).prisma = prisma;
}
