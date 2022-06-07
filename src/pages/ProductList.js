import React from 'react';
import SideBar from '../components/SideBar';
import { Layout, ProductContainer } from '../styles/SideBar.style';
import { Products } from '../components/Products';

const ProductList = (props) => {
  return (
    <div>
      <Layout>
        <SideBar />
        <ProductContainer>
          <Products />
        </ProductContainer>
      </Layout>
    </div>
  );
};

export default ProductList;
