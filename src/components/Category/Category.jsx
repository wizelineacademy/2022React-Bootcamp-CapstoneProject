import React from "react";
import { Container, Image, TitleContainer } from "./Category.style";

const Category = ({ category }) => {
  const { data } = category;

  return (
    <Container key={category.id}>
      <Image alt={data.main_image.alt} src={data.main_image.url} />
      <TitleContainer>
        <h4>{data.name}</h4>
      </TitleContainer>
    </Container>
  );
};

export default Category;
