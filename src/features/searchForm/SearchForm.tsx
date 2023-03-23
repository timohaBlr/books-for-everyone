import React from 'react';
import {FormikHelpers, useFormik} from "formik";
import {categoryOptions, sortBy} from "../../common/constants/constants";
import {getBooksTC} from "../books/booksReducer";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectSearchParams} from "../books/selectors";
import {setSearchParamsAC} from "../books/actions";
import {
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import s from './SearchForm.module.css'
import SearchIcon from '@mui/icons-material/Search';
import {selectIsAppMakeRequest} from "../../app/selectors";

export interface Values {
    q: string;
    categories: string;
    orderBy: string;
}

type FormikErrorsType = {
    q?: string
    categories?: string
    orderBy?: string
}

const validateSearch = (values: Values) => {
    let errors: FormikErrorsType = {};
    if (values.q === '') {
        errors.q = 'What are you looking for?'
    }
    return errors
}

const SearchForm = () => {
    const dispatch = useAppDispatch()
    const searchParams = useAppSelector(selectSearchParams)
    const isAppMakeRequest = useAppSelector(selectIsAppMakeRequest)

    const formik = useFormik({
        initialValues: {
            q: searchParams.q,
            categories: searchParams.categories,
            orderBy: searchParams.orderBy,
        },
        onSubmit: ((
            values: Values,
            {setSubmitting}: FormikHelpers<Values>
        ) => {
            dispatch(setSearchParamsAC(values))
            dispatch(getBooksTC(values))
            setSubmitting(false);
        }),
        validate: validateSearch,
        validateOnBlur: false,
    })
    const errorMessage = (formik.touched.q && Boolean(formik.errors.q))
        ? formik.errors.q
        : ''
    return (
        <div className={s.wrapper}>
            <h1>Search for books</h1>

            <form onSubmit={formik.handleSubmit} className={s.form}>

                <TextField id="q"
                           placeholder="Search a book..."
                           {...formik.getFieldProps('q')}
                           className={s.field}
                           InputProps={{
                               endAdornment:
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
                           }}

                           size={'small'}
                />
                <p className={s.error}>{errorMessage}</p>

                <div className={s.selects}>
                    <Select size={'small'}
                            className={s.select}
                            id="categories"
                            {...formik.getFieldProps('categories')}
                    >
                        {categoryOptions.map(category => <MenuItem key={category}
                                                                   value={category}>{category}</MenuItem>)}
                    </Select>

                    <Select
                        size={'small'}
                        className={s.select}
                        id="orderBy"
                        {...formik.getFieldProps('orderBy')}
                    >
                        {sortBy.map(sort => <MenuItem key={sort} value={sort}>{sort}</MenuItem>)}
                    </Select>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;