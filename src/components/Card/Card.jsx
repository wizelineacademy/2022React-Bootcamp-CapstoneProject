import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  CardTitleContainer,
  Tags,
  TagsContainer,
} from "./Card.style";

const Card = ({ product }) => {
  const { data, tags } = product;

  return (
    <CardContainer>
      <CardImage alt={data.mainimage.alt} src={data.mainimage.url} />
      <CardTitleContainer>
        <h4>{data.name}</h4>
      </CardTitleContainer>
      <CardContent>$ {data.price} USD</CardContent>
      {tags.length > 0 ? (
        <TagsContainer>
          {tags.map((tag) => (
            <Tags key={tag}>{tag}</Tags>
          ))}
        </TagsContainer>
      ) : null}
    </CardContainer>
  );
};

export default Card;
