import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import CartPreview from './CartPreview.component';
import { CartItemsType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';

export class CartPreviewContainer extends PureComponent {
  static propTypes = {
    products: CartItemsType.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
    toggleCart: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    totalCount: PropTypes.number.isRequired,
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  };

  containerProps() {
    const { products, selectedCurrency, toggleCart, innerRef, totalCount } = this.props;
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
      totalCount: totalCount,
      totalAmount: total,
      isOpened: this.props.isOpened,
    };
  }

  render() {
    return <CartPreview {...this.containerProps()} />;
  }
}

export default CartPreviewContainer;
