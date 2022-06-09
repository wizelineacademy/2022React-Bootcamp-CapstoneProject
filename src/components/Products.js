import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  TextCentered,
  TopSpace,
  Spinner,
  ContainerSpinner,
} from '../styles/Home.style';

import ProductosMock from '../mocks/en-us/featured-products.json';
import noResults from '../assets/no-results.png';
import { Img, Text, TextImage, ContainerImage } from '../styles/Grid.style';

export const Products = (infoProps) => {
  const [productList, setProductList] = useState(ProductosMock.results);
  const [loading, setLoading] = useState(infoProps.loadingProp);

  function getFilteredList() {
    let listNewProductList = [];
    for (let i = 0; i < ProductosMock.results.length; i++) {
      if (
        ProductosMock.results[i].data.category.slug
          .toLowerCase()
          .includes(infoProps.category.toLowerCase()) === true
      ) {
        listNewProductList.push(ProductosMock.results[i]);
      }
    }
    setProductList(listNewProductList);
  }

  function triggerLoading() {
    setLoading(true);
    let timerId;
    timerId = setTimeout(() => {
      setLoading(infoProps.loadingProp);
    }, 1000);

    return () => clearTimeout(timerId);
  }

  console.log('loading', infoProps.loadingProp);

  useEffect(() => {
    triggerLoading();
    getFilteredList();
  }, [infoProps]);

  return (
    <ContainerSpinner active={loading}>
      <TopSpace />
      <Spinner active={loading} viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
        <p>Loading...</p>
      </Spinner>
      {productList[0] ? (
        <Row centered>
          {productList.map(
            ({ data: { mainimage, url, category, name, price } }) => (
              <Col lg="2" md="3" sm="4" xs="11" spaced>
                <ContainerImage>
                  <Img src={mainimage.url} alt={url} />
                  <TextImage>{category.slug}</TextImage>
                </ContainerImage>
                <Text>{name}</Text>
                <Text>${price}</Text>
              </Col>
            ),
          )}
        </Row>
      ) : (
        <>
          <TopSpace extra />

          <Row centered>
            <Col lg="6" md="6" sm="8" xs="11" spaced>
              <Row centered>
                <Img src={noResults} />
              </Row>
            </Col>
            <Col lg="6" md="6" sm="6" xs="11" spaced>
              <TextCentered>
                Sorry, we couldn't find any matches for the category
                <strong> "{infoProps.category}"</strong>
              </TextCentered>
            </Col>
          </Row>
        </>
      )}
    </ContainerSpinner>
  );
};

export default Products;
