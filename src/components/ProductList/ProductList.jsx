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
  const [selectedCategories, setSelectedCategories] = useState([]); //Para seleccionar los filtros
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage]= useState(1);
  const { data, isLoading } = useProducts(category, currentPage);
  const { data: categoriesData } = useFeaturedCategories();
  

  useEffect(() => {
    console.log(category);
    if (data.results) {
      setProducts(data.results);
    }
    if (categoriesData.results) {
      setCategories(categoriesData.results);
    }
  }, [data, categoriesData, category]);

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
  const filterProductsByCategory = (product) => {
    let result = false;
    for (let i = 0; i < selectedCategories.length; i++) {
      if (selectedCategories[i] === product.data.category.slug) {
        result = true;
        break;
      }
    }
    return result;
  };

  useEffect(() => {
    if (selectedCategories.length) {
      setProducts(data.results.filter(filterProductsByCategory));
    }
  }, [selectedCategories]);
  const sidebarWrapperStyle = (category) => {
    return selectedCategories.some((element) => element === category.slugs[0])
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
              onClick={() => clickHandler(category.slugs[0])}
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
              <Link to={`/product/${product.id}`}>
                <Card
                  key={productDetail.sku}
                  style={{
                    backgroundImage: `url(${productDetail.mainimage.url})`,
                  }}
                >
                  <CardText>
                    <h4 className="prod-name">{productDetail.name}</h4>
                    <p className="price">${productDetail.price}</p>
                    <p>
                      <small>{productDetail.category.slug}</small>
                    </p>
                  </CardText>
                </Card>
              </Link>
            );
          })}
          <Paginate pages={data.total_pages} page={data.page} setCurrentPage={setCurrentPage}/>
        </ProductCard>
      )}
      
    </ProductListContainer>

  );
}
