import React from "react";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectBooks, selectTotalCount} from "./selectors";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import {addMoreBooksTC} from "./booksReducer";
import {setSelectedBookIdAC} from "./actions";
import {Container, CssBaseline, Grid} from "@mui/material";
import BookCard from "./BookCard/BookCard";

export const Books = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBooks)
    const totalItems = useAppSelector(selectTotalCount)

    const handleAddMoreBooks = () => {
        dispatch(addMoreBooksTC())
    }
    const handleOnClick = (bookId: string) => {
        dispatch(setSelectedBookIdAC(bookId))
    }
    const mappedBooks = books.map((book, index) => {
        return <BookCard key={index}
                         book={book}
                         callBack={handleOnClick}
        />
    })

    return <>
        <h5>Found {totalItems} results</h5>


        <Grid container spacing={5} style={{justifyContent: 'center'}}>
            {mappedBooks}
        </Grid>

        <button onClick={handleAddMoreBooks}>Load more</button>
    </>
}