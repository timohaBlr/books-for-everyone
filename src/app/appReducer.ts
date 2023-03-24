import {AppActionsType} from "./types";

type AppInitialStateType = typeof appInitialState
 const appInitialState = {
    isAppMakeRequest: false,
    appError: '',
}

export const appReducer = (state: AppInitialStateType = appInitialState, actions: AppActionsType): AppInitialStateType => {
    switch (actions.type) {
        case 'APP/TOGGLE_IS_APP_MAKE_REQUEST':
            return {...state, isAppMakeRequest: actions.payload.isAppMakeRequest}
        case 'APP/SET_APP_ERROR':
            return {...state, appError: actions.payload.appError}

        default:
            return state
    }
}