export const setAppIsInitialisedAC = (appIsInitialised: boolean) => {
    return {
        type: 'APP/SET-APP-IS-INITIALISED',
        payload: {
            appIsInitialised,
        },
    } as const
}