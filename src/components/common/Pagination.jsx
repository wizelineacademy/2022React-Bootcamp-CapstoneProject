import React from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "./";

import { TYPE_PAGINATION } from "../../utils/constants";

const Pagination = ({ activePagination, totalPages, currentPage }) => {
  const handlePagination = (type) => {
    activePagination(type);
  };
  return (
    <section className="pagination">
      <Grid col={3} mdCol={3} smCol={3} gap={5}>
        <Button
          isDisabled={currentPage > 1}
          handler={
            currentPage > 1
              ? () => handlePagination(TYPE_PAGINATION.PREV)
              : null
          }
          size="sm"
        >
          Prev
        </Button>

        <div className="pagination_counter">
          {currentPage} / {totalPages}
        </div>

        <Button
          handler={
            currentPage < totalPages
              ? () => handlePagination(TYPE_PAGINATION.NEXT)
              : null
          }
          size="sm"
        >
          Next
        </Button>
      </Grid>
    </section>
  );
};

Pagination.propTypes = {
  activePagination: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;
