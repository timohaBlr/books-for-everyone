import React from 'react';
import {Form, FormikHelpers, Field, Formik, ErrorMessage} from "formik";
import {categoryOptions, sortBy} from "../../common/constants/constants";
import {getBooksTC} from "../books/booksReducer";
import useAppDispatch from "../../common/hooks/useAppDispatch";

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
        errors.q = 'Введите, что вас интересует.'
    }
    return errors
}

const SearchForm = () => {
    const dispatch = useAppDispatch()


    return (
        <div>
            <h1>Search for books</h1>
            <Formik
                initialValues={{
                    q: '',
                    categories: 'all',
                    orderBy: 'relevance',
                }}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    const categories = values.categories !== 'all' ? ` subject:${values.categories}` : ''
                    const searchFormParams = {
                        q: values.q + categories,
                        orderBy: values.orderBy
                    }
                    dispatch(getBooksTC(searchFormParams))
                    setSubmitting(false);
                }}
                validate={validateSearch}
                validateOnBlur={false}
            >
                <Form>
                    <Field id="q" name="q" placeholder="Search a book..."/>
                    <ErrorMessage name="q"/>

                    <label htmlFor="categories">Categories</label>
                    <Field
                        as={'select'}
                        id="categories"
                        name="categories">
                        {categoryOptions.map(category => <option key={category} value={category}>{category}</option>)}
                    </Field>

                    <label htmlFor="orderBy">Sorting by</label>
                    <Field
                        as={'select'}
                        id="orderBy"
                        name="orderBy"
                    >
                        {sortBy.map(sort => <option key={sort} value={sort}>{sort}</option>)}
                    </Field>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchForm;