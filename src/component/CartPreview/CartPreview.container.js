import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartPreview from './CartPreview.component';
import { CartDispatcher } from 'Store/Cart/Cart.dispatcher';
import { CartItemsType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapDispatchToProps = (dispatch) => ({
  clearCart: () => CartDispatcher.clearCart(dispatch),
});

export class CartPreviewContainer extends PureComponent {
  static propTypes = {
    products: CartItemsType.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
    toggleCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    totalCount: PropTypes.number.isRequired,
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  };

  containerProps() {
    const { products, selectedCurrency, toggleCart, innerRef } = this.props;
    const total = products
      .reduce((accumulator, item) => {
        const filteredPrice = item.prices.filter(
          (price) => price.currency.symbol === selectedCurrency.symbol
        )[0];
        return accumulator + item.amount * filteredPrice.amount;
      }, 0)
      .toFixed(2);
    return {
      products: products,
      toggleCart,
      innerRef,
      selectedCurrency: selectedCurrency,
      totalCount: this.props.totalCount,
      totalAmount: total,
      isOpened: this.props.isOpened,
      clearCart: this.props.clearCart,
    };
  }

  render() {
    return <CartPreview {...this.containerProps()} />;
  }
}

export default connect(null, mapDispatchToProps)(CartPreviewContainer);
