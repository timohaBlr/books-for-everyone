import React from "react";
import {selectCurrentBook} from "../books/selectors";
import useAppSelector from "../../common/hooks/useAppSelector";
import {useNavigate} from "react-router-dom";

export const Book = () => {

    const navigate = useNavigate()
    const book = useAppSelector(selectCurrentBook)
    const {title, authors, categories, imageLinks} = book!.volumeInfo

    const handleClickBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <img src={imageLinks.smallThumbnail} alt={'book cover'}/>
            <p>{title}</p>
            <p>{authors}</p>
            <p>{categories}</p>
            <button onClick={handleClickBack}>Go back</button>
        </div>
    )
}