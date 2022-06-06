import React from 'react';

import {SliderHolder} from './CardSlider.styled';


import { Swiper, SwiperSlide } from "swiper/react/swiper-react";



export default function CardSlider({cards,title}){
    

	return (
     <SliderHolder className="mT60">
       {(title) &&
        <div className="content fullContent">
         <h2 className="sectionTitle"><span>{title}</span></h2>
        </div>
       }
       <div className="content fullContent pT40">
         <Swiper
           spaceBetween={30}
           slidesPerView={4.6}
           loop={true}
           className="mySwiper"
           breakpoints={{
             320: {
               slidesPerView: 2.6,
             },
             720: {
               slidesPerView: 3.6,
             },
             1040: {
               slidesPerView: 4.6,
             },
           }}>
           {cards.map(b=>{
            return <SwiperSlide key={b.id}>
                       <img src={b.data.main_image?.url} 
                            alt={b.data.main_image?.title} />
                       <h4 className="txtC">{b.data.name}</h4>
                   </SwiperSlide>
           })}
         </Swiper>
       </div>
     </SliderHolder>
	);
}