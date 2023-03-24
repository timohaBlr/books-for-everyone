import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import {selectSearchParams} from "../../../features/books/selectors";
import {Navigate} from 'react-router-dom';
import {PATH} from "../../routes";
import {selectIsAppMakeRequest} from "../../../app/selectors";

const Greetings = () => {
    const {q} = useAppSelector(selectSearchParams)
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)

    if (q !== '' && !isAppMakeRequest) {
        return <Navigate to={PATH.books}/>
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>
                This application use Google Books API. Please make sure you are using a VPN while in Belarus.
            </h2>

        </div>
    );
};

export default Greetings;
