import { React, useState, useEffect } from "react";
import {
  ProductListContainer,
  SidebarWrapper,
  ProductCard,
} from "./ProductList.styled";
import { Loader } from "./ProductList.styled";
import { Card, CardText } from "../../components/Products/Products.styled";
import { useProducts } from "../../utils/hooks/useProducts";
import { useFeaturedCategories } from "../../utils/hooks/useFeaturedCategories";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Paginate from '../../components/Paginate/Paginate';

export default function ProductList() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const category = searchParams.get("category");
  const [selectedCategories, setSelectedCategories] = useState([category]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage]= useState(1);
  const { data: categoriesData } = useFeaturedCategories();
  const { data, isLoading } = useProducts('', currentPage, selectedCategories);
  
  

  useEffect(() => {
    if (data.results) {
      setProducts(data.results);
    }
  }, [data]);

  useEffect(() => {

    if (categoriesData.results) {
      setCategories(categoriesData.results);
      if (!category) {
        setSelectedCategories([...categoriesData.results.map(c => c.id)]);
      }
    }

  }, [categoriesData.results, category]);

  const clickHandler = (categoryName) => {
    const indexToRemove = selectedCategories.indexOf(categoryName);
    if (indexToRemove !== -1) {
      setSelectedCategories((prevValue) => {
        const newArr = [...prevValue];
        newArr.splice(indexToRemove, 1);
        return newArr;
      });
    } else {
      setSelectedCategories((prevValue) => [...prevValue, categoryName]);
    }
  };

  const sidebarWrapperStyle = (category) => {
    return selectedCategories.some((element) => element === category.id)
      ? "is-active"
      : "";
  };
  return (
    <ProductListContainer>
      <SidebarWrapper>
        {categories.map((category) => {
          return (
            <ol
              key={category.data.name}
              className={sidebarWrapperStyle(category)}
              onClick={() => clickHandler(category.id)}
            >
              {category.data.name}
            </ol>
          );
        })}
        ;
      </SidebarWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        
        <ProductCard>
          {products.map((product) => {
            const productDetail = product.data;
            return (
              <Link to={`/products/${product.id}`}>
                <Card
                key={productDetail.sku}
                className="card"
              >
                <img src={productDetail.mainimage.url} alt="product"/>
                <CardText>
                  <h4 className="prod-name">{productDetail.name}</h4>
                  <span 
                    className="price">${productDetail.price}
                  </span>
                  <div className="items">
                    <span className="slug">
                      <small>{productDetail.category.slug}</small>
                    </span>
                    <button className="add-to-cart">Add to cart</button>
                  </div>
                </CardText>
              </Card>
              </Link>
            );
          })}
          <Paginate
        pages={data.total_pages}
        page={data.page}
        setCurrentPage={setCurrentPage}
      />
        </ProductCard>
      )}
      
    </ProductListContainer>
  );
}
