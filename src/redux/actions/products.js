import { productsHomeAdapter, productsListAdapter } from '../../adapters/product.adapter';
import { types } from '../types';

export const startGetHome = (data) => {
    return async (dispatch) => {
        dispatch(getHomeInfo({ home: { ...productsHomeAdapter(data), loading: false } }))
    }
}

export const startGetList = (data) => {
    return async (dispatch) => {
        dispatch(getProductList({ list: { ...productsListAdapter(data), loading: false } }))
    }
}

export const startSetPageList = (page) => {
    return async (dispatch, getState) => {
        try {
            const { list } = getState().products;
            list.page = page;
            dispatch(setProductList({ list }));
        } catch (error) {
            console.error(error);
        }
    }
}

export const startSetLoadingList = (value) => {
    return async (dispatch, getState) => {
        try {
            const { list } = getState().products;
            list.loading = value;
            dispatch(setLoadingProductList({ list }));
        } catch (error) {
            console.error(error);
        }
    }
}

export const startGetSearch = (data) => {
    return async (dispatch) => {
        dispatch(getProductsSearch({ found: { ...productsListAdapter(data), loading: false } }))
    }
}

const getHomeInfo = (products) => ({
    type: types.productsStartGetHome,
    payload: products,
});

const getProductList = (products) => ({
    type: types.productsStartGetList,
    payload: products,
});

const setProductList = (productsList) => ({
    type: types.productsSetPage,
    payload: productsList,
});

const setLoadingProductList = (productsList) => ({
    type: types.productsSetLoadingList,
    payload: productsList,
});

const getProductsSearch = (products) => ({
    type: types.productsStartGetSearch,
    payload: products,
});