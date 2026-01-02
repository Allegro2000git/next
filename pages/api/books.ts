import type { NextApiRequest, NextApiResponse } from "next";

type BooksType = {
    id: number,
    title: string
}

const booksDB = [
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'},
    {id: 4, title: 'name 1'},
    {id: 5, title: 'Name 2'},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<BooksType[]>,
) {

    if (req.method === "GET") {

        let books = booksDB

        const term = req.query.term as string

        if (term) {
            books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
        }

        res.status(200).json(books);
    }

}
