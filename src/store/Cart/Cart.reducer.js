import { setCartItemId, setDefaultAttributes } from 'Util/Cart';
import { ADD_PRODUCT_TO_CART, UPDATE_PRODUCT_AMOUNT, REMOVE_PRODUCT } from './Cart.action';

export const getInitialState = () => ({
  cartItems: [],
});

export const addProductToCart = (action, state) => {
  let cartItemsList = state.cartItems;

  const defaultProduct = setDefaultAttributes(action.product);
  const cartItemId = setCartItemId(defaultProduct);

  const existingProductFound = cartItemsList.find((product) => product.cartItemId === cartItemId);

  if (existingProductFound) {
    cartItemsList = state.cartItems.map((product) => {
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
    cartItemsList = [
      ...cartItemsList,
      {
        ...defaultProduct,
        cartItemId,
        amount: 1,
      },
    ];
  }
  return {
    ...state,
    cartItems: cartItemsList,
  };
};

export const updateProductAmount = (action, state) => ({
  ...state,
  cartItems: state.cartItems.map((product) => {
    if (product.cartItemId !== action.product.cartItemId) {
      return product;
    }
    return {
      ...product,
      amount: action.amount,
    };
  }),
});

export const removeProduct = (action, state) => ({
  ...state,
  cartItems: state.cartItems.filter((product) => product.cartItemId !== action.product.cartItemId),
});

const CartReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(action, state);
    case UPDATE_PRODUCT_AMOUNT:
      return updateProductAmount(action, state);
    case REMOVE_PRODUCT:
      return removeProduct(action, state);
    default:
      return state;
  }
};

export default CartReducer;
