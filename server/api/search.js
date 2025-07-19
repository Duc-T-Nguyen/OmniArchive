import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



export default async function handler  (req, res){
    // check the incoming message method to ensure POST
    if (req.method != 'POST'){
        res.status(405).json({message: 'failed search because of method request'})
    }
    
    const {query, type, limit} = req.body;


    if (!query || !type || !limit){
        res.status(400).json({message: 'failed because of the required params are missing'})
    }

    try {

        let results  = []
        if (type == 'Books' || type == 'All'){

           const results = await prisma.book.findMany({
            where: {
               OR: [
                { book_title: {
                        contains: query.trim(),
                        mode: 'insensitive'
                },},
                {
                    description: {
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
                        Category: {
                            select: {
                                category_name: true
                            }
                        }
                    }

                },
                KeywordList: {
                    include: {
                        Keyword: {
                            select: {
                                keyword_name: true
                            }
                        }
                    }
                }

            },
            take: type == 'Books' ? limit: Math.ceil(limit / 2),
            orderBy: [
                {book_title: 'asc',}
            ]
           })

           const bookResults = results.map(book =>({
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
                author: AuthorBooks.map(author_book =>
                    `${author_book.Author.first_name}
                    ${author_book.Author.last_name}`.trim()
                ), 
                category: book.CategoryList.map(cl => cl.Category.category_name),
                keyword: document.KeywordList.map(kl => kl.keyword.keyword_name),
                link: book.link,
                type: 'book'
           }))
           results = [...results, ...bookResults];
        }

        if (type == 'All' || type == 'Documents'){
            const results  = await prisma.document.findMany({

                where: {
                    OR: [
                        {
                            document_title: {
                                contains: query.trim(),
                                mode: 'insensitive',
                            } 
                        },
                        {
                            description: {
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
                            Category: {
                                select: {
                                    first_name: true,
                                    last_name: true,
                                    
                                }
                            }
                        }
                    },
                    CategoryList: {
                        include: {
                            Category: {
                                select: {
                                    category_name: true
                                }
                            }
                        }
                    },
                    KeywordList: {
                        include: {
                            Keyword: {
                                select: {
                                    keyword_name: true
                                }
                            }
                        }
                    }

                },
                take: type == 'Documents' ? limit: Math.ceil(limit / 2),
                orderBy: [
                    {document_title: 'asc'}
                ]
            })

            const documentResults = results.map(document =>({
                id: document.id,
                document_title: document.document_title,
                translator: document.translator,
                publish_date: document.publish_date,
                publisher: document.publisher,
                publish_location: document.publish_location,
                country: document.country,
                description: document.description,
                language: document.language,
                author: AuthorDocuments.map(author_document =>
                    `${author_document.Document.first_name}
                    ${author_document.Document.last_name}`.trim()
                ),
                category: document.CategoryList.map(cl =>cl.Category.category_name),
                keyword: document.KeywordList.map(kl => kl.keyword.keyword_name),
                link: document.link,
                type: 'document'
            }))
            results = [...results, ...documentResults]


        }

        return res.status(200).json({
            success: true,
            results: results,
            count: results.length
        })

    }catch(error) {
        console.error("Error with search: ", error)
        return res.status(500).json({
            success: true,
            message: 'Internal error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}