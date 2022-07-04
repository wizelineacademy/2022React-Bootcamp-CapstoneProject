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
  Grid,
} from "./../../components";
import { getSlug } from "./utils/getSlug";

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
        />
        <Content>
          {isLoading ? <Spinner /> : <Grid productsList={productsList} />}
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
