import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import {selectSearchParams} from "../../../features/books/selectors";
import {Navigate} from 'react-router-dom';
import {PATH} from "../../routes";

const Greetings = () => {
    const {q} = useAppSelector(selectSearchParams)

    if (q !== '') {
        return <Navigate to={PATH.books}/>
    }
    return (
        <div>
            <h2>Hello! This application use Google Books API. Please make sure you are using a VPN while in
                Belarus.</h2>
        </div>
    );
};

export default Greetings;
