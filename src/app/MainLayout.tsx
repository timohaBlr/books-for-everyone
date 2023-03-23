import React from "react";
import SearchForm from "../features/searchForm/SearchForm";
import {Outlet} from "react-router-dom";
import {Backdrop, CircularProgress, Container} from "@mui/material";
import useAppSelector from "../common/hooks/useAppSelector";
import {selectIsAppMakeRequest} from "./selectors";

export const MainLayout = () => {
    const width = window.innerWidth
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)



    return (
        <Container disableGutters={width < 900}>
            <SearchForm/>
            <Outlet/>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isAppMakeRequest}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    )
}