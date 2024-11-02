-- CreateTable
CREATE TABLE "Painting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "creationYear" INTEGER NOT NULL,
    "dimensionsSize" TEXT NOT NULL,

    CONSTRAINT "Painting_pkey" PRIMARY KEY ("id")
);
