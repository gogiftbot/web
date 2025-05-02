import { PrismaClient } from "@prisma/client";

const initContext = async (): Promise<Context> => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const context: Context = Object.freeze({
    prisma,
  });

  return context;
};

export { initContext };
