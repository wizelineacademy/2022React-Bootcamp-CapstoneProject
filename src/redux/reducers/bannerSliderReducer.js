import { types } from '../types';

const initialState = {
    loading: true,
}

export const bannerSliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.bannerReducerGetInfo:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        
        default:
            return state;
    }
}