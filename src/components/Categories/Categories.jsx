import React from 'react'
import {CardContainer, CategoriesWrapper, Card} from './Categories.styled';
import mock2 from '../../assets/mocks/en-us/product-categories.json';

export default function Categories() {
    const categories = mock2.results;
    return (
        <CategoriesWrapper>
            <CardContainer>
                {categories.map((category, index) => (
                <Card key={index} 
                    style={{ backgroundImage:`url(${category.data.main_image.url})` }}>
                    <div className="card-text" >
                        <h3>{category.data.name}</h3>
                    </div>
                </Card>
                ))}
            </CardContainer>
        </CategoriesWrapper>
    )
};


