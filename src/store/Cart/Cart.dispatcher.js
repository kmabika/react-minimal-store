import { addProductToCart, removeProduct, updateProductAmount, clearCart } from './Cart.action';
import {toast} from 'react-toastify';
import { toastAction } from 'Util/';


export class CartDispatcher {
  
  static addProductToCart(dispatch, product) {
    dispatch(addProductToCart(product));
  }

  static updateProductAmount(dispatch, product, amount) {
    (amount <= 0 ) ? dispatch(removeProduct(product)) : dispatch(updateProductAmount(product,amount));
  };

  static clearCart(dispatch) {
    dispatch(clearCart())
    toast.error(`Cart Cleared`, toastAction);
  }
}

export default new CartDispatcher();
