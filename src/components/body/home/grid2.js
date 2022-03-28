import React from "react";
import "../../css/grid2.css";
import fp from "../../mock/featured-products.json";

export const fprod = fp.results;

export const Grid2 = ({route, onchange}) => {
  return (
   <> 
    <div className="grid2_content">
        {fprod.map((value) => {
        return (
          <div className="responsive-2">
            <div className="gallery">
              <a target="" href={value.sprite} rel="noreferrer">
                <img src={value.data.mainimage.url} alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc" key={value.id}>{value.data.name}</div>
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