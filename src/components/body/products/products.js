import React from "react";
import prod from "../../mock/products.json";
import '../../css/card.css';

export const p = prod.results;

const Product = () => {
  return (
    <>
    
      <h1>This is the Product List Page</h1>
      {p.map((value) => {
        return (
          <div className="wrapper">
            <div className="product-img">
              <img src={value.data.mainimage.url} alt={value.data.name} height="420" width="327"/>
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{value.data.name}</h1>
                <h2>by Capstone Project Store</h2>
                <p>{value.data.short_description}</p>
              </div>
              <div className="product-price-btn">
                <p><span>{value.data.price}</span>$</p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
    
  );
};

export default Product;