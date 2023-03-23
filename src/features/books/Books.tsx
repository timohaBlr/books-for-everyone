import React from "react";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectBooks, selectTotalCount} from "./selectors";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import {addMoreBooksTC} from "./booksReducer";
import {setSelectedBookIdAC} from "./actions";
import {Button, Divider, Grid} from "@mui/material";
import BookCard from "./BookCard/BookCard";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import s from './Books.module.css'
import {selectIsAppMakeRequest} from "../../app/selectors";
import {GoToTop} from "../../common/components/GoToTop/GoToTop";

export const Books = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBooks)
    const totalItems = useAppSelector(selectTotalCount)
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)

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

    return <div className={s.wrapper}>
        <h3>Found {totalItems} results</h3>


        <Grid container spacing={5} style={{justifyContent: 'center'}}>
            {mappedBooks}
        </Grid>
        <Divider variant="middle" style={{margin: '50px 0'}}>
            <Button onClick={handleAddMoreBooks}
                    variant={"outlined"}
                    size={"large"}
                    endIcon={<AutoStoriesIcon/>}
                    disabled={isAppMakeRequest}
            >
                {isAppMakeRequest ? 'Loading ....' : 'Load more'}
            </Button>
        </Divider>
        <GoToTop/>
    </div>
}


