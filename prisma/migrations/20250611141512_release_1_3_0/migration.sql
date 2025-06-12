-- CreateEnum
CREATE TYPE "transaction_currency" AS ENUM ('ton', 'star');

-- AlterTable
ALTER TABLE "gift_cases" ADD COLUMN     "star_price" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "currency" "transaction_currency" NOT NULL DEFAULT 'ton';
