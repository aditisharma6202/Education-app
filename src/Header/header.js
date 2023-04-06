import React from 'react';
import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navlinks=()=>{
return(<div className='navlinks  py-2'>
    <div className='col-12'>
        <div className='nav-link px-4 py-4 d-flex justify-content-between'>
            <div>Dashboard</div>
            <div><i class="bi bi-grid-1x2-fill color-orange"></i></div>
        </div>
        <div className=' nav-link py-4  px-4 d-flex justify-content-between'>
            <div>HOME</div>
            <div><i class="bi bi-house-fill color-orange"></i></div>
        </div>
        <div className=' nav-link py-4 px-4 d-flex justify-content-between'>
            <div >COURSES</div>
            <div><i class="bi bi-book-fill color-orange"></i></div>
        </div>
        <div className='nav-link py-4 px-4 d-flex justify-content-between'>
            <div >ABOUT</div>
            <div ><i class="bi bi-card-text color-orange"></i></div>
        </div>
        <div className='nav-link px-4 py-4 d-flex justify-content-between'>
            <div>TEAM</div>
            <div ><i class="bi bi-microsoft-teams color-orange"></i></div>
        </div>
    </div>
</div>);
}
function Header() {
    const [toggle , setToggle]= useState(false)
    const handleclick=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    return ( <>
     <div className='header bg-light py-1'>

        <div className='justify-content-between align-items-center px-3 only-desktop-flex'>
            <div className='col-1'>LOGO</div>
            <div className='col-4'>
                <input className='search form-control rounded-pill py-3'  placeholder='search'/>
               
                
            </div>
            <div className='col-5'>
                <div className='d-flex align-items-center'>
                <Link to='' className='col desktop-link'>Home</Link>
            <Link tp='' className='col desktop-link'>Courses</Link>
            <Link to='' className='col desktop-link'>About</Link>
            <Link  to='' className='col desktop-link'>Team</Link>
            {/* <Link to='' className='col desktop-link'>CONTACT</Link> */}
          <div className='col'>
          <Link className='desktop-link px-2'><i class="bi bi-heart btn-orange"></i></Link>
            <Link className=' desktop-link px-2'><i class="bi bi-cart3 btn-orange"></i></Link>
            <Link className='desktop-link px-2'><i class="bi bi-bell btn-orange"></i></Link>
          </div>
           
            <Link className='col desktop-link px-2'><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" 
            className='rounded-circle'/></Link>

           
          

                </div>
           
            </div>
          

        </div>
        <div className='row justify-content-between  only-mobile-flex flex-end p-2'>
         
          <div className='col-5 d-flex align-items-center justify-content-center'>
            
                <div className='col'>LOGO</div>
               
                    <button className='btn' onClick={handleclick}><i class="bi bi-list btn-bold btn-orange"></i></button>
        
          </div>
          <div className='col-5 d-flex align-items-center justify-content-center'>
            <input className='form-control' placeholder='search'/>
          </div>

        </div>
       
    </div>
    <div className='only-mobile-flex'>
    {toggle && <Navlinks/>}
    </div>
   
    </>);
}

export default Header;