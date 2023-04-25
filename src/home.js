import React from 'react';
import Header from './Header/header';
import Footer from './footer/footer';
import signup from './images/signup.jpg';
function Home() {
    return ( <>
    <Header/>
    <div className='head-margin'>
        <div className='row mx-3 justify-content-around align-items-center'>
            <div className='col-md-4 col-12 '>
                <div className='card extra-shadow'>
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
    </div>
    <Footer/>
    </> );
}

export default Home;