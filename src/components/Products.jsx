import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import { LIST_TYPE, TYPE_PAGINATION } from "../utils/constants";

import Grid from "../components/common/Grid";
import ProductCard from "../components/common/ProductCard";
import NotFound from "../components/common/NotFound";
import Pagination from "../components/common/Pagination";

const Products = ({ viewType, data, pageSize = 1 }) => {
  const [page, setPage] = useState(0);
  const [totalPages] = useState(
    pageSize === 1 || data?.length <= pageSize
      ? 1
      : Math.ceil(data?.length / pageSize)
  );
  const [productsPage, setProductsPage] = useState([]);

  const handlerPagination = (action) => {
    if (action === TYPE_PAGINATION.PREV && page > 0) {
      setPage(page - 1);
    } else if (action === TYPE_PAGINATION.NEXT && page + 1 <= totalPages) {
      setPage(page + 1);
    }
  };

  const updateProductList = useCallback(() => {
    setProductsPage(
      totalPages > 1
        ? data?.slice(pageSize * page, pageSize * (page + 1))
        : data
    );
  }, [page, data, pageSize, totalPages]);

  useEffect(() => {
    updateProductList();
  }, [updateProductList]);

  return !data?.length > 0 ? (
    <NotFound text="Products Not Found" />
  ) : (
    <>
      <section>
        <Grid col={5} mdCol={1} smCol={1} gap={5}>
          {productsPage?.map((item) => (
            <ProductCard
              key={item.id}
              pincipalImage={item.data.mainimage.url}
              secondImage={item.data?.images[0]?.image?.url}
              name={item.data.name}
              price={item.data.price}
              productId={item.id}
              alt={item.data.mainimage.alt}
              categoryName={item.data?.category.slug.toUpperCase()}
            />
          ))}
        </Grid>
      </section>

      {viewType === LIST_TYPE.PRODUCT_LIST && totalPages > 1 && (
        <Pagination
          activePagination={handlerPagination}
          totalPages={totalPages}
          currentPage={page + 1}
        />
      )}
    </>
  );
};

Products.propTypes = {
  data: PropTypes.array.isRequired,
  viewType: PropTypes.string,
  pageSize: PropTypes.number,
};

export default Products;
