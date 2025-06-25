-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "category_description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "id" SERIAL NOT NULL,
    "keyword_name" TEXT NOT NULL,
    "keyword_description" TEXT,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
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

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "document_title" TEXT NOT NULL,
    "translator" TEXT,
    "publish_date" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "publish_location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorBooks" (
    "author_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "AuthorBooks_pkey" PRIMARY KEY ("author_id","book_id")
);

-- CreateTable
CREATE TABLE "AuthorDocuments" (
    "author_id" INTEGER NOT NULL,
    "documents_id" INTEGER NOT NULL,

    CONSTRAINT "AuthorDocuments_pkey" PRIMARY KEY ("author_id","documents_id")
);

-- CreateTable
CREATE TABLE "CategoryList" (
    "book_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "CategoryList_pkey" PRIMARY KEY ("book_id","category_id")
);

-- CreateTable
CREATE TABLE "KeywordList" (
    "book_id" INTEGER NOT NULL,
    "keyword_id" INTEGER NOT NULL,

    CONSTRAINT "KeywordList_pkey" PRIMARY KEY ("book_id","keyword_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- AddForeignKey
ALTER TABLE "AuthorBooks" ADD CONSTRAINT "AuthorBooks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorBooks" ADD CONSTRAINT "AuthorBooks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorDocuments" ADD CONSTRAINT "AuthorDocuments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorDocuments" ADD CONSTRAINT "AuthorDocuments_documents_id_fkey" FOREIGN KEY ("documents_id") REFERENCES "document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryList" ADD CONSTRAINT "CategoryList_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryList" ADD CONSTRAINT "CategoryList_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeywordList" ADD CONSTRAINT "KeywordList_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeywordList" ADD CONSTRAINT "KeywordList_keyword_id_fkey" FOREIGN KEY ("keyword_id") REFERENCES "Keyword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
