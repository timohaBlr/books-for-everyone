import {createHashRouter} from "react-router-dom";
import {MainLayout} from "../app/MainLayout";
import {Books} from "../features/books/Books";
import {Book} from "../features/book/Book";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import Greetings from "./components/greetings/Greetings";

export const PATH = {
    books: '/books/',
    book: '/books/:bookId',
    greetings: '/greetings',
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
                        path: PATH.books,
                        element: <Books/>,
                    },
                    {
                        path: PATH.book,
                        element: <Book/>,
                    },
                    {
                        path: PATH.greetings,
                        element: <Greetings/>,
                    },
                ],
            },
        ],
    },
])