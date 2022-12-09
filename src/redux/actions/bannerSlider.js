import { featuredBannersAdapter } from '../../adapters/banner.adapter';
import { types } from '../types';

export const startGetInfo = (data) => {
    return async (dispatch) => {
        dispatch(getInfo(featuredBannersAdapter(data)));
    }
}

const getInfo = (banners) => ({
    type: types.bannerReducerGetInfo,
    payload: banners,
});