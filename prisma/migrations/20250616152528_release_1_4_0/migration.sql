/*
  Warnings:

  - A unique constraint covering the columns `[account_giftId,type]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "transactions_account_giftId_key";

-- CreateIndex
CREATE UNIQUE INDEX "transactions_account_giftId_type_key" ON "transactions"("account_giftId", "type");
