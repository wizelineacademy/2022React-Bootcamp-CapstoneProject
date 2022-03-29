import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { useProductId } from "../utils/hooks/useProduct_id";

 
export const ProductDetail = () => {
    
    let { id } = useParams();
    const {data, isLoading} = useProductId(id);

    console.log(data);

    if(isLoading){
        return (<p>Cargando</p>);
    }

    return (
      <>
        <h1> Detalle del Producto</h1>
        <h3>ID: {id}</h3>

        {data.results.map((value) => {
            return(<h1>{value.data.name}</h1>);
        })
        }
        
      </>
    )
  };