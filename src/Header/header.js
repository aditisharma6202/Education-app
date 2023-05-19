import React from 'react';
import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navlinks=()=>{
    
return(<div className='navlinks  py-2 overflow-x'>
    <div className='col-12 overflow-x'>
        <Link to={'/home'} className='nav-link px-4 py-4 d-flex justify-content-between'>
            <div>Dashboard</div>
            <div><i class="bi bi-grid-1x2-fill color-orange"></i></div>
        </Link>
        <Link to={'/home'} className=' nav-link py-4  px-4 d-flex justify-content-between'>
            <div>HOME</div>
            <div><i class="bi bi-house-fill color-orange"></i></div>
        </Link>
        <Link to={'/createcourse'} className=' nav-link py-4 px-4 d-flex justify-content-between'>
            <div >COURSES</div>
            <div><i class="bi bi-book-fill color-orange"></i></div>
        </Link>
        <Link to={'/course'} className='nav-link py-4 px-4 d-flex justify-content-between'>
            <div >ABOUT</div>
            <div ><i class="bi bi-card-text color-orange"></i></div>
        </Link>
        <div className='nav-link px-4 py-4 d-flex justify-content-between'>
            <div>TEAM</div>
            <div ><i class="bi bi-microsoft-teams color-orange"></i></div>
        </div>
    </div>
</div>);
}
function Header() {
    const [toggle , setToggle]= useState(false)
    const [drop , setDrop]=useState(false);
    const handleclick=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    return ( <>
     <div className='header py-1 overflow-x'>

        <div className='justify-content-between align-items-center px-3 only-desktop-flex overflow-x'>
            <div className='col-1'>LOGO</div>
            <div className='col-3'>
                <input className='search form-control rounded-pill py-3'  placeholder='search'/>
               
                
            </div>
            <div className='col-6'>
                <div className='d-flex align-items-center gap-4'>
                <Link to='/home' className='desktop-link'>Home</Link>
            <Link to='/course' className=' desktop-link'>Courses</Link>
            <Link to='' className=' desktop-link'>About</Link>
           
            <Link to='/createcourse' className=' desktop-link'>Create Course</Link>
            <div className='dropdown'>
            <button className='btn p-0 desktop-link ' onMouseEnter={()=>{setDrop(true)}} >Profile <i class="bi bi-chevron-down"></i></button>
            <div className={drop?'drop-menu row':'d-none'} onMouseOut={()=>{setDrop(false)}}>
            <Link className='desktop-link p-2'  onMouseEnter={()=>{setDrop(true)}} >My Courses</Link>
            <Link className='desktop-link p-2'  onMouseEnter={()=>{setDrop(true)}} onMouseOut={()=>{setDrop(false)}}>Edit Profile</Link>
           
            </div>
            </div>
           
           
          <div className='col'>
          <Link className='desktop-link px-2'><i class="bi bi-heart color-orange"></i></Link>
            <Link className=' desktop-link px-2'><i class="bi bi-cart3 color-orange"></i></Link>
            <Link className='desktop-link px-2'><i class="bi bi-bell color-orange"></i></Link>
          </div>
            
            <Link className='col desktop-link px-2 d-flex'>
          
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" 
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
    <div className='only-mobile-flex overflow-x'>
    {toggle && <Navlinks/>}
    </div>
   
    </>);
}

export default Header;