import React, {useState} from 'react';
import {MainContainer, SlidesContainer, Slide, Controls, BotonSlide } from './Slideshow.styled';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';
import mock1 from '../../assets/mocks/es-mx/featured-banners.json';

export default function Slideshow() {
    const urlBanners = mock1.results.map(result => result.data.main_image.url);

    const [currentImg, setNextImage] = useState(0);

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
        </MainContainer>
    )
};

