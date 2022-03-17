import React from 'react';
import info from './featured-products.json'


export const Card = () => {

    const newData = JSON.parse(JSON.stringify(info.results))
    console.log(newData)

    return (
    
        <div className = 'grid-container' >
            {
                newData.map((cards,i )=> {
        
                    return   (
                         <div className='single-furniture'>
                            <img  className='image-furniture'
                            key={i} src={ cards.data.images[0].image.url } 
                            alt='furniture'
                            />    
                        </div>
                    )   
                    }
               ) }
        </div>
             )
             
         }
