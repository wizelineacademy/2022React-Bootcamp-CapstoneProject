import React, {useState, useEffect} from 'react';
import {MainContainer, SlideshowContainer, Slide, Controls, BotonSlide } from './Slideshow.styled';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';

    
export default function Slideshow({banners}) {
    const [ currentImg, setNextImage] = useState(0);



    const nextBanner = () => {
        setNextImage(currentImg + 1)
    }
    useEffect(() => {
        if(currentImg === 3) {
            setNextImage(0)
        } else if (currentImg === -1){
            setNextImage(2)
        }
    }, [currentImg])

    const prevBanner = () => {
        setNextImage(currentImg - 1)
    } 
    

    return (
        <MainContainer>
            <SlideshowContainer>
                <Slide>
                    <a href=".">
                        <img src={banners[currentImg]} alt=""/>
                    </a>
                    <div>
                        <p>15% de descuento en productos de madera</p>
                    </div>
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

