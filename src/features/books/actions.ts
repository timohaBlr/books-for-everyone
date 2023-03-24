import {ItemType} from "../../api/appApi";
import {FormikValuesI} from "./types";

export const setBooksAC = (books: ItemType[]) => {
    return {
        type: 'BOOKS/SET_BOOKS',
        payload: {
            books,
        },
    } as const
}
export const addBooksAC = (books: ItemType[]) => {
    return {
        type: 'BOOKS/ADD_BOOKS',
        payload: {
            books,
        },
    } as const
}
export const setTotalItemsAC = (totalItems: number) => {
    return {
        type: 'BOOKS/SET_TOTAL_ITEMS',
        payload: {
            totalItems,
        },
    } as const
}
export const setSearchParamsAC = (searchParams: FormikValuesI) => {
    return {
        type: 'BOOKS/SET_SEARCH_PARAMS',
        payload: {
            searchParams,
        },
    } as const
}
export const setSelectedBookIdAC = (selectedBookId: string) => {
    return {
        type: 'BOOKS/SET_SELECTED_BOOK_ID',
        payload: {
            selectedBookId,
        },
    } as const
}