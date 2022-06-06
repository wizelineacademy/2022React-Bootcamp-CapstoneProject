import React from 'react';

import {SliderHolder} from './MainBanner.styled';


import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import SwiperCore, { Navigation, Pagination } from "swiper";


export default function MainBanner({banners}){
    

	return (
     <SliderHolder>
       <Swiper
         pagination={{
           dynamicBullets: true,
           clickable: true,
         }}
        
         modules={[Pagination]}
         className="mySwiper content fullContent"
       >
         {banners.map(b=>{
          return <SwiperSlide key={b.id}>
                     <img src={b.data.main_image?.url} 
                          alt={b.main_image?.title} />
                 </SwiperSlide>
         })}
       </Swiper>
     </SliderHolder>
	);
}