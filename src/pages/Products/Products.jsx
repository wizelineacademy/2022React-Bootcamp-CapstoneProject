import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Grid,
  GridItem,
  ProductsContainer,
  GridItemProducts,
  PaginationContainer,
  PaginationInfo,
  Pagination,
  PaginationList,
  PaginationButton,
  PaginationSVG,
} from "./styled-components/products.styled.component";
import SidebarCategories from "./components/SidebarCategories";
import ProductCard from "./components/ProductCard";
import { SpinerLoader } from "../../styled-components/global.styled.component";

import products from "../../mocks/featured-products.json";

const Products = () => {
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  function checkCategoryOn(product) {
    return categoriesFilter[product.data.category.id] === true;
  }

  const isActiveFilter = () => {
    let active = false;

    Object.keys(categoriesFilter).forEach((key) => {
      // console.log(key, categoriesFilter[key])
      if (categoriesFilter[key] === true) {
        active = true;
      }
    });

    return active;
  };

  useEffect(() => {
    if (isActiveFilter) {
      setProductsFilter(() => products.results.filter(checkCategoryOn));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesFilter]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <Row>
        <Grid>
          <GridItem>
            <SidebarCategories
              categoriesFilter={categoriesFilter}
              setCategoriesFilter={setCategoriesFilter}
            />
          </GridItem>

          <GridItemProducts>
            {loading ? (
              <SpinerLoader />
            ) : (
              <>
                <ProductsContainer>
                  {isActiveFilter()
                    ? productsFilter.map((product) => (
                        <ProductCard
                          key={product.id}
                          image={product.data.mainimage.url}
                          alt={product.data.mainimage.alt}
                          name={product.data.name}
                          price={product.data.price}
                          category={product.data.category.slug}
                        />
                      ))
                    : products.results.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          image={product.data.mainimage.url}
                          alt={product.data.mainimage.alt}
                          name={product.data.name}
                          price={product.data.price}
                          category={product.data.category.slug}
                        />
                      ))}
                </ProductsContainer>
                <PaginationContainer>
                  <PaginationInfo>
                    Showing{" "}
                    {isActiveFilter()
                      ? productsFilter.length
                      : products.results.length}
                    {"\u00A0"}results
                  </PaginationInfo>
                  <Pagination>
                    <PaginationList>
                      <li>
                        <PaginationButton className="deactivate">
                          <PaginationSVG>
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                          </PaginationSVG>
                        </PaginationButton>
                      </li>
                      <li>
                        <PaginationButton className="active">
                          1
                        </PaginationButton>
                      </li>
                      <li>
                        <PaginationButton>2</PaginationButton>
                      </li>
                      <li>
                        <PaginationButton>3</PaginationButton>
                      </li>
                      <li>
                        <PaginationButton>
                          <PaginationSVG>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                          </PaginationSVG>
                        </PaginationButton>
                      </li>
                    </PaginationList>
                  </Pagination>
                </PaginationContainer>
              </>
            )}
          </GridItemProducts>
        </Grid>
      </Row>
    </Container>
  );
};

export default Products;
