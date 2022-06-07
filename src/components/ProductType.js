import styled from 'styled-components';


const ProductType = styled.div`
  background: #E0DFD5;
  text-align: center;
  font-size: 2.1vw;
  @media (max-width: 540px) {
    font-size: 7vw;
  }
  font-family: Garamond, serif;
  color: black;
`;

const ProductTypeImage = styled.img`
    max-width: 100%;
    max-height: 100%;
}`;

const ProductCategory = ({ category }) => {
  return (
    <ProductType>
        {category?.data.name}
      <ProductTypeImage
        src={category?.data?.main_image?.url}
        alt={category?.data?.main_image?.alt}
      />
    </ProductType>
  );
};

export default ProductCategory;