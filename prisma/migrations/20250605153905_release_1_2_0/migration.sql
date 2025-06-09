/*
  Warnings:

  - You are about to drop the `nft_descriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "nft_descriptions" DROP CONSTRAINT "nft_descriptions_nft_id_fkey";

-- DropTable
DROP TABLE "nft_descriptions";
