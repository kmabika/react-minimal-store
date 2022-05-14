import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { AttributesType, ProductType } from 'Type/ProductList.type';
import ProductAttributes from './ProductAttributes.component';

export class ProductAttributesContainer extends PureComponent {
  static propTypes = {
    selectedProduct: ProductType,
    attributes: AttributesType.isRequired,
    inStock: PropTypes.bool,
  };

  containerProps() {
    const { attributes, selectedProduct } = this.props;
    if (selectedProduct === undefined) {
      return {
        attributes,
      };
    }
    return {
      selectedProduct,
      attributes,
    };
  }

  render() {
    return <ProductAttributes {...this.containerProps()} />;
  }
}

export default ProductAttributesContainer;
