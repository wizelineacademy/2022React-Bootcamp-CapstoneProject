import React from "react";
import { useParams  } from "react-router-dom";
import { useProductId } from "../utils/hooks/useProduct_id";

 
export const ProductDetail = () => {
    
    let { id } = useParams();
    console.log(id);
    const {data, isLoading} = useProductId();

    console.log(data.results);

    if(isLoading){
        return (<p>Cargando</p>);
    }

    return (
      <>
        <h1> Detalle del Producto</h1>
        <h3>ID: {id}</h3>

        {data.results.map((value) => {
            return(
                <div>
                    <h1>{value.data.name}</h1>
                 {/*   <img src={value.data.images.image.url} />*/ }
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