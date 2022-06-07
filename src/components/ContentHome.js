import React from 'react';
import Slider from './Slider.js'
import Categories from './Categories.js'
import FeaturedProducts from './FeaturedProducts.js'
import { featuredBanners } from '../mocks/en-us/featured-banners.js';
import { productCategories } from '../mocks/en-us/product-categories.js';
import { featuredProducts } from '../mocks/en-us/featured-products.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #f5cb5c;
    height: auto;
    width: 100%;
`;

function ContentHome() {
  return (
    <StyledDiv>
        <Slider featuredBanners = {featuredBanners}/>
        <Categories productCategories = {productCategories}/>
        <FeaturedProducts featuredProducts={featuredProducts} />
    </StyledDiv>
  )
}

export default ContentHome