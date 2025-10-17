/*
  Warnings:

  - You are about to drop the column `movies` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `movies` ADD COLUMN `UserId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `movies`;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
