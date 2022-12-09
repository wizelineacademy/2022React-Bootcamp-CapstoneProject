import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import ProductCard from "../Products/components/ProductCard";
import { Container } from "./styled-components/product.styled.component";
import { SpinerLoader } from "../../styled-components/global.styled.component";
//
import { useFeaturedProducts } from "../../utils/hooks";
import { startGetHome } from "../../redux/actions/products";

// ----------------------------------------------------------------------

const ProductsGrid = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFeaturedProducts();

  useEffect(() => {
    if (!isLoading) {
      dispatch(startGetHome(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const { home } = useSelector((state) => state.products);

  return (
    <Container>
      {home.loading ? (
        <SpinerLoader />
      ) : (
        home.results &&
        home.results.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Container>
  );
};

export default ProductsGrid;
