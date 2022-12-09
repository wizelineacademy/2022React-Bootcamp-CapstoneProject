import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// componments
import Page from "../../components/Page";
import { Row, Grid } from "../Products/styled-components";
import { Container, GridItem } from "./styled-components";
import { SpinerLoader } from "../../styled-components/global.styled.component";
import ProductList from "../Products/components/ProductList";
import PaginationSection from "../Products/components/PaginationSection";
import Topbar from "./components/Topbar";
//
import { useSearch } from "../../utils/hooks";
import { startGetSearch } from "../../redux/actions/products";

// ----------------------------------------------------------------------

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const q = searchParams.get("q");
  const { data, isLoading } = useSearch(q);

  useEffect(() => {
    if (!isLoading) {
      dispatch(startGetSearch(data));
    }
  }, [isLoading]);

  const { found } = useSelector((state) => state.products);

  return (
    <Page title={`Results of: ${q} | Ecommerce`}>
      <Container>
        <Row>
          <Grid>
            <GridItem>
              {found.loading ? (
                <SpinerLoader />
              ) : found.results.length > 0 ? (
                <>
                  <Topbar query={q} />
                  <ProductList products={found.results} />
                  <PaginationSection
                    length={found.results.length}
                    count={Math.ceil(found.results.length / 12)}
                    page={found.page}
                  />
                </>
              ) : (
                "No matching results"
              )}
            </GridItem>
          </Grid>
        </Row>
      </Container>
    </Page>
  );
};

export default Search;
