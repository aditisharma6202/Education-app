import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter , Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Courses from './courses/courses';
import SignUp from './signUp';
import Login from './login';
import CreateCourses from './Instructor/createCourse';
import CreateCurriculum from './Instructor/createCurriculum';
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     {/* <ScrollIntoView> */}
      
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>

<Route path='/signup' element={<SignUp/>}/>
<Route path='/createcourse' element={<CreateCourses/>}/>
<Route path='/createcurriculum' element={<CreateCurriculum/>}/>
<Route path='/course' element={<Courses/>}/>

        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
