import { useState } from "react";
import { useProducts } from "./../../utils";
import { Container, ProductsGrid } from "./../../styled-components";
import { HeadingPage, WrapperContent, Content } from "./styled";
import {
  ProductSidebarFilter,
  ProductCard,
  PageControlls,
  Spinner,
  FilterButton,
} from "./../../components";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilter] = useState([]);
  const { data: productsList, isLoading } = useProducts(
    currentPage,
    filters.toString()
  );
  const [showFilter, setShowFilter] = useState(false);

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
          display={showFilter.toString()}
          toggleFilter={toggleFilter}
        />
        <Content>
          {isLoading ? (
            <Spinner />
          ) : (
            <ProductsGrid>
              {productsList?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </ProductsGrid>
          )}
        </Content>
      </WrapperContent>
      <PageControlls
        setCurrentPage={setCurrentPage}
        pages={productsList.totalPages ?? 1}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default ProductList;
