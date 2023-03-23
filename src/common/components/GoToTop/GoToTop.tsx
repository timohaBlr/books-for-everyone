import React, {useEffect, useState} from "react";
import s from "./GoToTop.module.css";
import {Fab} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

export const GoToTop = () => {
    const [show, setShow] = useState(false);

    function trackScroll() {
        const offset = window.scrollY;
        // const coords = document.documentElement.clientHeight;
        if (offset < 200) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', trackScroll);
        return () => {
            window.removeEventListener('scroll', trackScroll);
        }
    }, [])

    const handleOnClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    const fabClassName = show
        ? s.fab + ' ' + s.active
        : s.fab

    return (<div className={fabClassName}>
            <Fab variant="circular"
                 onClick={handleOnClick}>
                <NavigationIcon/>
            </Fab>
        </div>

    )
}