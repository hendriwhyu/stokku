/*
  Warnings:

  - A unique constraint covering the columns `[nama_kategori]` on the table `tbl_kategori` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."tbl_produk" ALTER COLUMN "foto_produk" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_kategori_nama_kategori_key" ON "public"."tbl_kategori"("nama_kategori");
