import React, {useState, useEffect} from 'react';
import {MainContainer, SlidesContainer, Slide, Controls, BotonSlide } from './Slideshow.styled';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';
import {useFeaturedBanners} from '../../utils/hooks/useFeaturedBanners';

export default function Slideshow() {
    const {data, isLoading} = useFeaturedBanners();
    const [urlBanners, setUrlBanners] = useState([]);
    const [currentImg, setNextImage] = useState(0);
    useEffect(() => {
        if(data.results){
            setUrlBanners(data.results.map(result => result.data.main_image.url));
        }
    }, [data])
    const nextBanner = () => {
        setNextImage( currentImg => currentImg + 1);
        if(currentImg === urlBanners.length - 1) {
            setNextImage(0);
        }
    };
    const prevBanner = () => {
        setNextImage(currentImg => currentImg - 1);
        if(currentImg === 0){
            setNextImage(urlBanners.length -1);
        }
    };
    return (
        <MainContainer>
            {!isLoading && (
            <>
             <SlidesContainer>
             <Slide>
                 <a href=".">
                     <img src={urlBanners[currentImg]} alt="furniture"/>
                 </a>
             </Slide>    
         </SlidesContainer>
         <Controls>
             <BotonSlide right onClick={nextBanner}>
                 <RightArrow />
             </BotonSlide>
             <BotonSlide left onClick={prevBanner}>
                 <LeftArrow/>
             </BotonSlide>
         </Controls>
         </>
            )}
            
        </MainContainer>
    )
};

