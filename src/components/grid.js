import React from "react";

import fp from "../components/mock/featured-products.json";

export const fprod = fp.results;


export const Grid = () => {
  return (
    <div>
        {fprod.map((value) => {
        return (
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href={value.sprite} rel="noreferrer">
                <img src={value.data.mainimage.url} alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc" key={value.id}>{value.data.name}</div>
            </div>
          </div>
        );
      })}

    </div>
  );
};