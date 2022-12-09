import React from "react";
import PropTypes from "prop-types";
// components
import { LinkStyle } from "../../../styled-components/global.styled.component";
import {
  BoxContentTop,
  BoxContentTopContent,
  BoxTopbar,
  NavBoxContentTop,
  NavBoxContentTopList,
  ListSeparator,
  ListSeparatorItem,
  TitleBoxContentTopContent,
  CurrentListItem,
  BoxContentBottom,
} from "../styled-components";

const Topbar = ({ name }) => {
  return (
    <BoxTopbar>
      <BoxContentTop>
        <BoxContentTopContent>
          <TitleBoxContentTopContent>Product Details</TitleBoxContentTopContent>
          <NavBoxContentTop>
            <NavBoxContentTopList>
              <li>
                <div>
                  <LinkStyle to="/">Home</LinkStyle>
                </div>
              </li>
              <ListSeparator>
                <ListSeparatorItem />
              </ListSeparator>
              <li>
                <div>
                  <LinkStyle to="/products">Products</LinkStyle>
                </div>
              </li>
              <ListSeparator>
                <ListSeparatorItem />
              </ListSeparator>
              <li>
                <div>
                  <CurrentListItem>{name}</CurrentListItem>
                </div>
              </li>
            </NavBoxContentTopList>
          </NavBoxContentTop>
        </BoxContentTopContent>
      </BoxContentTop>
      <BoxContentBottom />
    </BoxTopbar>
  );
};

Topbar.propTypes = {
  name: PropTypes.string,
};

export default Topbar;
