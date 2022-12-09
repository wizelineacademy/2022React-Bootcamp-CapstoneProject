import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
// components
import { TabContainer, TabItemStyle } from "../styled-components";

const Tab = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index,
        });
      })}
    </TabContainer>
  );
};

Tab.porpTypes = {
  children: PropTypes.node.isRequired,
  onTabSelected: PropTypes.func.isRequired,
}

export const TabItem = memo(({ children, ...restProps }) => (
  <TabItemStyle {...restProps}>{children}</TabItemStyle>
));

TabItem.porpTypes = {
  children: PropTypes.node.isRequired,
}

export default Tab;
