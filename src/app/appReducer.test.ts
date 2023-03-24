import * as actions from './actions'
import {appReducer} from "./appReducer";

let state = {
    isAppInitialise: false,
    isAppMakeRequest: false,
    appError: '',
}
beforeEach(() => {
    state = {
        isAppInitialise: false,
        isAppMakeRequest: false,
        appError: '',
    }
})

test('app loading status should be changed', () => {

    const newState = appReducer(state, actions.setIsAppMakeRequestAC(true))

    expect(newState.isAppMakeRequest).toBe(true)
    expect(newState.appError).toBe('')
})
test('app error should be set', () => {

    const newState = appReducer(state, actions.setAppErrorAC('Some error'))

    expect(newState.appError).toBe('Some error')
    expect(newState.isAppMakeRequest).toBe(false)
})
