export const setAppIsInitialisedAC = (appIsInitialised: boolean) => {
    return {
        type: 'APP/SET_IS_APP_INITIALISED',
        payload: {
            appIsInitialised,
        },
    } as const
}
export const setIsAppMakeRequestAC = (isAppMakeRequest: boolean) => {
    return {
        type: 'APP/TOGGLE_IS_APP_MAKE_REQUEST',
        payload: {
            isAppMakeRequest,
        },
    } as const
}
export const setAppErrorAC = (appError: string) => ({type: 'APP/SET_APP_ERROR', payload: {appError}} as const)
export const setAppInfoAC = (appInfo: string) => ({type: 'APP/SET_APP_INFO', payload: {appInfo}} as const)