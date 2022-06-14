import { Container, ProductsGrid } from "./../../styled-components";
import { useState, useEffect } from "react";
import { createProductAdapter } from "./../../adapters/featured-products";
import Products from "../../mocks/en-us/products.json";
import {
  ProductSidebarFilter,
  ProductCard,
  PageControlls,
} from "./../../components/product";
import { HeadingPage, WrapperContent, Content } from "./styled";
import { getFilterProducts } from "./../../utils/getFilterProducts";
import Spinner from "../../components/ui/Spinner/Spinner";
import { FilterButton } from "./../../components/common";

const ProductList = () => {
  const [filters, setFilter] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

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

  const toggleFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  return (
    <Container>
      <HeadingPage>This is the Product List Page</HeadingPage>

      <FilterButton toggleFilter={toggleFilter} />
      <WrapperContent>
        <ProductSidebarFilter
          setFilter={setFilter}
          display={showFilter}
          toggleFilter={toggleFilter}
        />
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
      <PageControlls />
    </Container>
  );
};

export default ProductList;
