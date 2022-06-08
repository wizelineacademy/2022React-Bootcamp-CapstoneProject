import React from 'react';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { Header, Home, Footer } from './components';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header />
      <Home />
      <Footer text='Ecommerce created during Wizeline’s Academy React Bootcamp' />
    </>
  );
}

export default App;
