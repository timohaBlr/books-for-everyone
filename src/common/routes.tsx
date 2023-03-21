import {createHashRouter} from "react-router-dom";
import App from "../app/App";
import {MainLayout} from "../app/MainLayout";
import {Books} from "../features/books/Books";
import {Book} from "../features/book/Book";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";

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
                    {index: true, element: <Books/>},
                    {
                        path: PATH.book,
                        element: <Book/>,
                    },
                ],
            },
        ],
    },
])