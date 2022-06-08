import React, {useState} from 'react';
import {MainContainer, SlideshowContainer, Slide, Controls, BotonSlide } from './Slideshow.styled';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';

export default function Slideshow({banners}) {
    const [ currentImg, setNextImage] = useState(0);

    const nextBanner = () => {
        setNextImage( currentImg => currentImg + 1);
        if(currentImg === banners.length - 1) {
            setNextImage(0);
        }
    };
    const prevBanner = () => {
        setNextImage(currentImg => currentImg - 1);
        if(currentImg === 0){
            setNextImage(banners.length -1);
        }
    };
    return (
        <MainContainer>
            <SlideshowContainer>
                <Slide>
                    <a href=".">
                        <img src={banners[currentImg]} alt="furniture"/>
                    </a>
                </Slide>    
            </SlideshowContainer>
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

