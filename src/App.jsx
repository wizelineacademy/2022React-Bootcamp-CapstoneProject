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
      <Footer />
    </>
  );
}

export default App;
