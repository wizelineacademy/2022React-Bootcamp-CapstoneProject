import React from "react";
import PropTypes from "prop-types";
// components
import {
  TitleBoxContentTop,
  TobarTop,
  TopbarBottom,
  TopbarContent,
  TopbarStyle,
} from "../styled-components";

const Topbar = ({ query }) => {
  return (
    <TopbarStyle>
      <TobarTop>
        <TopbarContent>
          <TitleBoxContentTop>
            {query && `Showing results of "${query}"`}
          </TitleBoxContentTop>
        </TopbarContent>
      </TobarTop>
      <TopbarBottom />
    </TopbarStyle>
  );
};

Topbar.defaultProps = {
  query: "",
};

Topbar.propTypes = {
  query: PropTypes.string,
};

export default Topbar;
