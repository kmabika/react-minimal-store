import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import {
  CartContainer,
  CartWrap,
  CartHeader,
  CartHeading,
  CartClearBtn,
  Cart,
  CartInnerWrap,
  EmptyCart,
  CheckoutTotalItem,
  CartDetail,
  CartAmount,
  CartButtonWrap,
  ViewBagBtn,
  CheckOutBtn,
} from './styled';
import CartItem from 'Component/CartItem';
import { CartItemsType } from 'Type/Cart.type';

export class CartPreview extends PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    products: CartItemsType.isRequired,
    totalCount: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { isOpened } = this.props;
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const {
      products,
      totalCount,
      selectedCurrency,
      totalAmount,
      innerRef,
      toggleCart,
    } = this.props;
    return (
      <>
        <CartContainer ref={innerRef}>
          <CartWrap>
            <CartHeader>
              <CartHeading>
                <b>My Bag,
                  <p>{totalCount}{' '}{totalCount === 1 ? 'item' : 'items'}</p>
                </b>
              </CartHeading>
              <CartClearBtn
                onClick={() => {
                  this.props.clearCart();
                }}
                aria-label="clear cart">
                Clear Cart
              </CartClearBtn>
            </CartHeader>
            <Cart>
              <CartInnerWrap aria-label="cart products">
                {products.length === 0 && (
                  <EmptyCart>Your cart is empty!</EmptyCart>
                )}
                {products.length > 0 &&
                  products?.map((product) => {
                    return (
                      <CartItem
                        key={product.cartItemId}
                        selectedCurrency={this.props.selectedCurrency}
                        product={product}
                      />
                    );
                  })}
              </CartInnerWrap>
            </Cart>
            <CheckoutTotalItem>
              <CartDetail>Total</CartDetail>
              <CartAmount>
                {selectedCurrency.symbol} {totalAmount}
              </CartAmount>
            </CheckoutTotalItem>
            <CartButtonWrap>
              <ViewBagBtn
                to="/cart"
                exact
                onClick={() => {
                  toggleCart();
                }}>
                View Bag
              </ViewBagBtn>
              <CheckOutBtn
                to="#"
                onClick={() => {
                  toggleCart();
                }}
                exact>
                Check Out
              </CheckOutBtn>
            </CartButtonWrap>
          </CartWrap>
        </CartContainer>
      </>
    );
  }
}

export default CartPreview;
