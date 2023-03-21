import {BooksActionsType} from "./types";
import {booksApi, ItemType, ParamsType} from "../../api/appApi";
import {AllReducersActionType, AppThunk} from "../../app/types";
import * as booksActions from './actions'
import {Values} from "../searchForm/SearchForm";

type BooksInitialStateType = typeof booksInitialState

const booksInitialState = {
    books: [] as ItemType[],
    totalItems: 0,
}

export const booksReducer = (state: BooksInitialStateType = booksInitialState, action: BooksActionsType): BooksInitialStateType => {
    switch (action.type) {
        case 'BOOKS/SET_BOOKS':
            return {...state, books: action.payload.books};
        case 'BOOKS/SET_TOTAL_ITEMS':
            return {...state, totalItems: action.payload.totalItems};
        default:
            return state;
    }
}

type SearchParamsType = {
    q: string
    orderBy: string
}
//thunkCreators
export const getBooksTC = (searchParams: SearchParamsType): AppThunk<AllReducersActionType> => async (dispatch, getState) => {

    const params = {
        startIndex: getState().books.totalItems,
        maxResults: 30,
        q: searchParams.q,
        orderBy: searchParams.orderBy,
    }


    try {
        const res = await booksApi.getBooks(params)
        dispatch(booksActions.setBooksAC(res.data.items))
        dispatch(booksActions.setTotalItemsAC(res.data.totalItems))
    } catch (err: any) {
        console.log(err)
    }
}