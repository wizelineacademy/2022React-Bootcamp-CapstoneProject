import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BannersProvider } from './context/banners_context';
import { CategoriesProvider } from './context/categories_context';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';

ReactDOM.render(
  <React.StrictMode>
    <BannersProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </BannersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
