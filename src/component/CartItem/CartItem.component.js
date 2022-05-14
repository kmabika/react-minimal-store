import PropTypes from 'prop-types';
import CartAttribute from 'Component/CartAttribute';
import Paragraph from 'Component/Paragraph';
import { PureComponent } from 'react';
import {
  CartItemContentWrapper,
  CartItemWrapper,
  CartItemAttributesWrapper,
  AttributesItemsWrapper,
  CartItemCountersWrapper,
  CartItemCounterUpBtn,
  CartItemCountAmount,
  CartItemCounterDownBtn,
  CartItemImgWrapper,
  CartItemImg,
} from './styled';
import { CartItemType } from 'Type/Cart.type';
import { PriceItemType } from 'Type/Price.type';

export class CartItem extends PureComponent {
  static propTypes = {
    updateProductAmount: PropTypes.func.isRequired,
    product: CartItemType.isRequired,
    price: PriceItemType.isRequired,
  };

  renderProductAttribute(item, attributeData) {
    const attributeItem = {
      ...item,
    };
    if (item.id === 'undefined') {
      return null;
    }
    return (
      <CartAttribute
        key={item.id}
        item={attributeItem}
        attributeData={attributeData}
      />
    );
  }

  renderAttributes() {
    const { attributes } = this.props.product;

    return Object.values(attributes)?.map((attribute) => {
      const { id, items, type } = attribute;

      const attributeData = {
        type: type,
      };

      return (
        <AttributesItemsWrapper key={id}>
          {items?.map((item) =>
            this.renderProductAttribute(item, attributeData)
          )}
        </AttributesItemsWrapper>
      );
    });
  }

  render() {
    const { product, price, updateProductAmount, image } = this.props;
    return (
      <CartItemWrapper>
        <CartItemContentWrapper>
          <Paragraph
            fontSize={1}
            fontWeight={300}
            children={`${product.brand} ${product.name}`}
          />
          <Paragraph
            fontSize={1}
            fontWeight={500}
            children={`${price.currency.symbol}${price.amount}`}
          />
          <CartItemAttributesWrapper>
            {this.renderAttributes()}
          </CartItemAttributesWrapper>
        </CartItemContentWrapper>
        <CartItemCountersWrapper>
          <CartItemCounterUpBtn
            onClick={() => {
              updateProductAmount(product, product.amount + 1);
            }}
            aria-label="increase quantity">
            +
          </CartItemCounterUpBtn>
          <CartItemCountAmount>{product.amount}</CartItemCountAmount>
          <CartItemCounterDownBtn
            onClick={() => {
              updateProductAmount(product, product.amount - 1);
            }}
            aria-label="decrease quantity">
            -
          </CartItemCounterDownBtn>
        </CartItemCountersWrapper>
        <CartItemImgWrapper>
          <CartItemImg
            src={`${image}`}
            alt={product.name}
            width={105}
            height={137}
          />
        </CartItemImgWrapper>
      </CartItemWrapper>
    );
  }
}

export default CartItem;
