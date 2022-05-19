export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
export const UPDATE_ACTIVE_PRODUCT = 'UPDATE_ACTIVE_PRODUCT';
export const RESET_PRODUCT_ATTRIBUTES = 'RESET_PRODUCT_ATTRIBUTES';

export const getProductsList = (products) => ({
  type: GET_PRODUCTS,
  products,
});
export const selectAttribute = (attribute) => ({
  type: SELECT_ATTRIBUTE,
  attribute,
});

export const updateActiveProduct = (product) => ({
  type: UPDATE_ACTIVE_PRODUCT,
  product,
});

export const resetProductAttributes = (product) => ({
  type: RESET_PRODUCT_ATTRIBUTES,
  product,
});
