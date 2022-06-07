import React, { useState } from 'react';
import { Col, Row, TopSpace, SectionTitle } from '../styles/Home.style';

import CategoriasMock from '../mocks/en-us/product-categories.json';
import { Img, Text } from '../styles/Grid.style';

const GridCategorias = (props) => {
  return (
    <div>
      <TopSpace />
      <TopSpace />
      <TopSpace />

      <SectionTitle>Categories</SectionTitle>
      <Row centered>
        {CategoriasMock.results.map(({ data: { main_image, url, name } }) => (
          <Col lg="2" md="3" sm="4" xs="11" spaced>
            <Img src={main_image.url} alt={url} />
            <Text>{name}</Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GridCategorias;
