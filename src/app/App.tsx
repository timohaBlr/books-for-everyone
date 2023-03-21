import React, {useEffect} from 'react';
import './App.css';
import {booksApi} from "../api/appApi";
import useAppDispatch from "../common/hooks/useAppDispatch";
import {RouterProvider} from "react-router-dom";
import {router} from "../common/routes";

function App() {
    return <RouterProvider router={router}/>
    ;
}

export default App;


