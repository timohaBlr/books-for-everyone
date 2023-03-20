import {AnyAction} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import * as actions from './actions'

//general application types
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionType>

export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    A>

export type AllReducersActionType = AppActionsType

// APP types

export type AppActionsType = ReturnType<InferValueTypes<typeof actions>>