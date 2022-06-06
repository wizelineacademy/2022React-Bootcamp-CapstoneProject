import FeaturedItem from "components/FeaturedItem";
import React from "react";
import { Container, ListContainer, Title } from "./FeaturedProducts.styled";

const FeaturedProducts = ({ itemList }) => (
  <Container>
    <Title>Featured Products</Title>
    <ListContainer>
      {itemList.map((item) => {
        const { data } = item;
        const { category, mainimage, name, price } = data;
        const itemData = {
          category: category.slug,
          image: {
            alt: mainimage.alt,
            url: mainimage.url,
          },
          name: name,
          price: price,
        };
        return <FeaturedItem itemData={itemData} key={item.id} />;
      })}
    </ListContainer>
  </Container>
);

export default FeaturedProducts;
