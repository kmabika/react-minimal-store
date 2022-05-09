export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  product,
});

export const updateProductAmount = (product, amount) => ({
  type: UPDATE_PRODUCT_AMOUNT,
  product,
  amount,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

