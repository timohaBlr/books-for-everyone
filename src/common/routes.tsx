import {createHashRouter} from "react-router-dom";
import {MainLayout} from "../app/MainLayout";
import {BooksPage} from "../features/books/BooksPage";
import {Book} from "../features/book/Book";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import Greetings from "./components/greetings/Greetings";

export const PATH = {
    books: '/books/',
    book: '/books/:bookId',
    // notFound: '*',
}

export const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {index: true, element: <Greetings/>},
                    {
                        path: PATH.book,
                        element: <Book/>,
                    },
                    {
                        path: PATH.books,
                        element: <BooksPage/>,
                    },
                ],
            },
        ],
    },
])