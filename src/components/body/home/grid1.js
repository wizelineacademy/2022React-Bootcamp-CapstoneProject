import React from "react";
import "../../css/grid1.css";
import { Link } from "react-router-dom";

import { useFeaturedCategories } from "../../../utils/hooks/useFeaturedCategory";

export const Grid1 = () => {
  const {data, isLoading} = useFeaturedCategories();

  if(isLoading){
    return (<p>Cargando!!</p>);
  }

  return (
<>
    <h1>Categorias</h1>
    <div className="grid1_content">
        {data.results.map((value) => {
        return (
          <div className="responsive" key={value.id}>
            <div className="gallery" >
              <a target="" href={`/products?category=${value.slugs[0]}`} rel="noreferrer">
                <img src={value.data.main_image.url} 
                 alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc">    
                <Link to={`/products?category=${value.slugs[0]}`}>{value.data.name}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </>    
  );
};