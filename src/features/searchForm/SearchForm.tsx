import React from 'react';
import {Form, FormikHelpers, Field, Formik} from "formik";
import {categoryOptions, sortBy} from "../../common/constants/constants";
import {getBooksTC} from "../books/booksReducer";
import useAppDispatch from "../../common/hooks/useAppDispatch";

export interface Values {
    q: string;
    categories: string;
    orderBy: string;
}

export const SearchForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
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
                    const searchParams = {
                        q: values.q + (values.categories !== 'all' ? `+subject:${values.categories}` : ''),
                        orderBy: values.orderBy
                    }
                    dispatch(getBooksTC(searchParams))
                    // alert(JSON.stringify(params, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form>
                    {/*<label htmlFor="q">First Name</label>*/}
                    <Field id="q" name="q" placeholder="Search a book..."/>

                    <label htmlFor="categories">Categories</label>
                    <Field
                        as={'select'}
                        id="categories"
                        name="categories">
                        {categoryOptions.map(category => <option key={category} value={category}>{category}</option>)}
                    </Field>

                    <label htmlFor="sortingBy">Sorting by</label>
                    <Field
                        as={'select'}
                        id="sortingBy"
                        name="sortingBy"
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