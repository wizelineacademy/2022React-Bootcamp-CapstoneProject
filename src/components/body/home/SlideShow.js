/*
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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
          <Fade easing="ease">
            {data.results.map((value) => {
              return (
                <div className="each-slide">
                <div 
                  key={value.id} 
                  style={{ 'backgroundImage': `url(${value.data.main_image.url})` }}>
                    {value.data.name}
                </div>
              </div>
              );
            })}
          </Fade>
      </div>
      </>
    )
};
*/