import React from 'react';

import {SliderHolder} from './MainBanner.styled';


import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import { Pagination } from "swiper";


export default function MainBanner({banners}){
    

	return (
     <SliderHolder >
      <div className="content fullContent">
       <Swiper
         pagination={{
           dynamicBullets: true,
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
       >
         {banners.map(b=>{
          return <SwiperSlide key={b.id}>
                     <img src={b.data.main_image?.url} 
                          alt={b.data.main_image?.title} />
                 </SwiperSlide>
         })}
       </Swiper>
      </div>
     </SliderHolder>
	);
}