import {BooksActionsType} from "./types";
import {booksApi, ItemType, ParamsType} from "../../api/appApi";
import {AllReducersActionType, AppThunk} from "../../app/types";
import * as booksActions from './actions'

type BooksInitialStateType = typeof booksInitialState

const booksInitialState = {
    books: [] as ItemType[],
    totalItems: 0,
    searchParams: {
        q: '',
        orderBy: 'relevance',
    },
    selectedBookId: '',
}

export const booksReducer = (state: BooksInitialStateType = booksInitialState, action: BooksActionsType): BooksInitialStateType => {
    switch (action.type) {
        case 'BOOKS/SET_BOOKS':
            return {...state, books: action.payload.books};
        case 'BOOKS/ADD_BOOKS':
            return {...state, books: [...state.books, ...action.payload.books]};
        case 'BOOKS/SET_SEARCH_PARAMS':
            return {...state, searchParams: {...state.searchParams, ...action.payload.searchParams}};
        case 'BOOKS/SET_TOTAL_ITEMS':
            return {...state, totalItems: action.payload.totalItems};
        case 'BOOKS/SET_SELECTED_BOOK_ID':
            return {...state, selectedBookId: action.payload.selectedBookId};
        default:
            return state;
    }
}


//thunkCreators
export const getBooksTC = (searchFormParams: ParamsType): AppThunk<AllReducersActionType> => async (dispatch, getState) => {

    const params = {
        q: searchFormParams.q,
        orderBy: searchFormParams.orderBy,
        startIndex: 0,
        maxResults: 30,
    }

    try {
        const res = await booksApi.getBooks(params)
        dispatch(booksActions.setBooksAC(res.data.items))
        dispatch(booksActions.setTotalItemsAC(res.data.totalItems))

        dispatch(booksActions.setSearchParamsAC(params))
    } catch (err: any) {
        console.log(err)
    }
}
export const addMoreBooksTC = (): AppThunk<AllReducersActionType> => async (dispatch, getState) => {

    const params = {
        q: getState().books.searchParams.q,
        orderBy: getState().books.searchParams.orderBy,
        startIndex: getState().books.books.length,
        maxResults: 30,
    }

    try {
        const res = await booksApi.getBooks(params)
        dispatch(booksActions.addBooksAC(res.data.items))
    } catch (err: any) {
        console.log(err)
    }
}