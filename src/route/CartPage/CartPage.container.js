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
    const total = cartItems
      .reduce((accumulator, item) => {
        const filteredPrice = item.prices.filter(
          (price) => price.currency.symbol === selectedCurrency.symbol
        )[0];
        return accumulator + item.amount * filteredPrice.amount;
      }, 0)
      .toFixed(2);
    const totalQuantity = this.props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0);
    return {
      cartItems,
      selectedCurrency,
      total,
      totalQuantity,
      updateProductAmount,
    };
  }
  render() {
    return <CartPage {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
