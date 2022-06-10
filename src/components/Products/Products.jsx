import React from 'react'
import {ProductsWrapper, CardContainer,Card, CardText } from './Products.styled';
import mock3 from '../../assets/mocks/en-us/featured-products.json';

export default function Products() {
    const products = mock3.results;
    return (
            <ProductsWrapper>
                <CardContainer>
                {products.map((product, index) => {
                    const productDetail = product.data;
                    return <Card 
                        key={productDetail.sku}
                        style={{ backgroundImage:`url(${productDetail.mainimage.url})` }}>
                        <CardText>
                            <h4 className="prod-name">{productDetail.name}</h4>
                            <p className="price" >${productDetail.price}</p>
                            <p><small>{productDetail.category.slug}</small></p> 
                        </CardText>
                    </Card>
                })}
                </CardContainer>
                
            </ProductsWrapper>
    )
};
