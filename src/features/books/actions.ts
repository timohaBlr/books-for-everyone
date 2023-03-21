import {ItemType} from "../../api/appApi";

export const setBooksAC = (books: ItemType[]) => {
    return {
        type: 'BOOKS/SET_BOOKS',
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