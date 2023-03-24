import React from 'react';
import {FormikHelpers, useFormik} from "formik";
import {categoryOptions, orderBy} from "../../common/constants/constants";
import {getBooksTC} from "../books/booksReducer";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectSearchParams} from "../books/selectors";
import {setSearchParamsAC} from "../books/actions";
import {
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import s from './SearchForm.module.css'
import Search from "./Search";
import {FormikValuesI} from "../books/types";
import {validateSearch} from "../../common/utils/validateUtils";

const SearchForm = () => {
    const dispatch = useAppDispatch()
    const searchParams = useAppSelector(selectSearchParams)

    const formik = useFormik({
        initialValues: {
            q: searchParams.q,
            categories: searchParams.categories,
            orderBy: searchParams.orderBy,
        },
        onSubmit: ((
            values: FormikValuesI,
            {setSubmitting}: FormikHelpers<FormikValuesI>
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
    const mappedCategories = categoryOptions.map(category => (
        <MenuItem key={category}
                  value={category}>
            {category}
        </MenuItem>))
    const mappedOrderBy = orderBy.map(order => <MenuItem key={order} value={order}>{order}</MenuItem>)

    return (
        <div className={s.wrapper}>
            <h1>Search for books</h1>

            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.field}>
                    <TextField id="q"
                               placeholder="Search a book..."
                               {...formik.getFieldProps('q')}
                               fullWidth
                               InputProps={{
                                   endAdornment: <Search/>
                               }}
                               size={'small'}
                    />
                </div>

                <p className={s.error}>{errorMessage}</p>

                <div className={s.selects}>
                    <Select size={'small'}
                            className={s.select}
                            id="categories"
                            {...formik.getFieldProps('categories')}
                    >
                        {mappedCategories}
                    </Select>
                    <Select
                        size={'small'}
                        className={s.select}
                        id="orderBy"
                        {...formik.getFieldProps('orderBy')}
                    >
                        {mappedOrderBy}
                    </Select>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
