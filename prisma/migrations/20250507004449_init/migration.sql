-- CreateEnum
CREATE TYPE "Language" AS ENUM ('RU', 'EN');

-- CreateTable
CREATE TABLE "referrals" (
    "id" TEXT NOT NULL,
    "value" VARCHAR(10) NOT NULL,
    "account_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "username" TEXT NOT NULL,
    "language" "Language" NOT NULL DEFAULT 'EN',
    "telegram_id" VARCHAR(255),
    "referred_by_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nfts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "odds" DOUBLE PRECISION NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "caseId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nfts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nft_descriptions" (
    "id" TEXT NOT NULL,
    "roi" DOUBLE PRECISION NOT NULL,
    "iterations" INTEGER NOT NULL,
    "is_sold_out" BOOLEAN NOT NULL DEFAULT false,
    "is_new" BOOLEAN NOT NULL DEFAULT false,
    "is_hot" BOOLEAN NOT NULL DEFAULT false,
    "nft_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nft_descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_gifts" (
    "account_id" TEXT NOT NULL,
    "nft_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_gifts_pkey" PRIMARY KEY ("account_id","nft_id")
);

-- CreateTable
CREATE TABLE "account_nfts" (
    "account_id" TEXT NOT NULL,
    "nft_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_nfts_pkey" PRIMARY KEY ("account_id","nft_id")
);

-- CreateTable
CREATE TABLE "gift_cases" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gift_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gift_case_openings" (
    "id" TEXT NOT NULL,
    "case_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "nft_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gift_case_openings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_nft_transaction" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "account_nftAccountId" TEXT NOT NULL,
    "account_nftNftId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_nft_transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "referrals_account_id_key" ON "referrals"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_value_key" ON "referrals"("value");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_key" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "nft_descriptions_nft_id_key" ON "nft_descriptions"("nft_id");

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_referred_by_id_fkey" FOREIGN KEY ("referred_by_id") REFERENCES "referrals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nfts" ADD CONSTRAINT "nfts_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "gift_cases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nft_descriptions" ADD CONSTRAINT "nft_descriptions_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "nfts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_gifts" ADD CONSTRAINT "account_gifts_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_gifts" ADD CONSTRAINT "account_gifts_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "nfts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_nfts" ADD CONSTRAINT "account_nfts_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_nfts" ADD CONSTRAINT "account_nfts_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "nfts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gift_case_openings" ADD CONSTRAINT "gift_case_openings_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "gift_cases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gift_case_openings" ADD CONSTRAINT "gift_case_openings_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gift_case_openings" ADD CONSTRAINT "gift_case_openings_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "nfts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_nft_transaction" ADD CONSTRAINT "account_nft_transaction_account_nftAccountId_account_nftNf_fkey" FOREIGN KEY ("account_nftAccountId", "account_nftNftId") REFERENCES "account_nfts"("account_id", "nft_id") ON DELETE RESTRICT ON UPDATE CASCADE;
