import React from 'react'
import SliderStyle from './SliderStyle';
import categoriesData from '../../mocks/en-us/product-categories.json';

const Slider = () => {
    const { results } =  categoriesData;

    const cat = results.map( categorie => (
        <div key={categorie.id} className='info'>
            <img src={categorie.data.main_image.url} alt="" />
            <label htmlFor="" className='descript'>{categorie.data.name}</label>
        </div>
    ));

    return (
        <SliderStyle>
            { cat }
        </SliderStyle>
    )
}

export default Slider