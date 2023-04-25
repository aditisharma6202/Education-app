import React from 'react';
import './courses.css'
import Header from '../Header/header';
import Footer from '../footer/footer';
import DataTable from './table';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function Courses() {
    const [data, setData]=useState([]);

   useEffect(()=>{
axios.get('https://dummyjson.com/products').then((Response)=>{setData(Response.data.products)})
   },[])
    return (<div className=' full-body-main'>
        <Header/>
        <div className='my-learning font-serif'>
            
                <div className='text-light'>My learning</div>

            
        </div>
        <div className='col-12 padding-15 bg-light-white pt-3'>
            <h5 className='text-black px-5'>Information Technology</h5>
            <div className='row gap-2 justify-content-left  px-5 '>
                {data.map((data)=>{
                 if(data.category=='smartphones'){
                    return(
                        <div className=' mx-2 col my-3'>
                 
                         <div className='d-flex justify-content-center align-items-right flex-column'>
                             <img src={data.images[0]} height={'120px'} width={'220px'}/>
                             <div >
                                 <h6 className='text-dark pt-2 fw-bold'>{data.title}</h6>
                                 <div className='text-muted font-small fw-light'>{data.category}</div>
                                 <h5 className='fw-bolder text-black'>Rs {data.price}</h5>
                             </div>
     
                         </div>
                  
                 </div>
             
         
                      );
              
                 }
                   
                })}
            
            
            </div>
          

        </div>
        <Footer/>
    </div>  );
}

export default Courses;