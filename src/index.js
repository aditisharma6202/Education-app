import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import { BrowserRouter , Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Courses from './courses/courses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     {/* <ScrollIntoView> */}
      
        <Routes>
         <Route path='/' element={<Courses/>}/>

        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
