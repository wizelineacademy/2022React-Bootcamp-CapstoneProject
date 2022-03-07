import FeaturedBanners from '../../../mocks/en-us/featured-banners.json';
import { Banner } from './banner.js';
import { useState } from 'react';
import styled from "styled-components";

const mocks = FeaturedBanners.results;

const SliderStyled = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    .sliderButton {
        border: none;
        background: #3d1d0f;
        color: white;
        padding: 10px;
        font-size: 20px;
    }
    .bannerWrapper {
        width: 100%;
    }
`
export const Slider = () => {
    const imageArray = mocks.map((image, i) => {
        return <Banner n={i} key={FeaturedBanners.results[i].id}/>;
    })
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectNewImage = (index, imageArray, next = true) => {
        const condition = next ? selectedIndex < imageArray.length - 1 : selectedIndex > 0;
        const nextConditon = condition ? selectedIndex + 1 : 0;
        const prevCondition = condition ? selectedIndex - 1 : imageArray.length - 1;
        const nextIndex =  next ? nextConditon : prevCondition; 
        setSelectedIndex(nextIndex);
    }

    const previous = () => {
        selectNewImage(selectedIndex, imageArray, false);
    }
    const next = () => {
        selectNewImage(selectedIndex, imageArray, true);
    }
   
    return (
        <SliderStyled>
            <button className="sliderButton" onClick={previous}>{"<"}</button>
            <div className="bannerWrapper">
                <Banner n={selectedIndex}/>
            </div>
            <button className="sliderButton" onClick={next}>{">"}</button>
        </SliderStyled>
    )
}

