import React from "react";
import '../components/css/card.css';
import '../components/css/sidebar.css';
import '../components/css/products.css';
import { Link, useLocation } from "react-router-dom";

import { useFeaturedCategories } from "../utils/hooks/useFeaturedCategory";
import { useProducts } from "../utils/hooks/useProducts";

export const Product = () => {
  
  const {search} = useLocation(); 

  const {data:dataCategory, isLoading:isLoadingCategories} = useFeaturedCategories();
  const {data:dataProduct, isLoading:isLoadingProducts} = useProducts();

  if(isLoadingCategories || isLoadingProducts){
    return (<p>Cargando</p>);
  }
  //Obtener query parameters
  const queryParameter = new URLSearchParams(search);
  const categoria = queryParameter.get('category');

  let resultado;
  if (categoria){
    resultado = dataProduct.results.filter(prod => prod.data.category.slug === categoria.toLowerCase());
  }else{
    resultado = dataProduct.results;
  }

//  Prod(pro){
//    if(pro.category.slug === categoria){
//      return true;
//    }
//  }
  
  return (
    <>
    {/*Categorias*/}
    <div className="sidebar">
    {
      dataCategory.results.map((value)=>{
        return(
          <Link to={`/products?category=${value.slugs[0]}`}>{value.data.name}</Link> 
        );
      })
    }
    </div>
  {/*Productos*/}
    
    <div className="container"> 
      <h1>This is the Product List Page</h1>
      
      {resultado.map((value) => {
        return (
          <div className="wrapper">
            <div className="product-img">
              <img src={value.data.mainimage.url} alt={value.data.name} height="420" width="327"/>
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1> <Link to={`/products/${value.id}`}>{value.data.name}</Link> </h1>
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