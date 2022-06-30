import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
import { formatPrice } from '../../utils/helpers';
import { Wrapper } from './listproductssearch.styled';

function ListProductsSearch() {
  /*  CONTEXT DESTRUCTURING */
  const { search_products: featured } = useFilterContext();

  if (featured.length < 1) {
    return (
      <Wrapper>
        <h1>Search Page</h1>
        <div className="section section-center page">
          <div className="product-center">
            <h5 style={{ textTransform: 'none' }}>
              Sorry, no products matched your search...
            </h5>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Search Page</h1>
      <div className="section section-center page">
        <div className="product-center">
          {featured.map((product) => (
            <article key={product.id}>
              <img src={product.data.mainimage.url} alt={product.data.name} />
              <div>
                <h4>{product.data.name}</h4>
                <h5 className="price">{formatPrice(product.data.price)}</h5>
                <p>{product.data.short_description}...</p>
                <NavLink to={`/product/${product.id}`} className="btn">
                  Details
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ListProductsSearch;
