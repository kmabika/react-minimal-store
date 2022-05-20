import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import ProductAttribute from 'Component/ProductAttribute';
import { AttributesType } from 'Type/ProductList.type';
import { ProductAttributesWrapper } from './styled';
import Paragraph from 'Component/Paragraph';

export class ProductAttributes extends PureComponent {
  static propTypes = {
    attributes: AttributesType.isRequired,
    inStock: PropTypes.bool,
    selectedProduct: PropTypes.object,
  };

  renderProductAttribute(item, attributeData) {
    const { selectedProduct } = this.props;
    return (
      item.id && (
        <ProductAttribute
          key={item.id}
          selectedProduct={selectedProduct}
          item={item}
          attributeData={attributeData}
        />
      )
    );
  }

  renderAttributes() {
    const { attributes } = this.props;
    return Object.values(attributes)?.map((attribute) => {
      const { id, items, name, type } = attribute;
      const attributeData = {
        name: name,
        type: type,
      };
      return (
        <div key={id}>
          <Paragraph
            lineHeight={18}
            fontFamily="Roboto Condensed"
            children={`${name}:`}
            fontSize={18}
            fontWeight={700}
          />
          <ProductAttributesWrapper key={id}>
            {items && items?.map((item) => this.renderProductAttribute(item, attributeData))}
          </ProductAttributesWrapper>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderAttributes()}</div>;
  }
}

export default ProductAttributes;
