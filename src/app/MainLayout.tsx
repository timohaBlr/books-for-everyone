import React from "react";
import SearchForm from "../features/searchForm/SearchForm";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {

    return (
        <div>Hello MainLayout!
            <SearchForm/>
            <Outlet/>

        </div>
    )
}