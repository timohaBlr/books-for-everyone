import {addBooksAC, setBooksAC, setSearchParamsAC, setSelectedBookIdAC, setTotalItemsAC} from './actions'
import {BooksInitialStateType, booksReducer} from "./booksReducer";
import {ItemType} from "../../api/appApi";
import {booksForTest} from "../../common/constants/forTest";

let state: BooksInitialStateType = {
    books: [] as ItemType[],
    totalItems: 0,
    searchParams: {
        q: '',
        categories: 'all',
        orderBy: 'relevance',
    },
    selectedBookId: '',
}
beforeEach(() => {
    state = {
        books: [{}] as ItemType[],
        totalItems: 0,
        searchParams: {
            q: '',
            categories: 'all',
            orderBy: 'relevance',
        },
        selectedBookId: '',
    }
})

test('count of items should be changed', () => {

    const newState = booksReducer(state, setTotalItemsAC(22))

    expect(newState.totalItems).toBe(22)
    expect(newState.searchParams).toEqual(state.searchParams)
})
test('books should be set', () => {
    const newState = booksReducer(state, setBooksAC(booksForTest))

    expect(newState.books.length).toBe(2)
    expect(newState.books[0]).toBe(booksForTest[0])
    expect(newState.searchParams).toEqual(state.searchParams)
})
test('books should be added', () => {
    const newState = booksReducer(booksReducer(state, setBooksAC(booksForTest)), addBooksAC(booksForTest))

    expect(newState.books.length).toBeGreaterThan(state.books.length)
    expect(newState.books[2]).toEqual(booksForTest[0])
    expect(newState.searchParams).toEqual(state.searchParams)
})
test('search params should be set', () => {
    const newState = booksReducer(state, setSearchParamsAC({q: 'asda', orderBy: 'newest', categories: 'all'}))

    expect(newState.books.length).toEqual(state.books.length)
    expect(newState.searchParams.q).toBe('asda')
    expect(newState.searchParams.orderBy).toBe('newest')
    expect(newState.searchParams.categories).toBe('all')
})
test('selected book id should be set', () => {
    const newState = booksReducer(state, setSelectedBookIdAC('someId'))

    expect(newState.selectedBookId).toBe('someId')
    expect(newState.totalItems).toBe(state.totalItems)
})


