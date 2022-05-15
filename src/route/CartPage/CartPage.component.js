import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import {
  CartPageWrapper,
  CartPageHeader,
  CartProductItemWrapper,
  ProductInfoWrapper,
  ProductCounterWrapper,
  ProductCounterBtnWrapper,
  ProductCounterBtn,
  ProductQuantityWrapper,
  ProductCartImgSlideWrapper,
} from './styled';
import { Helmet } from 'react-helmet';
import Headline from 'Component/Headline';
import ProductAttributes from 'Component/ProductAttributes';
import Slider from 'Component/Slider';
import { Wrap } from 'Route/NotFoundPage/styled';

export class CartPage extends PureComponent {
  static propTypes = {
    cartItems: PropTypes.array.isRequired,
    selectedCurrency: PropTypes.object.isRequired,
    updateProductAmount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderHemlet() {
    return (
      <Helmet>
        <html lang="en" />
        <title>Cart | Scandiweb x Kudzai</title>
      </Helmet>
    );
  }

  renderEmptyCartPage() {
    return (
      <Wrap>
        <Headline typeHeadline="h1" fontSize={2}>
          No Items Cart Is Empty
        </Headline>
      </Wrap>
    );
  }

  renderCartItems() {
    const { updateProductAmount, selectedCurrency, cartItems } = this.props;
    return (
      cartItems &&
      cartItems?.map((cartItem) => {
        const filteredPrice = cartItem.prices?.filter(
          (price) => price.currency.label === selectedCurrency.label
        )[0];
        return (
          <CartProductItemWrapper key={cartItem.cartItemId}>
            <ProductInfoWrapper>
              <Headline typeHeadline="h1" fontSize={2} fontWeight={600}>
                {cartItem.name}
              </Headline>
              <Headline typeHeadline="h1" fontSize={1.5} fontWeight={400}>
                {cartItem.brand}
              </Headline>
              <Headline
                typeHeadline="h1"
                fontWeight={700}
                fontSize={1}
                marginBottom={1}>
                {`${
                  filteredPrice.currency.symbol
                }${filteredPrice.amount.toFixed(2)}`}
              </Headline>
              <ProductAttributes
                attributes={cartItem.attributes}
                inStock={cartItem.inStock}
              />
            </ProductInfoWrapper>
            <ProductCounterWrapper>
              <ProductCounterBtnWrapper>
                <ProductCounterBtn
                  onClick={() => {
                    updateProductAmount(cartItem, cartItem.amount + 1);
                  }}
                  aria-label="increase quantity">
                  +
                </ProductCounterBtn>
                <ProductQuantityWrapper>
                  {cartItem.amount}
                </ProductQuantityWrapper>
                <ProductCounterBtn
                  onClick={() => {
                    updateProductAmount(cartItem, cartItem.amount - 1);
                  }}
                  aria-label="decrease quantity">
                  -
                </ProductCounterBtn>
              </ProductCounterBtnWrapper>
              <ProductCartImgSlideWrapper>
                <Slider images={cartItem.images} />
              </ProductCartImgSlideWrapper>
            </ProductCounterWrapper>
          </CartProductItemWrapper>
        );
      })
    );
  }

  render() {
    const { cartItems } = this.props;
    return (
      <CartPageWrapper>
        {this.renderHemlet()}
        <CartPageHeader>
          <Headline typeHeadline="h1" fontWeight={700} fontSize={2}>
            Cart
          </Headline>
        </CartPageHeader>
        {cartItems && cartItems.length > 0
          ? this.renderCartItems()
          : this.renderEmptyCartPage()}
      </CartPageWrapper>
    );
  }
}

export default CartPage;
