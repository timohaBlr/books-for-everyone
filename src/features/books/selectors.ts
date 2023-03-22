import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectTotalCount = (state: AppRootStateType) => state.books.totalItems
export const selectCurrentBookId = (state: AppRootStateType) => state.books.selectedBookId
export const selectSearchParams = (state: AppRootStateType) => state.books.searchParams



export const selectBooks = createSelector([(state: AppRootStateType) => state.books.books], (books) => {
    return books
})
export const selectCurrentBook = createSelector([selectBooks, selectCurrentBookId], (books, selectedBookId) => {
    return books.find(book => book.id === selectedBookId)
})
