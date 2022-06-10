import React from 'react'
import {SidebarWrapper, CategoriesLinks} from './ProductList.styled';
import mockProducts from '../../assets/mocks/en-us/product-categories.json';

export default function ProductList() {
    const categories = mockProducts.results;
    return (
        <SidebarWrapper>
            {categories.map((category,index) =>(
            <CategoriesLinks>
                <ol>{category.data.name}</ol>
            </CategoriesLinks>
                ))}    
        </SidebarWrapper>
    )
};
