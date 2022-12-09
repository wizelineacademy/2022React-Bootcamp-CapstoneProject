import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// components
import { SVGIcon } from "../../../styled-components/global.styled.component";
import {
  Pagination,
  PaginationButton,
  PaginationContainer,
  PaginationInfo,
  PaginationList,
} from "../styled-components/products.styled.component";
//
import { startSetPageList } from "../../../redux/actions/products";

// ----------------------------------------------------------------------

const PaginationSection = ({ length, count, page }) => {
  const dispatch = useDispatch();
  let dots = [],
    i = 0;
  while (++i <= count) {
    dots.push(i);
  }

  const nextPage = () => {
    // setPage((page) => page + 1);
    dispatch(startSetPageList((page + 1)));
  };

  const prevPage = () => {
    // setPage((page) => page - 1);
    dispatch(startSetPageList((page - 1)));
  };

  const handleSetPage = (value) => {
    // setPage(value);
    dispatch(startSetPageList(value));
  };

  return (
    <PaginationContainer>
      <PaginationInfo>
        Showing {length}
        {"\u00A0"}results
      </PaginationInfo>
      <Pagination>
        <PaginationList>
          <li>
            <PaginationButton
              className={`${page === 1 ? "deactivate" : ""}`}
              onClick={prevPage}
            >
              <SVGIcon>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </SVGIcon>
            </PaginationButton>
          </li>
          {dots &&
            dots.map((dot) => (
              <li key={dot}>
                <PaginationButton
                  className={`${dot === page ? "active" : ""}`}
                  onClick={() => handleSetPage(dot)}
                >
                  {dot}
                </PaginationButton>
              </li>
            ))}
          <li>
            <PaginationButton
              className={`${page === count ? "deactivate" : ""}`}
              onClick={nextPage}
            >
              <SVGIcon>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </SVGIcon>
            </PaginationButton>
          </li>
        </PaginationList>
      </Pagination>
    </PaginationContainer>
  );
};

PaginationSection.propTypes = {
  length: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default PaginationSection;
