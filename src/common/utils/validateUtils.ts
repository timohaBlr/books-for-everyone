import {FormikErrorsType, FormikValuesI} from "../../features/books/types";

export const validateSearch = (values: FormikValuesI) => {
    let errors: FormikErrorsType = {};
    if (values.q === '') {
        errors.q = 'What are you looking for?'
    }
    return errors
}