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
import {UiSearch} from './SearchResults.styled';
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
          { data.results.length ?
          data.results.map((product) => {
            const {name, sku, mainimage:{url},price, category:{slug}} = product.data;
            return (
              <Link to={`/products${product.id}`}>
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
            );
          }): <UiSearch>
              <div className="ui-search-rescue">
                <div className="ui-search-info">
                  <h3 className="ui-search-title">There are no posts matching your search.</h3>
                  <ul className="ui-search-list">
                    <li className="ui-search-item">Check the spelling of the word.</li>
                    <li className="ui-search-item">Use more generic words or fewer words.</li>
                  </ul>
                </div>
              </div>
          </UiSearch>  
          }
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
