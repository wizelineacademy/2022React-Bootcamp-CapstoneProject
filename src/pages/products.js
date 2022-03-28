import React from "react";
import prod from "../components/mock/products.json";
import prodCat from "../components/mock/product-categories.json";
import '../components/css/card.css';
import '../components/css/sidebar.css';
import '../components/css/products.css';

export const categorias = prodCat.results;
export const p = prod.results;

export const Product = () => {
  return (
    <>

    <div className="sidebar">
    {
      categorias.map((value)=>{
        return(
          <a href="#a">{value.data.name}</a>    
        );
      })
    }
    </div>
{/*    <div className="container">
      <div className="row">
        <h1>This is the Product List Page</h1>
        {p.map((value) => {
          return (
            <div className="column">
              <div className="card">
                <img src={value.data.mainimage.url} alt={value.data.name} />
                <div className="cont">
                  <div className="product-text">
                    <h1>{value.data.name}</h1> 
                    <p>$ {value.data.price} </p> 
                  </div>
                  
                  <button type="button" className="boton_comprar">Comprar Ahora</button>
                  <button type="button" className="boton_agregar">Agregar al Carrito</button>
                </div>
              </div>
              <div className="product-img">
                <img src={value.data.mainimage.url} alt={value.data.name} height="420" width="327"/>
              </div>
              <div className="">
                <div className="">
                  <h1>{value.data.name}</h1>
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
      </div>
    </div>*/}

    <div className="container"> 
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
    </div>
    </>
  );
};

//export default Product;