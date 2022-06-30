/* eslint-disable camelcase */
import {
  GET_BANNERS_BEGIN,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_ERROR
} from '../actions';

const banners_reducer = (state, action) => {
  if (action.type === GET_BANNERS_BEGIN) {
    return { ...state, banners_loading: true };
  }
  if (action.type === GET_BANNERS_SUCCESS) {
    const featured_banners = action.payload;
    return {
      ...state,
      banners_loading: false,
      banners: action.payload,
      featured_banners
    };
  }
  if (action.type === GET_BANNERS_ERROR) {
    return { ...state, banners_loading: false, banners_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default banners_reducer;
