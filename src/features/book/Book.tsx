import React from "react";
import {selectCurrentBook} from "../books/selectors";
import useAppSelector from "../../common/hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import BookImage from "../books/BookCard/BookImage";
import defaultBookImage from "../../common/defaultBook.png";
import s from './Book.module.css'
import {Button} from "@mui/material";

export const Book = () => {

    const navigate = useNavigate()
    const book = useAppSelector(selectCurrentBook)
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
                <BookImage bookImage={bookImage}/>
            </div>
            <p className={s.category}>{bookCategory}</p>
            <div className={s.title}>
                <h2>{title}</h2>
                <p>{bookAuthors}</p>
            </div>
            <p className={s.description}>{description}</p>

            <div className={s.button}>
                <Button variant={"outlined"}
                        size={"large"}
                        onClick={handleClickBack}> Go back</Button>
            </div>
        </div>
    )
}