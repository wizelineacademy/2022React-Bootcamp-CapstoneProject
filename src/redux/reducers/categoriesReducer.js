import { types } from '../types';

const initialState = {
    loading: true,
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.categoriesGetInfo:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        
        default:
            return state;
    }
}