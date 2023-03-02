-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `username` TEXT NOT NULL,
    `password` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Yangungo` (
    `id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `content` LONGTEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Yangungo_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Yangungo` ADD CONSTRAINT `Yangungo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
