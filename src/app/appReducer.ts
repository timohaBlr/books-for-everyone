import {AppActionsType} from "./types";

type AppInitialStateType = typeof appInitialState
const appInitialState = {}

export const appReducer = (state: AppInitialStateType = appInitialState, actions: AppActionsType): AppInitialStateType => {
    switch (actions.type) {
        case 'APP/SET-APP-IS-INITIALISED':
            return {...state}
        default:
            return state
    }
}