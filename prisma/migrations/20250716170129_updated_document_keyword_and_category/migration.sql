/*
  Warnings:

  - The primary key for the `CategoryList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `KeywordList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[book_id,category_id]` on the table `CategoryList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document_id,category_id]` on the table `CategoryList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[book_id,keyword_id]` on the table `KeywordList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document_id,keyword_id]` on the table `KeywordList` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AuthorBooks" DROP CONSTRAINT "AuthorBooks_book_id_fkey";

-- DropForeignKey
ALTER TABLE "CategoryList" DROP CONSTRAINT "CategoryList_book_id_fkey";

-- DropForeignKey
ALTER TABLE "KeywordList" DROP CONSTRAINT "KeywordList_book_id_fkey";

-- AlterTable
ALTER TABLE "CategoryList" DROP CONSTRAINT "CategoryList_pkey",
ADD COLUMN     "document_id" INTEGER,
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "book_id" DROP NOT NULL,
ADD CONSTRAINT "CategoryList_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "KeywordList" DROP CONSTRAINT "KeywordList_pkey",
ADD COLUMN     "document_id" INTEGER,
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "book_id" DROP NOT NULL,
ADD CONSTRAINT "KeywordList_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "book_title" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "translator" TEXT,
    "publish_date" TEXT NOT NULL,
    "publish_location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_isbn_key" ON "book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryList_book_id_category_id_key" ON "CategoryList"("book_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryList_document_id_category_id_key" ON "CategoryList"("document_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "KeywordList_book_id_keyword_id_key" ON "KeywordList"("book_id", "keyword_id");

-- CreateIndex
CREATE UNIQUE INDEX "KeywordList_document_id_keyword_id_key" ON "KeywordList"("document_id", "keyword_id");

-- AddForeignKey
ALTER TABLE "AuthorBooks" ADD CONSTRAINT "AuthorBooks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryList" ADD CONSTRAINT "CategoryList_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryList" ADD CONSTRAINT "CategoryList_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeywordList" ADD CONSTRAINT "KeywordList_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeywordList" ADD CONSTRAINT "KeywordList_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
