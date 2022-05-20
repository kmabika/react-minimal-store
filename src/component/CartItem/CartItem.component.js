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
  CartItemCounterBtn,
  CartItemCountAmount,
  CartItemImgWrapper,
  CartItemImg,
  CounterBtnWrapper,
} from './styled';

import { CartItemType } from 'Type/Cart.type';
import { PriceItemType } from 'Type/Price.type';

export class CartItem extends PureComponent {
  static propTypes = {
    updateProductAmount: PropTypes.func.isRequired,
    product: CartItemType.isRequired,
    price: PriceItemType.isRequired,
    image: PropTypes.string.isRequired,
  };

  renderProductAttribute(item, attributeData) {
    const attributeItem = {
      ...item,
    };
    if (item.id === 'undefined') {
      return null;
    }
    return <CartAttribute key={item.id} item={attributeItem} attributeData={attributeData} />;
  }

  renderAttributes() {
    const { attributes } = this.props.product;

    return Object.values(attributes)?.map((attribute) => {
      const { id, items, type, name } = attribute;
      const attributeData = {
        type: type,
        name: name,
      };

      return (
        <CartItemAttributesWrapper key={id}>
          <Paragraph
            lineHeight={16}
            fontFamily="Raleway"
            marginTop={2}
            children={`${name}:`}
            fontSize={14}
            fontWeight={400}
          />
          <AttributesItemsWrapper>
            {items?.map((item) => this.renderProductAttribute(item, attributeData))}
          </AttributesItemsWrapper>
        </CartItemAttributesWrapper>
      );
    });
  }

  render() {
    const { product, price, updateProductAmount, image } = this.props;
    return (
      <CartItemWrapper>
        <CartItemContentWrapper>
          <Paragraph
            fontSize={16}
            fontWeight={300}
            lineHeight={25.6}
            children={`${product.brand} <br/> ${product.name}`}
            marginBottom={4}
          />
          <Paragraph
            fontSize={16}
            fontWeight={500}
            lineHeight={25.6}
            children={`${price.currency.symbol}${price.amount}`}
          />
          {this.renderAttributes()}
        </CartItemContentWrapper>
        <CartItemCountersWrapper>
          <CounterBtnWrapper>
            <CartItemCounterBtn
              onClick={() => {
                updateProductAmount(product, product.amount + 1);
              }}
              aria-label="increase quantity">
              +
            </CartItemCounterBtn>
            <CartItemCountAmount>{product.amount}</CartItemCountAmount>
            <CartItemCounterBtn
              onClick={() => {
                updateProductAmount(product, product.amount - 1);
              }}
              aria-label="decrease quantity">
              -
            </CartItemCounterBtn>
          </CounterBtnWrapper>
        </CartItemCountersWrapper>
        <CartItemImgWrapper>
          <CartItemImg src={`${image}`} alt={product.name} width={105} height={137} />
        </CartItemImgWrapper>
      </CartItemWrapper>
    );
  }
}

export default CartItem;
