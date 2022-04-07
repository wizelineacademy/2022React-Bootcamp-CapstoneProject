
import React from 'react';
//import { Fade } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";
import "../../css/slide.css";

//import { useFeaturedBanners } from "../../../utils/hooks/useFeaturedBanners";

const images = [
{
url:
"https://images.prismic.io/wizeline-academy/305e2781-5f25-4c00-bef7-1041b49def37_banner-1-2.jpeg"},
{
url:
"https://images.prismic.io/wizeline-academy/d29a4958-97e1-4fe5-b1db-ee9be564a2dd_banner-2-2.jpeg"},
{
url:
"https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg"},
];
export const SlideShow = () => {

  //const {data, isLoading} = useFeaturedBanners();

//  if(isLoading){
//    return (<p>Cargando</p>);
//  }
    return ( 
    <>{/*<div className='slide_content'>
    <Fade easing="ease">
      {data.results.map((value) => {
        return (
          <div className="each-slide" key={value.id}>
          <div style={{ 'backgroundImage': `url(${value.data.main_image.url})` }}>
              {value.data.name}
          </div>
        </div>
        );
      })}
    </Fade>
</div>*/}
      
      <div className='slide_content'>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      </>
    )
};
