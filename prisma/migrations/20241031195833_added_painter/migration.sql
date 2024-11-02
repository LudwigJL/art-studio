/*
  Warnings:

  - Added the required column `painterId` to the `Painting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Painting" ADD COLUMN     "painterId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Painter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "alive" BOOLEAN NOT NULL,

    CONSTRAINT "Painter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Painting" ADD CONSTRAINT "Painting_painterId_fkey" FOREIGN KEY ("painterId") REFERENCES "Painter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
