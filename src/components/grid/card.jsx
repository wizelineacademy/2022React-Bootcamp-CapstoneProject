import React from 'react';
import info from './featured-products.json'


export const Card = () => {

    const newData = JSON.parse(JSON.stringify(info.results))
    console.log(newData)

    return (
    
        <div className = 'grid-container' >
            {
                newData.map(( cards,cardIndex )=> (
                    <div className='single-furniture'>
                        <img className='image-furniture'
                            key={cardIndex} src={cards.data.images[0].image.url}
                            alt='furniture' />
                        <div className='product-info'>
                            < p className='product-name'>{cards.data.name}</p>
                            <p>{cards.data.category.type.toUpperCase()}</p>
                            <p className='price'>${cards.data.price}</p>
                        </div>

                    </div>
                )
               ) }
        </div>
             )
             
         }
