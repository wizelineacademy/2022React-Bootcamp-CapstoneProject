import { combineReducers } from 'redux';
import { bannerSliderReducer } from './bannerSliderReducer';
import { categoriesReducer } from './categoriesReducer';
import { productReducer } from './productReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    banners: bannerSliderReducer,
    product: productReducer,
    products: productsReducer,
});