import React, { useState } from 'react';
import { Header, Home, Footer } from './components';
import { Button, ButtonWrapper } from './App.style'
import ProductList from './components/ProductList';

function App() {
  const [pageShowed, setPageShowed] = useState('Home');
  
  return (
    <>
      <Header handleClick={() => setPageShowed('Home')}/>
      {pageShowed === 'Home' ? (
        <>
          <Home />
          <ButtonWrapper>
            <Button onClick={() => setPageShowed('ProductList')} >
              View all Products
            </Button>
          </ButtonWrapper>
        </>)
        : <ProductList />
      }
      <Footer text='Ecommerce created during Wizeline’s Academy React Bootcamp' />
    </>
  );
}

export default App;
