import React from 'react';
import { Col, Row, TopSpace, SectionTitle, Button } from '../styles/Home.style';

import ProductosMock from '../mocks/en-us/featured-products.json';
import { Img, Text, TextImage, ContainerImage } from '../styles/Grid.style';
import { Link } from 'react-router-dom';

const GridProductos = () => {
  return (
    <div>
      <TopSpace />
      <TopSpace />
      <TopSpace />

      <SectionTitle>Products</SectionTitle>
      <Row centered>
        {ProductosMock.results.map(
          ({ data: { mainimage, url, category, name, price } }) => (
            <Col lg="2" md="3" sm="4" xs="11" spaced>
              <ContainerImage>
                <Img src={mainimage.url} alt={url} />
                <TextImage>{category.slug}</TextImage>
              </ContainerImage>
              <Text>{name}</Text>
              <Text>${price}</Text>
            </Col>
          )
        )}
      </Row>
      <Row centered>
        <Link to="/products">
          <Button>View all products</Button>
        </Link>
      </Row>
      <TopSpace />
    </div>
  );
};

export default GridProductos;
