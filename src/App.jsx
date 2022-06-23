import {Routes, Route} from 'react-router-dom'
import { Header, Home, Footer } from './components';
import ProductList from './components/ProductList';
import { ROUTES } from './utils/constants';

function App() {
   return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.base} element={<Home />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.productList} element={<ProductList />} />
      </Routes>
      <Footer text='Ecommerce created during Wizeline’s Academy React Bootcamp' />
    </>
  );
}

export default App;
