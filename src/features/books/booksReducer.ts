import {BooksActionsType} from "./types";
import {booksApi, ItemType} from "../../api/appApi";
import {AllReducersActionType, AppThunk} from "../../app/types";
import * as booksActions from './actions'
import {Values} from "../searchForm/SearchForm";
import {setIsAppMakeRequestAC} from "../../app/actions";
import {errorUtils} from "../../common/utils/errorUtils";

type BooksInitialStateType = typeof booksInitialState

const booksInitialState = {
    books: [] as ItemType[],
    totalItems: 0,
    searchParams: {
        q: '',
        categories: 'all',
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
export const getBooksTC = (values: Values): AppThunk<AllReducersActionType> => async (dispatch) => {

    const categories = values.categories !== 'all' ? ` subject:${values.categories}` : ''
    const params = {
        q: values.q + categories,
        orderBy: values.orderBy,
        startIndex: 0,
        maxResults: 30,
    }
    dispatch(setIsAppMakeRequestAC(true))
    try {
        const res = await booksApi.getBooks(params)
        dispatch(booksActions.setBooksAC(res.data.items))
        dispatch(booksActions.setTotalItemsAC(res.data.totalItems))
        if (res.data.totalItems === 0) {

        }
    } catch (err: any) {
        errorUtils(err, dispatch)
    } finally {
        dispatch(setIsAppMakeRequestAC(false))
    }
}
export const addMoreBooksTC = (): AppThunk<AllReducersActionType> => async (dispatch, getState) => {

    const searchParams = getState().books.searchParams
    const categories = searchParams.categories !== 'all' ? ` subject:${searchParams.categories}` : ''
    const params = {
        q: searchParams.q + categories,
        orderBy: searchParams.orderBy,
        startIndex: getState().books.books.length,
        maxResults: 30,
    }
    dispatch(setIsAppMakeRequestAC(true))
    try {
        const res = await booksApi.getBooks(params)
        dispatch(booksActions.addBooksAC(res.data.items))
    } catch (err: any) {
        errorUtils(err, dispatch)
    } finally {
        dispatch(setIsAppMakeRequestAC(false))
    }
}