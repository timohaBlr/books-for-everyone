import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectBooks = (state: AppRootStateType) => state.books.books
export const selectTotalCount = (state: AppRootStateType) => state.books.totalItems
export const selectCurrentBookId = (state: AppRootStateType) => state.books.selectedBookId

export const selectCurrentBook = createSelector([selectBooks, selectCurrentBookId], (books, selectedBookId) => {
    return books.find(book => book.id === selectedBookId)
})