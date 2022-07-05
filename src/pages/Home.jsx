import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSlider,
  PrincipalContainer,
  Categories,
  Products,
} from "../components";
import { Loading, NotFound } from "../components/common";

import Group, { GroupBody, GroupTitle } from "../components/common/Group";

import Button from "../components/common/Button";
import { LIST_TYPE } from "../utils/constants";

import { useGeneralRequest } from "../utils/hooks/useGeneralRequest";

const Home = () => {
  const requestPart = `q=${encodeURIComponent(
    '[[at(document.type, "product")]]'
  )}&q=${encodeURIComponent(
    '[[at(document.tags, ["Featured"])]]'
  )}&lang=en-us&pageSize=16`;
  const { data, isLoading } = useGeneralRequest(requestPart);

  return (
    <PrincipalContainer title="Home Page">
      <ProductSlider controls={true} auto={true} timeOut={5000} />

      <Group>
        <GroupTitle>Categories</GroupTitle>
        <GroupBody>
          <Categories />
        </GroupBody>
      </Group>

      <Group>
        <GroupTitle>Products</GroupTitle>
        <GroupBody>
          {isLoading ? (
            <Loading text="Loading Featured Products..." />
          ) : data?.results_size > 0 ? (
            <div>
              <Products
                viewType={LIST_TYPE.FEATURED_PRODUCTS}
                data={data?.results}
                pageSize={1}
              />
            </div>
          ) : (
            <NotFound text="Featured Product Not Found" />
          )}
        </GroupBody>
      </Group>
      <Link to="/products">
        <Button size="block">
          <i className="bx bx-store" /> View all products
        </Button>
      </Link>
    </PrincipalContainer>
  );
};

export default Home;
