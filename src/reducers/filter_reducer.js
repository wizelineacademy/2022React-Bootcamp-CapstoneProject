/* eslint-disable camelcase */
import {
  LOAD_PRODUCTS,
  PASS_ACTIVE_CATEGORY,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  FILTER_PARAMS,
  GET_SINGLE_PRODUCT_SUCCESS,
  SEARCH_FILTERS
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const gridProducts = action.payload;
    const filterGridProducts = gridProducts.slice(0, 16);
    const { param_active } = state;

    if (param_active === null) {
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        grid_products: filterGridProducts
      };
    }

    if (param_active != null) {
      // filtering
      const tempProducts = gridProducts.filter((product) =>
        param_active.includes(product.data.category.slug)
      );

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: tempProducts,
        grid_products: filterGridProducts
      };
    }
  }
  if (action.type === PASS_ACTIVE_CATEGORY) {
    const activecategoryIn = action.payload;
    const { activecategory } = state.filters;

    if (activecategory.indexOf(activecategoryIn) === -1) {
      return {
        ...state,
        filters: {
          ...state.filters,
          activecategory: [...activecategory, activecategoryIn]
        }
      };
    }
    if (activecategory.indexOf(activecategoryIn) > -1) {
      const newActivecat = activecategory.filter(
        (item) => item !== activecategoryIn
      );
      return {
        ...state,
        filters: { ...state.filters, activecategory: newActivecat }
      };
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { activecategory } = state.filters;
    const { all_products } = state;
    // filtering
    const tempProducts = all_products.filter((product) =>
      activecategory.includes(product.data.category.id)
    );
    if (activecategory.length > 0) {
      return {
        ...state,
        filtered_products: tempProducts
      };
    }
    if (activecategory.length === 0) {
      return {
        ...state,
        filtered_products: all_products
      };
    }
  }
  if (action.type === FILTER_PARAMS) {
    const titleCategory = action.payload;
    return {
      ...state,
      param_active: titleCategory.toLowerCase()
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    const singleProduct = action.payload;
    return {
      ...state,
      single_product: {
        name: singleProduct.results[0].data.name,
        images: singleProduct.results[0].data.images,
        price: singleProduct.results[0].data.price,
        sku: singleProduct.results[0].data.sku,
        description: singleProduct.results[0].data.description[0].text,
        category: singleProduct.results[0].data.category.slug,
        tags: singleProduct.results[0].data.category.tags,
        specs: singleProduct.results[0].data.specs,
        stock: singleProduct.results[0].data.stock,
        mainimage: singleProduct.results[0].data.mainimage.url
      }
    };
  }
  if (action.type === SEARCH_FILTERS) {
    const { value } = action.payload;
    const { results } = value;

    return {
      ...state,
      search_products: results
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      filters: {
        activecategory: []
      }
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
