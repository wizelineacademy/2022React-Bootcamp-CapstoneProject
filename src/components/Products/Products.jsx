import React from 'react'
import {ProductsContainer} from './Products.styled';

export default function Products({products}) {
    return (
        <div>
            <ProductsContainer>
            <div className="card-container">
                {products.map(product => (
                <div className="card"  
                    style={{ backgroundImage:`url(${product.data.mainimage.url})` }}>
                    <div className="card-text" >
                        <h5>{product.data.name}</h5>
                        <p className="price" >${product.data.price}</p>
                        <p><small>{product.data.category.slug.toUpperCase()}</small></p> 
                    </div>
    
                </div>
                ))}
            </div>
        </ProductsContainer>
        </div>
    )
}
