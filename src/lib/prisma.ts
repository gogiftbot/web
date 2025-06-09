import { PrismaClient } from "@/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";

const prismaClientSingleton = () => {
  return new PrismaClient();
  // .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY! }))
  // .$extends(withAccelerate())
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export type PrismaTransaction = Parameters<
  Parameters<ReturnType<typeof prismaClientSingleton>["$transaction"]>[0]
>[0];
