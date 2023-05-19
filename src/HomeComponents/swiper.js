import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';

SwiperCore.use([Navigation, Pagination,Scrollbar,A11y])
function Swiperfile() {
    const [data, setData]=useState([]);
    const [slides, setSlides] = React.useState(0);
 
    const setSlidesPerview = () => {
        setSlides(
          window.innerWidth <= 750
            ? 1
            : window.innerWidth <= 720
            ? 3
            : window.innerWidth <= 900
            ? 4
            : window.innerWidth > 1200
            ? 5
            : 0
        );
      }
    useEffect(()=>{
       
        console.log('window'+window.innerWidth);
        axios.get('https://skill.eviternship.com/getCourse').then((Response)=>{setData(Response.data.courses)
        console.log(data)
    })
         // Initially set the amount of slides on page load
  setSlidesPerview();
  // Add the event listener on component mount
  window.addEventListener("resize", setSlidesPerview);
  // Remove the listener on unmount
  return () => {
    window.removeEventListener("resize", setSlidesPerview);
  };
       
      
           },[])
    return ( <div className='px-4 '>
     <Swiper
      spaceBetween={25}
     
      slidesPerView= {
      slides
      }
      navigation={{clickable:true}}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {data.slice(0,7).map((items)=>{
        
            return(
                <SwiperSlide >
                    <div className='card'>
                        <div className='card-body mx-4'>
                       <h5 className='text-capitalize description text-left'> {items.course_name}</h5>
                       <img src={''} alt='some-image'/>
                       <div className='text-capitalize text-muted font-small description'> {items.description}</div>
                     <div>
                    <div className='mt-1'>Rating <span>{items.rating} <i class="bi bi-star-fill"></i></span></div>
                        </div>  
                        
                    
                       <div className=''>Total Time: <span className='font-small text-danger' >{items.language}</span></div>
                       <div>Price: <span className='text-success'>Rs {items.price}</span></div>
                       <div className='d-flex gap-2'>
                        <div><i class="bi bi-cart"></i></div> 
                        <div> <i class="bi bi-heart"></i></div></div>
                        </div>
                    </div>
                    </SwiperSlide>
            );
        })}
     
     
    </Swiper>
 
    </div> );
}

export default Swiperfile;