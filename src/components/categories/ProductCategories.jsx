import React from 'react';
import info from './product-categories.json'


export const ProductCategories = () => {

    const newData = JSON.parse(JSON.stringify(info.results))
    console.log(newData)

    return (
    
        <div className='categories-main'>
            {
                newData.map(( { data: { main_image,name }  } ,results,categoriesIndex )=> (
                   <div className = 'categories-container' >
                       <img 
                       className='categories-images '
                       key={categoriesIndex}
                       alt='' 
                       src={main_image.url}/
                       >
                        <p className='categories-name'>{ name }</p>
                   </div>
                )
               ) }
        </div>
             )
             
         }
