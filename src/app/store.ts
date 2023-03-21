import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {appReducer} from "./appReducer";
import thunk from 'redux-thunk'
import {AppThunkDispatch} from "./types";
import {composeWithDevTools} from "redux-devtools-extension";
import {booksReducer} from "../features/books/booksReducer";

const rootReducer = combineReducers({
    root:appReducer,
    books: booksReducer,
})

const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = createStore(rootReducer,composedEnhancers)

export type AppRootStateType = ReturnType<typeof rootReducer>





// @ts-ignore
window.store = store
