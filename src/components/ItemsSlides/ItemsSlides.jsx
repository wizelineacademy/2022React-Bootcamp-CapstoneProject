import PropTypes from 'prop-types';
import { Wrapper } from './itemsslides.styled';

function ItemsSlides({ slide }) {
  /* SLIDE DESTRUCTURING */
  const {
    data: {
      title,
      main_image: {
        url,
        dimensions: { width, height }
      }
    }
  } = slide;

  return (
    <Wrapper>
      <img src={url} alt={title} width={width} height={height} />
    </Wrapper>
  );
}

/* SLIDE PROPTYPES */
ItemsSlides.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  slide: PropTypes.object.isRequired
};

export default ItemsSlides;
