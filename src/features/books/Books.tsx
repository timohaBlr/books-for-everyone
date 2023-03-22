import React from "react";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectBooks, selectTotalCount} from "./selectors";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import {addMoreBooksTC} from "./booksReducer";
import {PATH} from "../../common/routes";
import {NavLink} from "react-router-dom";
import {setSelectedBookIdAC} from "./actions";

export const Books = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBooks)
    const totalItems = useAppSelector(selectTotalCount)

    const handleAddMoreBooks = () => {
        dispatch(addMoreBooksTC())
    }

    const mappedBooks = books.map((book, index) => {
        const handleOnClick = () => {
            dispatch(setSelectedBookIdAC(book.id))
        }
        return (
            <NavLink key={index} onClick={handleOnClick} to={PATH.books + book.id}>
                {book.volumeInfo.title}
            </NavLink>
        )
    })

    return  <div>Hello Books!
            <p>Found {totalItems} results</p>
            {mappedBooks}
            <button onClick={handleAddMoreBooks}>Load more</button>
        </div>
    }