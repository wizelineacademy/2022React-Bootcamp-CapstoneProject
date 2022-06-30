import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
import { Wrapper } from './singleproduct.styled';
import { formatPrice } from '../../utils/helpers';
import AddToCart from '../AddToCart/AddToCart';
import ProductImages from '../ProductImages/ProductImages';

function SingleProduct() {
  /*  CONTEXT DESTRUCTURING */
  const { single_product: featured } = useFilterContext();

  const {
    name,
    price,
    description,
    stock,
    sku,
    images,
    category,
    tags,
    specs
  } = featured;

  return (
    <Wrapper>
      <h1>Single Product</h1>
      <div className="section section-center page">
        <NavLink to="/" className="btn">
          back to products
        </NavLink>
        <div className=" product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price"> {formatPrice(price)}</h5>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Available : </span>
              {stock} / {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Category : </span>
              {category}
            </p>
            <p className="info">
              <span>Tags : </span>
              {tags.length > 0 ? tags.map((tag) => <p>{tag}</p>) : 'no tags'}
            </p>

            <div className="tableSpec">
              <p className="info">
                <h4>Specs : </h4>
              </p>
              {specs.map((spec) => (
                <div className="specs">
                  <p>
                    <strong>{spec.spec_name}</strong>
                  </p>
                  <p>{spec.spec_value}</p>
                  <hr />
                </div>
              ))}
            </div>

            {stock > 0 && <AddToCart product={stock} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
