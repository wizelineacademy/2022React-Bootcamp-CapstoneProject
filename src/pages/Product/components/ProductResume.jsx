import React, { useState } from "react";
import PropTypes from "prop-types";
// components
import Tab, { TabItem } from "./Tab";
import {
  BoxPanel,
  BoxSpecs,
  DividerStyle,
  PaperResume,
  TabPanel,
} from "../styled-components";

const ProductResume = ({ description, specs }) => {
  const [currentTab, setcurrentTab] = useState(0);

  const onTabSelected = (index) => {
    setcurrentTab(index);
  };

  return (
    <PaperResume>
      <Tab onTabSelected={onTabSelected}>
        <TabItem>Description</TabItem>
        <TabItem>Specs</TabItem>
      </Tab>
      <DividerStyle />
      <TabPanel id={0} hidden={currentTab === 0 ? false : true}>
        <BoxPanel>
          <div>
            <p>{description}</p>
          </div>
        </BoxPanel>
      </TabPanel>
      <TabPanel id={1} hidden={currentTab === 1 ? false : true}>
        <BoxPanel>
          <div>
            {specs &&
              specs.length > 0 &&
              specs.map((spec) => (
                <BoxSpecs
                  key={`${spec.spec_name.toLowerCase().replace(" ", "-")}`}
                >
                  <p>
                    <strong>{spec.spec_name}</strong>
                  </p>
                  <p>{spec.spec_value}</p>
                </BoxSpecs>
              ))}
          </div>
        </BoxPanel>
      </TabPanel>
    </PaperResume>
  );
};

ProductResume.defaultProps = {
  description: "",
};

ProductResume.propTypes = {
  description: PropTypes.string.isRequired,
  specs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ProductResume;
