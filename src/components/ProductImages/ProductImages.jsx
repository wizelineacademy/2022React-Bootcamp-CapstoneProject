/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './productimages.styled';

function ProductImages() {
  /*  CONTEXT DESTRUCTURING */
  const { single_product: featured } = useFilterContext();

  const { images, mainimage } = featured;

  const [main, setMain] = useState(images);

  const [firstImage, setFirstImage] = useState(true);

  return (
    <Wrapper>
      <img src={firstImage ? mainimage : main} alt="main" className="main" />
      <div className="gallery">
        {images.map((image) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <img
            src={image.image.url}
            alt={image.image.alt}
            key={image.image.alt}
            onClick={() => {
              setMain(image.image.url);
              setFirstImage(false);
            }}
            className={`${image.image.url === main.url ? 'active' : null}`}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default ProductImages;
