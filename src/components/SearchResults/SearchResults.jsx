import React from 'react';
import {useParams} from 'react-router-dom';
import {useProducts} from '../../utils/hooks/useProducts';
import {ProductsWrapper, CardContainer,Card, CardText} from '../Products/Products.styled';
export default function SearchResults() {
    let { product } = useParams();
    const {data, isLoading} = useProducts(product)
    
    console.log(data)
    
    return (
        <ProductsWrapper>
            {!isLoading && (
                <CardContainer>
                {data.results.map((product, index) => {
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
            )}
            
        </ProductsWrapper>
    )
}
