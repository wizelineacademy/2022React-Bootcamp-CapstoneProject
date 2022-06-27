import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../utils/hooks/useProducts";
import Paginate from "../../components/Paginate/Paginate";
import { Link } from "react-router-dom";
import {
  ProductsWrapper,
  CardContainer,
  Card,
  CardText,
} from "../Products/Products.styled";
export default function SearchResults() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const q = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useProducts(q, currentPage);

  return (
    <ProductsWrapper>
      {!isLoading && (
        <CardContainer>
          {data.results.map((product, index) => {
            const productDetail = product.data;
            return (
              <Link to={`/product/${product.id}`}>
                <Card
                  key={productDetail.sku}
                  style={{
                    backgroundImage: `url(${productDetail.mainimage.url})`,
                  }}
                >
                  <CardText>
                    <h4 className="prod-name">{productDetail.name}</h4>
                    <span className="price">${productDetail.price}</span>
                    <span>
                      <small>{productDetail.category.slug}</small>
                    </span>
                    <button className="add-to-cart">Add to cart</button>
                  </CardText>
                </Card>
              </Link>
            );
          })}
        </CardContainer>
      )}
      <Paginate
        pages={data.total_pages}
        page={data.page}
        setCurrentPage={setCurrentPage}
      />
    </ProductsWrapper>
  );
}
