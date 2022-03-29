
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import  { Slide } from "react-slideshow-image";
import "../../css/slide.css";

import { useFeaturedBanners } from "../../../utils/hooks/useFeaturedBanners";

export const SlideShow = () => {

  const {data, isLoading} = useFeaturedBanners();

  if(isLoading){
    return (<p>Cargando</p>);
  }
    return (
    <>
      <div className='slide_content'>
          <Slide easing="ease">
            {data.results.map((value) => {
              return (
                <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${value.data.main_image.url})` }}>
                </div>
              </div>
              );
            })}
          </Slide>
      </div>
      </>
    )
};
