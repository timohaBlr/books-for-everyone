import React, {useEffect} from 'react';
import './App.css';
import {booksApi} from "../api/appApi";

function App() {
let items:any[] = []
  useEffect( ()=>{
   booksApi.getBooks({q:'flowers',
       // key:'AIzaSyDuoggnxnppevRQV2YYwBR0dMkAxRtq_3I'
   })
       .then((res)=>{
         items = res.data.items
       })
  },[])
  return (
    <div >
        {items.map((i,index)=><p key={index}>i.volumeInfo.title</p> )}
Hello world!
    </div>
  );
}

export default App;
