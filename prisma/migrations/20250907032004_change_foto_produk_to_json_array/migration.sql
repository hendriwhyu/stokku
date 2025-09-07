/*
  Warnings:

  - Changed the type of `foto_produk` on the `tbl_produk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."tbl_produk" DROP COLUMN "foto_produk",
ADD COLUMN     "foto_produk" JSONB NOT NULL;
