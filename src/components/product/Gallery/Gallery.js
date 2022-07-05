import { useState } from "react";
import { createGalleryAdapter } from "./adapters/image-gallery";
import {
  GalleryContainer,
  Prev,
  Next,
  CurrentImage,
  GridImage,
  Image,
} from "./styled";
import PropTypes from "prop-types";

const Gallery = ({ gallery }) => {
  const images = createGalleryAdapter(gallery);
  const [currentImage, setCurrentImage] = useState(0);
  let max = images.length - 1 ?? 0;

  const handleControll = (e) => {
    const obj = e.target.name;
    obj === "prev"
      ? setCurrentImage((currentImage) =>
          currentImage <= 0 ? max : currentImage - 1
        )
      : setCurrentImage((currentImage) =>
          currentImage >= max ? 0 : currentImage + 1
        );
  };

  return (
    <GalleryContainer className="active">
      <CurrentImage>
        <Prev name="prev" onClick={(e) => handleControll(e)} />
        <Next name="next" onClick={(e) => handleControll(e)} />
        <img src={images[currentImage].url} alt="main" />
      </CurrentImage>
      <GridImage>
        {images?.map(({ id, url }, i) => (
          <Image
            onMouseEnter={() => setCurrentImage(i)}
            onClick={() => setCurrentImage(i)}
            current={currentImage === i ? "true" : "false"}
            key={id}
          >
            <img src={url} alt={url} />
          </Image>
        ))}
      </GridImage>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Gallery;
