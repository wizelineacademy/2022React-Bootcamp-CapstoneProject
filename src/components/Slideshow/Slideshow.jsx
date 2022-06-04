import React from 'react';
import {MainContainer, SlideshowContainer, Slide, Controls, BotonSlide } from './Slideshow.styled';
import img1 from '../../assets/sofa.jpg';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';
export default function Slideshow() {
    return (
        <MainContainer>
            <SlideshowContainer>
                <Slide>
                    <a href=".">
                        <img src={img1} alt=""/>
                    </a>
                    <div>
                        <p>15% de descuento en productos de madera</p>
                    </div>
                </Slide>    
            </SlideshowContainer>
            <Controls>
                <BotonSlide right>
                    <RightArrow/>
                </BotonSlide>
                <BotonSlide>
                    <LeftArrow/>
                </BotonSlide>
            </Controls>
        </MainContainer>
    )
}
