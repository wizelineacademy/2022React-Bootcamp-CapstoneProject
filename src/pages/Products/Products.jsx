import React, { useState, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// components
import Page from "../../components/Page";
import {
  Container,
  Row,
  Grid,
  GridItem,
  GridItemProducts,
} from "./styled-components/products.styled.component";
import SidebarCategories from "./components/SidebarCategories";
import { SpinerLoader } from "../../styled-components/global.styled.component";
import ProductList from "./components/ProductList";
import PaginationSection from "./components/PaginationSection";
//
import { useListProducts } from "../../utils/hooks";
import { useProductCategories } from "../../utils/hooks";
import { useQueryParam } from "../../utils/hooks";
import { startGetList } from "../../redux/actions/products";

// ----------------------------------------------------------------------

const Products = () => {
  const dispatch = useDispatch();
  const { data: categories, isLoading: isLoadingCategories } =
    useProductCategories();
  const { data, isLoading } = useListProducts();
  let [filter, setFilter] = useQueryParam("filter");

  if (!filter) {
    filter = { categories: [] };
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(startGetList(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const { list } = useSelector((state) => state.products);

  function checkCategoryOn(product) {
    return filter.categories.includes(product.data.category.slug.toLowerCase());
  }

  const isActiveFilter = () => {
    return filter.categories.length > 0 ? true : false;
  };

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when isActiveFilter is false
    if (!isActiveFilter()) {
      return list.results;
    }
    return list.results.filter(checkCategoryOn);
  }

  // Avoid duplicate function calls with useMemo
  // eslint-disable-next-line
  let filteredList = useMemo(getFilteredList, [list.results, filter]);

  const [filterFormik, setFilterFormik] = useState([]);
  useEffect(() => {
    if (filter.categories.length > 0) {
      setFilterFormik(filter);
    } else {
      if (filterFormik.length === 0 || filterFormik.categories?.length > 0) {
        setFilterFormik({ categories: [] });
      }
    }

    // eslint-disable-next-line
  }, [filter]);

  const formik = useFormik({
    initialValues: {
      categories: filterFormik?.categories,
    },
    enableReinitialize: true,
    onSubmit: () => {
      setFilterFormik({ categories: [] });
    },
  });

  const { resetForm, handleSubmit } = formik;

  const handleResetFilter = () => {
    let filter = { categories: [] };
    setFilter(filter, { replace: true });

    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Products | Ecommerce">
      <Container>
        {/* <pre>{JSON.stringify(filter || {}, null, 2)}</pre> */}
        <Row>
          <Grid>
            <GridItem>
              <SidebarCategories
                isLoading={isLoadingCategories}
                categories={categories}
                filter={filter}
                setFilter={setFilter}
                formik={formik}
                onResetFilter={handleResetFilter}
              />
            </GridItem>

            <GridItemProducts>
              {list.loading ? (
                <SpinerLoader />
              ) : (
                <>
                  <ProductList
                    products={
                      isActiveFilter()
                        ? filteredList.slice(list.page * 12 - 12, list.page * 12)
                        : filteredList.slice((list.page * 12) - 12, list.page * 12)
                    }
                  />
                  <PaginationSection
                    length={filteredList.length}
                    count={Math.ceil(filteredList.length / 12)}
                    page={list.page}
                  />
                </>
              )}
            </GridItemProducts>
          </Grid>
        </Row>
      </Container>
    </Page>
  );
};

export default Products;
