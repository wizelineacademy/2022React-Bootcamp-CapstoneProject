import { types } from '../types';

const initialState = {
    loading: true,
    home: {
        loading: true,
    },
    list: {
        results: [],
        loading: true,
    },
    found: {
        loading: true,
    },
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productsStartGetHome:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        case types.productsStartGetList:
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        case types.productsSetPage:
            return {
                ...state,
                ...action.payload,
            }
        case types.productsSetLoadingList:
            return {
                ...state,
                ...action.payload,
            }
        case types.productsStartGetSearch:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}