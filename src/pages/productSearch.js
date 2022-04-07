import React from "react";
import { useParams  } from "react-router-dom";
import {useSearch} from '../utils/hooks/useSearch'

 
export const ProductDetail = () => {
    
    let { id } = useParams();
    const {data, isLoading} = useProductId(id);

    if(isLoading){
        return (<p>Cargando</p>);
    }

    return (
      <>
        <h1> Detalle del Producto</h1>
        <h3>ID: {id}</h3>

        {data.results.map((value) => {
            return(
                <div key={value.id}>
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