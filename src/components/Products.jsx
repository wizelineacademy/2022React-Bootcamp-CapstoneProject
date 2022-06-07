import React from "react";
import PropTypes from "prop-types";
import Grid from "../components/common/Grid"
import ProductCard from "../components/common/ProductCard";

const Products = ({ viewType, data }) => {
  return (
    <section className="departments">
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {data?.results?.map((item, index) => (
          <ProductCard
            key={index}
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
  );
};

Products.propTypes = {
  data: PropTypes.object.isRequired,
  viewType: PropTypes.string,
};

export default Products;
