import React from "react";
import "../../css/grid1.css";
import pc from "../../mock/product-categories.json";

export const pcat = pc.results;


export const Grid1 = () => {
  return (
<>
    <div className="grid1_content">
        {pcat.map((value) => {
        return (
          <div className="responsive">
            <div className="gallery">
              <a target="" href={value.data.name} rel="noreferrer">
                <img src={value.data.main_image.url} 
                 alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc" key={value.id}>{value.data.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  </>    
  );
};