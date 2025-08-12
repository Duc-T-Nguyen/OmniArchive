import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server"


const prisma = new PrismaClient()



export async function POST(req){
    
    const {query, type, limit} = await req.json();


    if (!query || !type || !limit){
       return NextResponse.json(
        {message: 'failed because of the required params are missing'},
        {status: 400}
    );
    }

    try {

        let results  = []
        if (type === 'Books' || type === 'All'){

           const bookResults = await prisma.book.findMany({
            where: {
               OR: [
                { book_title: {
                        contains: query.trim(),
                        mode: 'insensitive'
                },},
                {
                    isbn: {
                        contains: query.trim(),
                        mode: 'insensitive',
                    },
                },
                {
                    publisher: {
                        contains: query.trim(),
                        mode: 'insensitive',
                    },
                },
               ]
            },
            include: {
                AuthorBooks: {
                    include: {
                        Author: {
                            select: {
                                first_name: true,
                                last_name: true,
                            }
                        }
                    }

                },
                CategoryList: {
                    include: {
                        Category: true
                    }

                },
                KeywordList: {
                    include: {
                        Keyword: true
                    }
                }
            },
            take: type === 'Books' ? limit : Math.ceil(limit / 2),
            orderBy:  {book_title: 'asc'}
           })

           const bookFormattedResults = bookResults.map(book =>({
                id: book.id,
                book_title: book.book_title,
                publisher: book.publisher,
                translator: book.translator,
                publish_date: book.publish_date,
                publish_location: book.publish_location,
                country: book.country,
                description: book.description,
                language: book.language,
                isbn: book.isbn,
                author: book.AuthorBooks.map(author_book => `${author_book.Author.first_name} ${author_book.Author.last_name}`.trim()
                ), 
                category: book.CategoryList.map(cl => cl.Category.category_name),
                keyword: book.KeywordList.map(kl => kl.Keyword.keyword_name),
                link: book.link,
                type: 'book'
           }))
           results = [...results, ...bookFormattedResults];
        }

        if (type == 'All' || type == 'Documents'){
            const documentResults  = await prisma.document.findMany({

                where: {
                    OR: [
                        {
                            document_title: {
                                contains: query.trim(),
                                mode: 'insensitive',
                            } 
                        },
                        {
                            isbn: {
                                contains: query.trim(),
                                mode: 'insensitive',
                            }
                        },
                        {
                            publisher: {
                                contains: query.trim(),
                                mode: 'insensitive',
                            }
                        }
                    ]
                },
                include: {
                    AuthorDocuments: {
                        include: {
                            Author: {
                                select: {
                                    first_name: true,
                                    last_name: true,
                                }
                            }
                        }
                    },
                    CategoryList: {
                        include: {
                            Category: true
                        }
                    },
                    KeywordList: {
                        include: {
                            Keyword: true
                        }
                    }

                },
                take: type == 'Documents' ? limit : Math.ceil(limit / 2),
                orderBy:  {document_title: 'asc'}
            })

            const documentFormattedResults = documentResults.map(document =>({
                id: document.id,
                document_title: document.document_title,
                translator: document.translator,
                publish_date: document.publish_date,
                publisher: document.publisher,
                publish_location: document.publish_location,
                country: document.country,
                description: document.description,
                language: document.language,
                author: document.AuthorDocuments.map(
                    author_document =>`${author_document.Author.first_name} ${author_document.Author.last_name}`.trim()
                ),
                category: document.CategoryList.map(cl =>cl.Category.category_name),
                keyword: document.KeywordList.map(kl => kl.Keyword.keyword_name),
                link: document.link,
                type: 'document'
            }))
            results = [...results, ...documentFormattedResults]


        }

        return NextResponse.json({
            success: true,
            results: results,
            count: results.length
        }
    )

    }catch(error) {
        console.error("Error with search: ", error)
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, 
        {status: 500})
    }
}