import React from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { setAppErrorAC } from '../../../app/actions'
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {selectAppError} from "../../../app/selectors";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const ErrorSnackbar = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(selectAppError)

    const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        if (error !== '') {
            dispatch(setAppErrorAC(''))
        }
    }

    return (
        <Snackbar open={error !== ''} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
    )
}
