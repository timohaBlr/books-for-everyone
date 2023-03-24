import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { AppActionsType } from '../../app/types'
import {setAppErrorAC, setIsAppMakeRequestAC} from "../../app/actions";

type ErrorType = Error | AxiosError<{ error: string }>

export const errorUtils = (e: ErrorType, dispatch: Dispatch<AppActionsType>) => {
  const err = e as ErrorType

  if (axios.isAxiosError(err)) {
    //ошибка появилась после отката axios к более ранней версии, так как с новой были проблемы с jest
    // @ts-ignore
    const error = err.response?.data ? err.response.data.error.message : err.message

    dispatch(setAppErrorAC(error))
  } else {
    dispatch(setAppErrorAC(`Native error ${err.message}`))
  }
  dispatch(setIsAppMakeRequestAC(false))
}
