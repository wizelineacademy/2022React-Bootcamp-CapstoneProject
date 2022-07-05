import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { useSearchParams } from "react-router-dom";

import { PrincipalContainer, Products } from "../components";
import { Button, CheckBox, Loading } from "../components/common";

import { LIST_TYPE } from "../utils/constants";

import CategoryContext from "../context/Category/CategoryContext";

import { useGeneralRequest } from "../utils/hooks/useGeneralRequest";

const ProductList = () => {
  const [params] = useSearchParams();
  const { categories } = useContext(CategoryContext);
  const { data, isLoading } = useGeneralRequest(
    `q=${encodeURIComponent('[[at(document.type, "product")]]')}&lang=en-us`
  );
  const [filters, setFilters] = useState(
    params.get("category") ? [params.get("category")] : []
  );
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterSelect = (checked, id) => {
    if (checked) {
      setFilters([...filters, id]);
    } else {
      const newFilter = filters.filter((x) => x !== id);
      setFilters(newFilter);
    }
  };

  const updateProductList = useCallback(() => {
    let productsTemp = data?.results;
    if (filters.length > 0) {
      productsTemp = productsTemp?.filter((x) =>
        filters.includes(x?.data?.category?.id)
      );
      setProductsList(productsTemp);
    }
  }, [filters, data]);

  useEffect(() => {
    if (!isLoading) {
      setProductsList(data?.results);
      setLoading(isLoading);
    }
  }, [data, isLoading]);

  useEffect(() => {
    updateProductList();
  }, [updateProductList]);

  const filterRef = useRef(null);
  const showFilters = () => filterRef.current.classList.toggle("active");

  return (
    <PrincipalContainer title="Wz-shop Products">
      <div className="product-list">
        <div className="product-list_filter_toggle">
          <Button size="sm" handler={() => showFilters()}>
            Show Filters
          </Button>
        </div>
        <div className="product-list_content">
          {!loading ? (
            <div>
              <Products
                data={productsList}
                viewType={LIST_TYPE.PRODUCT_LIST}
                pageSize={12}
              />
            </div>
          ) : (
            <Loading text="Loading Products..." />
          )}
        </div>
        <div className="product-list_filter" ref={filterRef}>
          <div
            className="product-list_filter_close"
            onClick={() => showFilters()}
          >
            <i className="bx bx-message-square-x" />
          </div>
          <div className="product-list_filter_widget">
            <div className="product-list_filter_widget_title">Categories</div>
            <div className="product-list_filter_widget_content">
              {categories &&
                categories?.map((item) => (
                  <div
                    key={item.id}
                    className="product-list_filter_widget_content_item"
                  >
                    <CheckBox
                      label={item?.data?.name}
                      onChange={(input) => filterSelect(input.checked, item.id)}
                      checked={filters.includes(item.id)}
                    />
                  </div>
                ))}
            </div>
            {filters.length > 0 && (
              <Button size="sm" handler={() => setFilters([])}>
                Clear Filter
              </Button>
            )}
          </div>
        </div>
      </div>
    </PrincipalContainer>
  );
};

export default ProductList;
