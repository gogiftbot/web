-- CreateEnum
CREATE TYPE "bonus_type" AS ENUM ('deposit');

-- CreateTable
CREATE TABLE "promo_codes" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "uses" INTEGER NOT NULL,
    "bonus_value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promo_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bonuses" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "type" "bonus_type" NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "promo_code_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "transaction_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bonuses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promo_codes_value_key" ON "promo_codes"("value");

-- CreateIndex
CREATE UNIQUE INDEX "bonuses_transaction_id_key" ON "bonuses"("transaction_id");

-- AddForeignKey
ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_promo_code_id_fkey" FOREIGN KEY ("promo_code_id") REFERENCES "promo_codes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
