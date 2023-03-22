import React from 'react';
import {Box, Grid, Paper, Tooltip} from "@mui/material";
import {ItemType} from "../../../api/appApi";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes";
import defaultBookImage from '../../../common/defaultBook.png'
import BookImage from "./BookImage";
import s from './BookCard.module.css'


type BookCardPropsType = {
    book: ItemType
    callBack: (bookId: string) => void
}

const BookCard: React.FC<BookCardPropsType> = ({book, callBack}) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        callBack(book.id)
        navigate(PATH.books + book.id)
    }
    const {imageLinks, categories, authors, title: bookTitle} = book.volumeInfo
    const bookImage = imageLinks
        ? imageLinks.smallThumbnail
        : defaultBookImage
    const bookCategory = categories
        ? categories[0]
        : ' '

    const bookAuthors = authors
        ? authors.join(', ')
        : ' '

    return (
        <Grid item style={{width: '350px'}}>
            <Paper style={{
                padding: '10px',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
            }}>
                <Box onClick={handleOnClick} sx={{cursor: 'pointer'}}>
                    <BookImage bookImage={bookImage}/>
                </Box>
                <Grid container direction={'column'}>
                    <Grid item
                          // style={{height: '25px'}}
                    >
                        <p className={s.category}>{bookCategory}</p>
                    </Grid>
                    <Grid item style={{height: '75px'}}>

                        <div className={s.title}>
                            <Tooltip title={bookTitle}>
                                <b onClick={handleOnClick}> {bookTitle}</b>
                            </Tooltip>
                        </div>

                    </Grid>
                    <Grid item>
                        <p className={s.authors}>{bookAuthors}</p>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default BookCard;