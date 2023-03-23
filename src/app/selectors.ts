import {AppRootStateType} from "./store";

export const selectAppError =  (state: AppRootStateType) => state.app.appError
export const selectAppInfo =  (state: AppRootStateType) => state.app.appInfo
export const selectIsAppMakeRequest =  (state: AppRootStateType) => state.app.isAppMakeRequest