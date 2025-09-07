/*
  Warnings:

  - You are about to drop the column `auth_id` on the `tbl_user` table. All the data in the column will be lost.
  - You are about to drop the column `auth_provider` on the `tbl_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."tbl_user" DROP COLUMN "auth_id",
DROP COLUMN "auth_provider";
