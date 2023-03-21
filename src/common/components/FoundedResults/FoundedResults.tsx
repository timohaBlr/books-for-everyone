import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import {selectTotalCount} from "../../../features/books/selectors";
import {Outlet} from "react-router-dom";

const FoundedResults = () => {

    const totalItems = useAppSelector(selectTotalCount)

    return totalItems !== 0
        ? <Outlet/>
        : <h2>Nothing found</h2>

        ;
};

export default FoundedResults;