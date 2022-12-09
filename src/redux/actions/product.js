import { productDetailsAdapter } from "../../adapters/product.adapter";
import { types } from '../types';

export const startGetInfo = (data) => {
    return async (dispatch) => {
        dispatch(getInfo(productDetailsAdapter(data)));
    }
}

const getInfo = (product) => ({
    type: types.productStartGetInfo,
    payload: product,
});