import React from 'react';

import {ProductsHolder} from './ProductsList.styled';
import ProductCard from '../ProductCard/ProductCard';



export default function ProductsList({products,title}){
    

	return (
     <ProductsHolder className="mT60">
       {(title) &&
        <div className="content fullContent">
         <h2 className="sectionTitle"><span>{title}</span></h2>
        </div>
       }
       <div className="content fullContent pT40 flxR flxGrd">
         {products.map(b=>{
           return <ProductCard key={b.id} data={b} />
          })}
       </div>
     </ProductsHolder>
	);
}