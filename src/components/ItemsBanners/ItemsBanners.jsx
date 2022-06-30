/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './itemsbanner.styled';
import { useFilterContext } from '../../context/filter_context';

function ItemsBanner({ slide }) {
  /*  CONTEXT DESTRUCTURING */
  const { categoryActive, filterProducts } = useFilterContext();

  /* SLIDE DESTRUCTURING */
  const {
    data: {
      name,
      main_image: {
        url,
        dimensions: { width, height }
      }
    },
    id
  } = slide;

  return (
    <Wrapper>
      <NavLink
        to={`/products/${name}`}
        onClick={() => {
          categoryActive(id);
          filterProducts();
        }}
      >
        <div>
          <p>{name}</p>
        </div>
        <img src={url} alt={name} width={width} height={height} />
      </NavLink>
    </Wrapper>
  );
}

/* SLIDE PROPTYPES */
ItemsBanner.propTypes = {
  slide: PropTypes.object.isRequired
};

export default ItemsBanner;
