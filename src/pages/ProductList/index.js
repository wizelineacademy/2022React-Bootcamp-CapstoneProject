import { Container } from "./../../styled-components";
import { useState, useEffect } from "react";
import { createProductAdapter } from "./../../adapters/featured-products";
import Products from "../../mocks/en-us/products.json";
import { ProductSidebarFilter } from "./../../components/product";
import { HeadingPage, WrapperContent, Content } from "./styled";
import { getFilterProducts } from "./../../utils/getFilterProducts";
import styled from "@emotion/styled";
import { ProductCard } from "./../../components/product";
import Spinner from "../../components/ui/Spinner/Spinner";

export const ProductsGrid = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductList = () => {
  const [filters, setFilter] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let loadingInterval;

  useEffect(() => {
    load();
    return () => clearInterval(loadingInterval);
    //eslint-disable-next-line
  }, [filters]);

  const load = () => {
    setIsLoading(true);
    const productData = createProductAdapter(Products);
    setProductList(getFilterProducts(productData, filters));
    loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleToggle = (e) => {
    const target = e.target;
    const value = target.value.toLowerCase().replace(/ /g, "");
    const checked = target.checked;

    if (checked) {
      setFilter((filters) => [...filters, value]);
    } else {
      setFilter((filters) => filters.filter((filter) => filter !== value));
    }
  };

  return (
    <Container>
      <HeadingPage>This is the Product List Page</HeadingPage>
      <WrapperContent>
        <ProductSidebarFilter handleToggle={handleToggle} />
        <Content>
          {isLoading ? (
            <Spinner />
          ) : (
            <ProductsGrid>
              {productList.map((product) => (
                <ProductCard {...product} />
              ))}
            </ProductsGrid>
          )}
        </Content>
      </WrapperContent>
    </Container>
  );
};

export default ProductList;
