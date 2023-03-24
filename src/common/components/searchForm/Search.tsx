import React from 'react';
import {
    IconButton,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useAppSelector from "../../hooks/useAppSelector";
import {selectIsAppMakeRequest} from "../../../app/selectors";

const Search = () => {
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)
    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                edge="end"
                type={'submit'}
                disabled={isAppMakeRequest}
            >
                <SearchIcon/>
            </IconButton>
        </InputAdornment>
    );
};

export default Search;