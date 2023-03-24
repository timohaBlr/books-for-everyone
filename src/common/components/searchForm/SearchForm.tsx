import React from 'react';
import {FormikHelpers, useFormik} from "formik";
import {categoryOptions, orderBy} from "../../constants/constants";
import {getBooksTC} from "../../../features/books/booksReducer";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {selectSearchParams} from "../../../features/books/selectors";
import {setSearchParamsAC} from "../../../features/books/actions";
import {
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import s from './SearchForm.module.css'
import Search from "./Search";
import {FormikValuesI} from "../../../features/books/types";
import {validateSearch} from "../../utils/validateUtils";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes";

const SearchForm = () => {
    const dispatch = useAppDispatch()
    const searchParams = useAppSelector(selectSearchParams)
    const navigate=useNavigate()

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
            navigate(PATH.books)
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
