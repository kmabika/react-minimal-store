import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { CartItemAttributeBtn, CartItemColorAttribute } from './styled';
import { AttributeItemType } from 'Type/ProductList.type';

export class CartAttribute extends PureComponent {
  static propTypes = {
    attributeData: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
    item: AttributeItemType.isRequired,
  };

  renderAttributeByType() {
    const { type } = this.props.attributeData;
    switch (type) {
      case 'text':
        return this.renderTextAttribute();
      case 'swatch':
        return this.renderColorAttribute();
      default:
        return this.renderPlaceHolder();
    }
  }

  renderTextAttribute() {
    const { value, displayValue, isSelected } = this.props.item;
    return (
      <CartItemAttributeBtn name={displayValue} isSelected={isSelected} aria-label={displayValue}>
        {value}
      </CartItemAttributeBtn>
    );
  }

  rendercheckMarkIcon(color) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m4 12l6 6L20 6"
        />
      </svg>
    );
  }

  renderColorAttribute() {
    const { value, displayValue, isSelected } = this.props.item;
    console.log('error');
    return (
      <CartItemColorAttribute
        name={displayValue}
        color={value}
        isSelected={isSelected}
        aria-label={displayValue}>
        {isSelected &&
          (value === '#000000'
            ? this.rendercheckMarkIcon('#fff')
            : this.rendercheckMarkIcon('#000'))}
      </CartItemColorAttribute>
    );
  }

  render() {
    return <>{this.renderAttributeByType()}</>;
  }
}

export default CartAttribute;
