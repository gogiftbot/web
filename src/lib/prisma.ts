import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";

const prisma = new PrismaClient()
  .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY! }))
  .$extends(withAccelerate());

export default prisma;
