import React from 'react'
import Card from './Card';


const ProductCard = ({ product }) => {
    const { data: productData } = product;

    return (
        <Card>
            <div className='flex '>
                <img src={productData.mainimage.url} alt="" />
                <div className='body'>
                    <h5>{productData.name}</h5>
                    <div className='content'>
                        <h6 className='category'> #{productData.category.slug}</h6>
                        <h6 className='price'>$ {productData.price}</h6>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard