import React from "react";
import PropTypes from "prop-types";
import { Form, FormikProvider } from 'formik';
import { useDispatch } from "react-redux";
// components
import CategoryInput from "./CategoryInput";
import {
  Sidebar,
  SidebarTitle,
  SidebarSection,
  ButtonClearFilter,
} from "../styled-components/products.styled.component";
import {
  SpinerLoader,
  SVGIcon,
} from "../../../styled-components/global.styled.component";
//
import { startSetLoadingList, startSetPageList } from "../../../redux/actions/products";

// ----------------------------------------------------------------------

const SidebarCategories = ({
  isLoading,
  categories,
  filter,
  setFilter,
  formik,
  onResetFilter,
}) => {
  const dispatch = useDispatch();
  const { values, getFieldProps } = formik;

  const handleChange = (e) => {
    // console.log(e.target.checked, e.target.value);
    // This complex data structure is preserved in the URL in the
    // `filter` query parameter each time a value in the form changes!
    if (e.target.checked) {
      setFilter({
        ...filter,
        categories: [...filter.categories, e.target.value],
      });
    } else {
      setFilter({
        ...filter,
        categories: filter.categories.filter(
          (category) => category !== e.target.value
        ),
      });
    }
    dispatch(startSetLoadingList(true));
    dispatch(startSetPageList(1));
    setTimeout(() => {
      dispatch(startSetLoadingList(false));
    }, 10);
  }

  return (
    <Sidebar>
      {/* <SidebarTitle>Categories</SidebarTitle>
      <SidebarSection>
        {isLoading ? (
          <SpinerLoader />
        ) : (
          <form onChange={handleChangeForm} ref={formCategories}>
            {categories.results &&
              categories.results.map((category) => (
                <CategoryInput
                  name="categories"
                  key={category.id}
                  label={category.data.name}
                  value={category.data.name.toLowerCase().replace(" & ", "--")}
                  checked={filter.categories.includes(
                    category.data.name.toLowerCase().replace(" & ", "--")
                  )}
                />
              ))}
          </form>
        )}
      </SidebarSection>
      <SidebarSection>
        {filter.categories.length > 0 ? (
          <ButtonClearFilter onClick={() => handleClearAll()}>
            <SVGIcon style={{ marginRight: "1rem" }}>
              <path
                fill="currentColor"
                d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 
            .45-1 1s.45 1 1 1zm-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 
            1zm3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"
              />
            </SVGIcon>
            Clear All
          </ButtonClearFilter>
        ) : null}
      </SidebarSection> */}
      <SidebarTitle>Categories formik</SidebarTitle>
      <SidebarSection>
        {isLoading ? (
          <SpinerLoader />
        ) : (
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate>
            {categories.results &&
              categories.results.map((category) => (
                <CategoryInput
                  key={category.id}
                  {...getFieldProps('categories')}
                  label={category.data.name}
                  value={category.data.name.toLowerCase().replace(" & ", "--")}
                  checked={values.categories.includes(
                    category.data.name.toLowerCase().replace(" & ", "--")
                  )}
                  onChange={handleChange}
                />
              ))}
            </Form>
          </FormikProvider>
        )}
      </SidebarSection>
      <SidebarSection>
        {filter.categories.length > 0 ? (
          <ButtonClearFilter type="submit" onClick={onResetFilter}>
            <SVGIcon style={{ marginRight: "1rem" }}>
              <path
                fill="currentColor"
                d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 
            .45-1 1s.45 1 1 1zm-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 
            1zm3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"
              />
            </SVGIcon>
            Clear All
          </ButtonClearFilter>
        ) : null}
      </SidebarSection>
    </Sidebar>
  );
};

SidebarCategories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  onResetFilter: PropTypes.func.isRequired,
};

export default SidebarCategories;
