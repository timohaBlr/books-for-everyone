import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import {selectSearchParams} from "../../../features/books/selectors";
import s from './NothingWasFound.module.css'
import {Navigate} from "react-router-dom";
import {PATH} from "../../routes";

const NothingWasFound = () => {
    const {q} = useAppSelector(selectSearchParams)
    if (q === '' ) {
        return <Navigate to={PATH.greetings}/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Nothing was found</h2>
            <span>Your search - {<span className={s.request}>{q}</span>} - did not match any results.</span>

            <span>Suggestions:<ul>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
            </ul>
</span>
        </div>
    )

        ;
};

export default NothingWasFound;