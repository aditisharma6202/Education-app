import React from 'react';
import Header from './Header/header';
import Footer from './footer/footer';
import signup from './images/signup.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swiperfile from './HomeComponents/swiper';
function Home() {
    

    useEffect(()=>{
        axios.get('https://skill.eviternship.com/getCourse').then((Response)=>{console.log(Response)})
           },[])
    return ( <div className='overflow-x'>
    <Header/>
    <div className='head-margin overflow-x'>
        <div className='row justify-content-around align-items-center bg-light-purple overflow-x '>
            <div className='col-md-3 col-12 mx-3 my-4 overflow-x'>
                <div className='card extra-shadow  '>
                    <div className='card-body '>
                        <h2 className='fw-bolder font-serif'>Dont just Watch. Do.</h2>
                            <div>
                            Try a course with coding exercises — now with a new look and more advanced learning features.
                            </div>
                            <button className='button-outline-footer text-white p-2 px-4 mt-2'>Explore Courses</button>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12 '>
                <div className='row justify-content-center align-items-center'>
                    <img src={signup} alt='image' height={'300'}  className='only-desktop-flex me-5' style={{width:'auto'}}/>
                </div>
            </div>

        </div>
        <div className='row py-4 overfow-x'>
            <h2 className='font-serif text-black fw-bolder ms-5 overfow-x'>
                What students are learning?
            </h2>
            <Swiperfile/>
        </div>
    </div>
    <Footer/>
    </div> );
}

export default Home;