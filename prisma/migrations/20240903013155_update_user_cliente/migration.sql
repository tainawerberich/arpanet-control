/*
  Warnings:

  - You are about to drop the column `cliente_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_cliente_id_fkey`;

-- AlterTable
ALTER TABLE `Cliente` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `cliente_id`;

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_user_id_key` ON `Cliente`(`user_id`);

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
