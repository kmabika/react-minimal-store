export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
export const getProductsList = (products) => ({
  type: GET_PRODUCTS,
  products,
});
export const selectAttribute = (attribute) => ({
  type: SELECT_ATTRIBUTE,
  attribute,
})