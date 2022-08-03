import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CategoryBanner from "./components/CategoryBanner";
import {
  Container,
  Title,
} from "./styled-components/category.styled.component";
import { SpinerLoader } from "../../styled-components/global.styled.component";
//
import { useProductCategories } from "../../utils/hooks";
import { startGetInfo } from "../../redux/actions/categories";

// ----------------------------------------------------------------------

const Categories = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useProductCategories();
  // console.log(data, isLoading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(startGetInfo(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const productCategories = useSelector((state) => state.categories);

  return (
    <div style={{ marginBottom: "48px", padding: "1rem" }}>
      <div>
        <Title>Categories</Title>
        <Container>
          {productCategories.loading ? (
            <div style={{ marginTop: "1rem" }}>
              <SpinerLoader />
            </div>
          ) : (
            productCategories.results &&
            productCategories.results.map((category, index) => (
              <CategoryBanner
                key={category.id}
                image={category.data.main_image.url}
                title={category.data.name}
              />
            ))
          )}
        </Container>
      </div>
    </div>
  );
};

export default Categories;
