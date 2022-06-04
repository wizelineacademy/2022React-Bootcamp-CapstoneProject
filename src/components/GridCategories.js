import React, { useState } from 'react';
import { Col, Row, TopSpace, TitleSection } from '../styles/Home.style';

import CategoriasMock from '../mocks/en-us/product-categories.json';
import { Img, Text } from '../styles/Grid.style';

const GridCategorias = (props) => {
  return (
    <div>
      <TopSpace />
      <TopSpace />
      <TopSpace />

      <TitleSection>Categories</TitleSection>
      <Row centered>
        {CategoriasMock.results.map((item) => (
          <Col lg="2" md="3" sm="4" xs="11" spaced>
            <Img src={item.data.main_image.url} alt={item.data.url} />
            <Text>{item.data.name}</Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GridCategorias;
