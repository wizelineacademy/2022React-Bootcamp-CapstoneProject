import React from 'react'
import Categories from '../components/homepage/Categories'
import Products from '../components/homepage/Products'
import Slider from '../components/homepage/Slider'
import '../stylesheets/homepage/content.scss'

function ContentContainer() {
  return (
    <div className='content-container'>
        <Slider />
        <Categories />
        <Products/>
    </div>
  )
}

export default ContentContainer