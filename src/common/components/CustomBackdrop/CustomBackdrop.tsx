import React from "react";
import s from './CustomBackdrop.module.css'
import {Loader} from "./Loader";

type CustomBackDropPropsType = {
    open: boolean
}
export const CustomBackdrop = (props: CustomBackDropPropsType) => {

    return (
        <>
            {props.open && <div className={s.background}>
                <Loader/>
            </div>}
        </>
    )
}