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
        <>
          <>
            {name && name.length > 10 ? (
              <Paragraph
                lineHeight={1.125}
                fontFamily="Roboto Condensed"
                marginTop={0.2}
                children={`${name}:`}
                fontSize={0.8}
                fontWeight={500}
              />
            ) : null}
          </>
          <AttributesItemsWrapper key={id}>
            {items?.map((item) => this.renderProductAttribute(item, attributeData))}
          </AttributesItemsWrapper>
        </>
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
            lineHeight={1.6}
            children={`${product.brand} <br/> ${product.name}`}
            marginBottom={0.8}
          />
          <Paragraph
            fontSize={1}
            fontWeight={500}
            lineHeight={1.6}
            marginBottom={1.6875}
            children={`${price.currency.symbol}${price.amount}`}
          />
          <CartItemAttributesWrapper>{this.renderAttributes()}</CartItemAttributesWrapper>
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
          <CartItemImg src={`${image}`} alt={product.name} width={105} height={137} />
        </CartItemImgWrapper>
      </CartItemWrapper>
    );
  }
}

export default CartItem;
