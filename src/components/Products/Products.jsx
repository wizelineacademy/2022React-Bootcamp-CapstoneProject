import React from 'react'
import {ProductsWrapper, CardContainer,Card, CardText } from './Products.styled';

export default function Products({products}) {
    return (
            <ProductsWrapper>
                <CardContainer>
                {products.map((product, index) => (
                    <Card 
                        key={index}  
                        style={{ backgroundImage:`url(${product.data.mainimage.url})` }}>
                        <CardText>
                            <h4 className="prod-name">{product.data.name}</h4>
                            <p className="price" >${product.data.price}</p>
                            <p><small>{product.data.category.slug.toUpperCase()}</small></p> 
                        </CardText>
                    </Card>
                ))}
                </CardContainer>
                
            </ProductsWrapper>
    )
};
