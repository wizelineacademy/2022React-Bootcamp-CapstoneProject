import React from "react";
import PropTypes from "prop-types";

import { LIST_TYPE } from "../utils/constants";

import Grid from "../components/common/Grid";
import ProductCard from "../components/common/ProductCard";
import NotFound from "../components/common/NotFound";
import Pagination from "../components/common/Pagination";

const Products = ({ viewType, data }) => {
  return data.length > 0 ? (
    renderProductsGrid(viewType, data)
  ) : (
    <NotFound text="Without Products" />
  );
};

const renderProductsGrid = (viewType, data) => {
  return (
    <>
      <section className="departments">
        <Grid col={5} mdCol={2} smCol={1} gap={20}>
          {data?.map((item) => (
            <ProductCard
              key={item.id}
              pincipalImage={item.data.mainimage.url}
              secondImage={item.data?.images[0]?.image?.url}
              name={item.data.name}
              price={item.data.price}
              slug={item?.slugs[0]}
              alt={item.data.mainimage.alt}
            />
          ))}
        </Grid>
      </section>

      {viewType === LIST_TYPE.PRODUCT_LIST && <Pagination />}
    </>
  );
};

Products.propTypes = {
  data: PropTypes.array.isRequired,
  viewType: PropTypes.string,
};

export default Products;
