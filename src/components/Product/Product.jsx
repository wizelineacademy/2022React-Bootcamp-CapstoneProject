import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './products.styled';
import { formatPrice } from '../../utils/helpers';
import Loader from '../Loader/Loader';

function Product({ product }) {
  /*  CONTEXT DESTRUCTURING */
  const {
    filters: { activecategory }
  } = useFilterContext();

  /* STATE OF LOADER */
  const [loader, setLoader] = useState(true);

  /* STATE OF CURRENT CLASS */
  const [currentClass, setCurrentClass] = useState(null);

  /* PRODUCT DESTRUCTURING */
  const {
    data: {
      category: { id, slug },
      mainimage: { url, alt },
      name,
      price
    }
  } = product;

  /* USE EFFECT HOOK TO MEMORIZE THE VALUE OF CATEGROY ID */
  const cid = useMemo(() => id, [id]);

  /* USE EFFECT HOOK TO SWITCH THE ACTIVE CLASS */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const switchStateClass = () => {
        // eslint-disable-next-line no-nested-ternary
        const getChangeClass = activecategory
          ? activecategory.indexOf(cid) !== -1
            ? 'active'
            : null
          : null;
        setCurrentClass(getChangeClass);
      };
      if (activecategory !== undefined) {
        switchStateClass();
      }
    }

    return () => {
      unmounted = true;
    };
  }, [activecategory, cid]);

  /* USE EFFECT HOOK TO LOAD */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }

    return () => {
      unmounted = true;
    };
  }, [activecategory]);

  /* PRODUCT COMPONENT */
  return (
    <Wrapper className={currentClass}>
      {loader ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="container">
            <img src={url} alt={alt} />
          </div>
          <div className="details">
            <h5>{name}</h5>
            <p>{slug}</p>
          </div>
          <div className="counter">{formatPrice(price)}</div>
          <NavLink to="/cart" className="btn">
            add to cart
          </NavLink>
          <NavLink to={`/product/${product.id}`} className="btn">
            details
          </NavLink>
        </>
      )}
    </Wrapper>
  );
}

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object.isRequired
};

export default Product;
