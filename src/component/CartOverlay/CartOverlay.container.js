import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CartOverlay from './CartOverlay.component';
import { CartItemsType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
  cartItems: state.CartReducer.cartItems,
  selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export class CartOverlayContainer extends PureComponent {
  clickCaptured = false;
  static propTypes = {
    cartItems: CartItemsType.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.wrapperRef = React.createRef();
    this.buttonRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = (event) => {
    try {
      if (this.wrapperRef && this.buttonRef) {
        if (
          !this.wrapperRef.current.contains(event.target) &&
          !this.buttonRef.current.contains(event.target)
        ) {
          this.handleButtonClick();
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  containerProps() {
    const totalCount = this.props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0);
    return {
      isOpened: this.state.open,
      totalCount: totalCount,
      innerRef: this.wrapperRef,
      buttonRef: this.buttonRef,
      products: this.props.cartItems,
      selectedCurrency: this.props.selectedCurrency,
      toggleCart: this.handleButtonClick,
    };
  }

  render() {
    return <CartOverlay {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps)(CartOverlayContainer);
