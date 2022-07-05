import { Container, SectionHeading } from "../../styled-components";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "./../../utils";
import { useState } from "react";
import { SpinnerBounce, PageControlls } from "../../components";
import Grid from "./../../components/product/Grid/Grid";

const SearchResultsPage = () => {
  const [serchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: searchResults, isLoading } = useSearch(
    serchParams.get("q"),
    currentPage
  );

  return (
    <Container>
      <SectionHeading style={{ marginTop: "30px" }}>
        Search Results:
      </SectionHeading>
      {isLoading ? <SpinnerBounce /> : <Grid productsList={searchResults} />}
      <PageControlls
        setCurrentPage={setCurrentPage}
        pages={searchResults.totalPages ?? 0}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default SearchResultsPage;
