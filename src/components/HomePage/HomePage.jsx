import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import { Button } from '../Products/Products.styled';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <Slideshow/>
            <Categories/>
            <Products/>  
            <Link to="product-list">
                <Button 
                className="btn-container" 
                >View all products
                </Button>
            </Link>
        </div>
    )
}

