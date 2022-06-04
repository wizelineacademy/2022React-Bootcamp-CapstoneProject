import React from 'react';
import { Col, Row, TopSpace, TitleSection } from '../styles/Home.style';

import ProductosMock from '../mocks/en-us/featured-products.json';
import { Img, Text, TextImage, ContainerImage } from '../styles/Grid.style';

const GridProductos = () => {
  console.log('ProductosMock', ProductosMock);
  return (
    <div>
      <TopSpace />
      <TopSpace />
      <TopSpace />

      <TitleSection>Products</TitleSection>
      <Row centered>
        {ProductosMock.results.map((item) => (
          <Col lg="2" md="3" sm="4" xs="11" spaced>
            <ContainerImage>
              <Img src={item.data.mainimage.url} alt={item.data.url} />
              <TextImage>{item.data.category.slug}</TextImage>
            </ContainerImage>
            <Text>{item.data.name}</Text>
            <Text>${item.data.price}</Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GridProductos;
