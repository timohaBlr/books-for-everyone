import React from "react";
import SearchForm from "../features/searchForm/SearchForm";
import {Outlet} from "react-router-dom";
import { Container} from "@mui/material";
import useAppSelector from "../common/hooks/useAppSelector";
import {selectIsAppMakeRequest} from "./selectors";
import {CustomBackdrop} from "../common/components/CustomBackdrop/CustomBackdrop";

export const MainLayout = () => {
    const width = window.innerWidth
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)



    return (
        <Container disableGutters={width < 900}>
            <SearchForm/>
            <Outlet/>
            <CustomBackdrop open={isAppMakeRequest}/>
        </Container>
    )
}


