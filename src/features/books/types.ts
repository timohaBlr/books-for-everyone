import * as actions from './actions'
import {InferValueTypes} from "../../app/types";

export type BooksActionsType = ReturnType<InferValueTypes<typeof actions>>




//for formik
export interface FormikValuesI {
    q: string;
    categories: string;
    orderBy: string;
}

export type FormikErrorsType = {
    q?: string
    categories?: string
    orderBy?: string
}