import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { ProductTextAttributeBtn, ProductColorAttribute, ProductAttributeWrapper } from './styled';

export class ProductAttribute extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    displayValue: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelectAttributeHandler: PropTypes.func.isRequired,
    selectedProduct: PropTypes.object,
  };

  renderAttributeByType() {
    const { type } = this.props;
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
    const { selectedProduct } = this.props;
    if (selectedProduct) {
      return this.renderLargeTextAttribute();
    } else {
      return this.renderSmallTextAttribute();
    }
  }

  renderLargeTextAttribute() {
    const { value, name, displayValue, isSelected, onSelectAttributeHandler, id, selectedProduct } =
      this.props;
    let selectedAttribute = null;
    if (selectedProduct !== undefined) {
      selectedAttribute = { name, value, id, selectedProduct };
    } else {
      selectedAttribute = { name, value, id };
    }
    return (
      <>
        {selectedProduct.inStock ? (
          <ProductTextAttributeBtn
            name={displayValue}
            isSelected={isSelected}
            inStock={selectedProduct.inStock}
            aria-label={`select ${displayValue}`}
            onClick={() => onSelectAttributeHandler(selectedAttribute)}>
            {value}
          </ProductTextAttributeBtn>
        ) : (
          <ProductTextAttributeBtn
            name={displayValue}
            inStock={selectedProduct.inStock}
            aria-label={`select ${displayValue}`}>
            {value}
          </ProductTextAttributeBtn>
        )}
      </>
    );
  }

  renderSmallTextAttribute() {
    const { value, displayValue, isSelected } = this.props;
    return (
      <ProductTextAttributeBtn name={displayValue} inStock={true} isSelected={isSelected}>
        {value}
      </ProductTextAttributeBtn>
    );
  }

  renderColorAttribute() {
    const { selectedProduct } = this.props;
    if (selectedProduct) {
      return this.renderLargeColorAttribute();
    } else {
      return this.renderSmallColorAttribute();
    }
  }

  renderSmallColorAttribute() {
    const { value, name, displayValue, isSelected, onSelectAttributeHandler, id } = this.props;
    return (
      <ProductColorAttribute
        name={displayValue}
        color={value}
        isSelected={isSelected}
        inStock={true}
        onClick={() => onSelectAttributeHandler({ name: name, value: value, id: id })}
      />
    );
  }

  renderLargeColorAttribute() {
    const { value, name, displayValue, isSelected, onSelectAttributeHandler, id, selectedProduct } =
      this.props;
    const selectedAttribute = { name, value, id, selectedProduct };
    return (
      <>
        {selectedProduct.inStock ? (
          <ProductColorAttribute
            name={displayValue}
            color={value}
            inStock={selectedProduct.inStock}
            isSelected={isSelected}
            onClick={() => onSelectAttributeHandler(selectedAttribute)}
          />
        ) : (
          <ProductColorAttribute name={displayValue} color={value} />
        )}
      </>
    );
  }

  renderPlaceHolder() {
    return null;
  }

  render() {
    return <ProductAttributeWrapper>{this.renderAttributeByType()}</ProductAttributeWrapper>;
  }
}

export default ProductAttribute;
