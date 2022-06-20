import React from 'react';
import { SingleProduct, Details, SpecsContainer } from './ProductDetail.styled'
import logo from '../../logo-fur.jpg';
export default function ProductDetail() {

    return (
        <SingleProduct>
            <div className="row">
                <img src={logo} alt="gallery"/>
            </div>
            <Details>
                <div className="product-card">
                    <h1>Titulo del producto</h1>
                    <label className="price">$ 1500</label>
                    <label className="sku-code">Codigo SKU</label>
                    <label className="slug">Categoria</label>
                    <div className="tag-container">
                        <span>tag</span>
                    </div>
                    <p className="description">Lorem  molestias velit repellendus voluptatem dolore 
                        aspernatur dignissimos cumque officiis nisi tempora,
                        llendus sequi ad quisexplicabo 
                        ccusantium asperiores facilis repellendus.</p>
                <input type="number"placeholder="Numbers"/>
                    <button className="add-cart"> <span>Add to cart</span></button>
                    <button className="add-cart"><span>Buy now</span></button>
                </div>
            </Details>
            <SpecsContainer>
                <h2>Caracteristics:</h2>
                <table>
                    <tr>
                        <th><span>SpecName</span></th>
                        <td><span>SpecValue</span></td>
                    </tr>
                    <tr>
                        <th><span>SpecName</span></th>
                        <td><span>SpecValue</span></td>
                    </tr>
                    <tr>
                        <th><span>SpecName</span></th>
                        <td><span>SpecValue</span></td>                       
                    </tr>
                    
                </table>
            </SpecsContainer>
                
        </SingleProduct>
    )
}
