import { ADD_PRODUCT_TO_CART, UPDATE_PRODUCT_AMOUNT, REMOVE_PRODUCT, CLEAR_CART } from './Cart.action';
import { setCartItemId } from 'Util/Cart';
export const getInitialState = () => ({
  cartItems: [],
});

export const addProductToCart = (action,state) => {
  let cartItemsList = state.cartItems;

  const cartItemId = setCartItemId(action.product);
  
  const existingProductFound = cartItemsList.find(
    (product) => product.cartItemId === cartItemId,
  );

  if (existingProductFound) {
    cartItemsList = state.cartItems?.map((product) => {
      if (product.cartItemId !== cartItemId) {
        return product;
      }
      return {
        ...product,
        cartItemId,
        amount: product.amount + 1,
      };
    });
  } else {
    cartItemsList = [...cartItemsList, {
      ...action.product, cartItemId, amount: 1,
    }];
  }
  return {
    ...state,
    cartItems: cartItemsList,
  };
};

export const updateProductAmount = (action,state) => {
  return{
    ...state,
    cartItems: state.cartItems?.map(
      (product) => {
        if (product.cartItemId !== action.product.cartItemId) {
          return product;
        }
        return {
          ...product,
          amount: action.amount,
        };
      },
    ),
  };
}

export const removeProduct = (action,state) => {
  return {
    ...state,
    cartItems: state.cartItems.filter(
      (product) => product.cartItemId !== action.product.cartItemId,
    ),
  };
};

export const clearCart = (state) => {
  return {
    ...state,
    cartItems: [],
  }
}
const CartReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(action,state);
    case UPDATE_PRODUCT_AMOUNT:
      return updateProductAmount(action,state);
    case REMOVE_PRODUCT:
      return removeProduct(action,state);
    case CLEAR_CART:
      return clearCart(state);
    default:
      return state;
  }
};

export default CartReducer;
