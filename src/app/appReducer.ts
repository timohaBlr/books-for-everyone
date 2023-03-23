import {AppActionsType} from "./types";

type AppInitialStateType = typeof appInitialState
const appInitialState = {
    isAppInitialise: false,
    isAppMakeRequest: false,
    appError: '',
    appInfo:''
}

export const appReducer = (state: AppInitialStateType = appInitialState, actions: AppActionsType): AppInitialStateType => {
    switch (actions.type) {
        case 'APP/SET_IS_APP_INITIALISED':
            return {...state, isAppInitialise: actions.payload.appIsInitialised}
        case 'APP/TOGGLE_IS_APP_MAKE_REQUEST':
            return {...state, isAppMakeRequest: actions.payload.isAppMakeRequest}
        case 'APP/SET_APP_ERROR':
            return {...state, appError: actions.payload.appError}
        case 'APP/SET_APP_INFO':
            return {...state, appInfo: actions.payload.appInfo}

        default:
            return state
    }
}