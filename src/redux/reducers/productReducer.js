import { types } from '../types';

const initialState = {
    loading: true,
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productStartGetInfo:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        
        default:
            return state;
    }
}