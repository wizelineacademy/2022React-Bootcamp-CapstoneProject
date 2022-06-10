import React from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react";

import { Carousel, SliderItem } from "./Slider.style";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";

const Slider = ({ banners }) => {
  return (
    <Carousel modules={[Navigation]} spaceBetween={10} navigation rewind>
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <SliderItem
            key={banner.data.title}
            alt={banner.data}
            src={banner.data.main_image.url}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Slider;
