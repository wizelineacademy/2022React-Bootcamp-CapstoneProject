import React from 'react';
import {useLocation} from 'react-router-dom'


export function ProductDetail() {
  const location = useLocation();
  const jsonData = location.state;
  console.log({jsonData});

  const { data: { name, images } } = jsonData;

  return (<>
    <h1>{name}</h1>
    {images.map(img => {
      return <img key={img.image.url} src={img.image.url}/>
    })}
  </>
    
  )
}
