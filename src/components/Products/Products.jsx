import React, { useState, useEffect } from "react";
import {
  ProductsWrapper,
  CardContainer,
  Card,
  CardText,
} from "./Products.styled";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);
  const { data, isLoading } = useFeaturedProducts();

  useEffect(() => {
    if (data.results) {
      setProducts(data.results);
    }
  }, [data]);

  return (
    <ProductsWrapper>
      {!isLoading && (
        <CardContainer>
          {products.map((product) => {
            const {name,sku,price, category:{slug}, mainimage:{url}} = product.data;
            return (
            <Link to={`/products/${product.id}`}>
              <Card
                key={sku}
                className="card"
              >
                <img src={url} alt="product"/>
                <CardText>
                  <h4 className="prod-name">{name}</h4>
                  <span 
                    className="price">${price}
                  </span>
                  <div className="items">
                    <span className="slug">
                      <small>{slug}</small>
                    </span>
                    <button className="add-to-cart">Add to cart</button>
                  </div>
                </CardText>
              </Card>
            </Link>
            )
          })}
        </CardContainer>
      )}
    </ProductsWrapper>
  );
}
