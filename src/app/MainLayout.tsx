import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import {PATH} from "../common/routes";
import SearchForm from "../features/searchForm/SearchForm";

export const MainLayout = () => {

    const handleChangeOptions = () => {
        // const dispatch =
    }
    return (
        <div>Hello MainLayout!
            <NavLink to={PATH.books+'bookId'}>Book</NavLink>
            <SearchForm/>
            <Outlet/>
        </div>
    )
}