import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFiltered } from "./../../utils";
import { Container } from "./../../styled-components";
import { HeadingPage, WrapperContent, Content } from "./styled";
import {
  ProductSidebarFilter,
  PageControlls,
  Spinner,
  FilterButton,
} from "./../../components";
import { getSlug } from "./utils/getSlug";
import Grid from "./../../components/product/Grid/Grid";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let [searchParams] = useSearchParams();
  const category = getSlug(searchParams);

  const [filters, setFilter] = useState(category);
  const { data: productsList, isLoading } = useFiltered(filters, currentPage);

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
          filters={filters}
          setFilter={setFilter}
          display={showFilter.toString()}
          toggleFilter={toggleFilter}
          setCurrentPage={setCurrentPage}
        />
        <Content>
          {isLoading ? <Spinner /> : <Grid productsList={productsList} />}
        </Content>
      </WrapperContent>
      <PageControlls
        setCurrentPage={setCurrentPage}
        pages={productsList.totalPages ?? 0}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default ProductList;
