import { productCategoriesAdapter } from '../../adapters/category.adapter';
import { types } from '../types';

export const startGetInfo = (data) => {
    return async (dispatch) => {
        dispatch(getInfo(productCategoriesAdapter(data)));
    }
}

const getInfo = (categories) => ({
    type: types.categoriesGetInfo,
    payload: categories,
});