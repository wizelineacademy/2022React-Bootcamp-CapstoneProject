import React from "react";
import "../../css/grid2.css";

import { useFeaturedProducts } from "../../../utils/hooks/useFeaturedProducts";


export const Grid2 = ({route, onchange}) => {
  const {data, isLoading} = useFeaturedProducts();
  
  if(isLoading){
    return (<p>Cargando</p>);
  }

  return (
   <> 
    <div className="grid2_content">
        {data.results.map((value) => {
        return (
          <div className="responsive-2" key={value.id}>
            <div className="gallery">
              <a target="" href={value.sprite} rel="noreferrer">
                <img src={value.data.mainimage.url} alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc" >{value.data.name}</div>
            </div>
          </div>
          
        );
      })}
      <div className="divbut">
        <a className="button"
          href="#products"
          onClick={() => onchange('/products')}>View all products</a>
      </div>
    </div>
    </>  
  );
};