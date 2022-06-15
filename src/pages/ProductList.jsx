import React, { useRef, useState, useCallback, useEffect } from "react";

import { PrincipalContainer, Products } from "../components";

import CheckBox from "../components/common/CheckBox";
import Loading from "../components/common/Loading";
import Button from "../components/common/Button";

import { LIST_TYPE } from "../utils/constants";

import productCategories from "../utils/mocks/en-us/product-categories.json";
import producst from "../utils/mocks/en-us/products.json";

const ProductList = () => {
  const [filters, setFilters] = useState([]);
  const [listProduct, setProdusctList] = useState(producst.results);
  const [loading, isLoading] = useState(false);

  const componentMounted = useRef(true);

  const filterSelect = (checked, item) => {
    if (checked) {
      setFilters([...filters, item.id]);
    } else {
      const newFilter = filters.filter((x) => x !== item.id);
      setFilters(newFilter);
    }
  };

  const updateListProduct = useCallback(() => {
    let productsTemp = producst.results;
    if (filters.length > 0) {
      productsTemp = productsTemp.filter((x) =>
        filters.includes(x?.data?.category?.id)
      );
    }
    setProdusctList(productsTemp);
  }, [filters]);

  useEffect(() => {
    setTimeout(() => {
      if (componentMounted.current) {
        isLoading(true);
      }
    }, 2000);

    return () => {
      componentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    updateListProduct();
  }, [updateListProduct]);

  const filterRef = useRef(null);
  const showFilters = () => filterRef.current.classList.toggle("active");

  return (
    <PrincipalContainer title="Wz Products">
      {loading ? (
        <div className="product-list">
          <div className="product-list-filter-toggle">
            <Button size="sm" handler={() => showFilters()}>
              Show Filters
            </Button>
          </div>
          <div className="product-list-content">
            <Products data={listProduct} viewType={LIST_TYPE.PRODUCT_LIST} />
          </div>

          <div className="product-list-filter" ref={filterRef}>
            <div
              className="product-list-filter-close"
              onClick={() => showFilters()}
            >
              <i className="bx bx-message-square-x" />
            </div>
            <div className="product-list-filter-widget">
              <div className="product-list-filter-widget-title">Categories</div>
              <div className="product-list-filter-widget-content ">
                {productCategories &&
                  productCategories?.results?.map((item) => (
                    <div
                      key={item.id}
                      className="product-list-filter-widget-content-item"
                    >
                      <CheckBox
                        label={item?.data?.name}
                        onChange={(input) => filterSelect(input.checked, item)}
                        checked={filters.includes(item.id)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>


        </div>
      ) : (
        <Loading text="Loading..." />
      )}
    </PrincipalContainer>
  );
};

export default ProductList;
