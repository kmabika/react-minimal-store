import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CartDispatcher } from 'Store/Cart/Cart.dispatcher';
import CartPage from './CartPage.component';

export const mapStateToProps = (state) => ({
  cartItems: state.CartReducer.cartItems,
  selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
  updateProductAmount: (product, amount) =>
    CartDispatcher.updateProductAmount(dispatch, product, amount),
});

export class CartPageContainer extends PureComponent {
  static propTypes = {
    cartItems: PropTypes.array.isRequired,
    selectedCurrency: PropTypes.object.isRequired,
    updateProductAmount: PropTypes.func.isRequired,
  };

  containerProps() {
    const { cartItems, selectedCurrency, updateProductAmount } = this.props;
    return {
      cartItems,
      selectedCurrency,
      updateProductAmount,
    };
  }
  render() {
    return <CartPage {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
