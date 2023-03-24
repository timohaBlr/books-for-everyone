import React from "react";
import {selectCurrentBook, selectCurrentBookId} from "../books/selectors";
import useAppSelector from "../../common/hooks/useAppSelector";
import {Navigate, useNavigate} from "react-router-dom";
import BookImage from "../../common/components/BookImage/BookImage";
import defaultBookImage from "../../common/assets/defaultBook.png";
import s from './Book.module.css'
import {Button, Paper} from "@mui/material";
import {PATH} from "../../common/routes";

export const Book = () => {

    const navigate = useNavigate()
    const book = useAppSelector(selectCurrentBook)
    const selectedBookId = useAppSelector(selectCurrentBookId)
    if (selectedBookId === '' ) {
        return <Navigate to={PATH.books}/>
    }
    const {title, authors, categories, imageLinks, description} = book!.volumeInfo

    const handleClickBack = () => {
        navigate(-1)
    }
    const bookImage = imageLinks
        ? imageLinks.smallThumbnail
        : defaultBookImage
    const bookCategory = categories
        ? categories.join('/')
        : ' '
    const bookAuthors = authors
        ? authors.join(', ')
        : ' '


    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                <div className={s.imageContainer}>
                    <BookImage bookImage={bookImage}/>
                </div>
            </div>
            <p className={s.category}>{bookCategory}</p>
            <div className={s.title}>
                <h2>{title}</h2>
                <p>{bookAuthors}</p>
            </div>
            <div className={s.description}>
                <Paper>
                    {description}
                </Paper>
            </div>
            <div className={s.button}>
                <Button variant={"outlined"}
                        size={"large"}
                        onClick={handleClickBack}>
                    Go back
                </Button>
            </div>
        </div>
    )
}