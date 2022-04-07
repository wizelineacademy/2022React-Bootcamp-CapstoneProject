import React from "react";
import { useLocation  } from "react-router-dom";
import { useSearch } from "../utils/hooks/useSearch";

 
export const SearchDetail = () => {
    
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const text = query.get('q');
    const {data, isLoading} = useSearch(text);

    console.log(data);

    if(isLoading){
        return (<p>Cargando</p>);
    }

    return (
      <>
        <h1> Detalle del Producto</h1>
        <h3>ID: {text}</h3>

        {data.results.map((value) => {
            return(
                <div key={value.id}>
                    <h1>{value.data.name}</h1>
           
                    <img src={value.data.mainimage.url} 
                        alt={value.data.name} /> 
                    <p>{value.data.price}</p> 
                    <p>{value.data.short_description}</p>   
                </div>

            );
        })
     }
 
      </>
    )
  };