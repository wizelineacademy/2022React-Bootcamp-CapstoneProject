import React from 'react'

import Categories from '../components/homepage/Categories.js'
import Products from '../components/homepage/Products.js'
import Slider from '../components/homepage/Slider.js'

import ProductsData from '../mocks/en-us/featured-products.json'

import '../stylesheets/homepage/content.scss'

function HomepageContainer({ data }) {

    return (
        <div className='content-container'>
            <Slider />
            <Categories />
            <Products ProductsData={ProductsData} />
        </div>
    )
}

export default HomepageContainer