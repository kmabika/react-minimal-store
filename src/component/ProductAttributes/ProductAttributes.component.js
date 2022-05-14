import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import ProductAttribute from 'Component/ProductAttribute';
import { AttributesType } from 'Type/ProductList.type';
import { ProductPriceHeaderWrapper } from 'Route/ProductDescriptionPage/styled';
import Paragraph from 'Component/Paragraph';

export class ProductAttributes extends PureComponent {
  static propTypes = {
    attributes: AttributesType.isRequired,
    inStock: PropTypes.bool,
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
    const { attributes, selectedProduct } = this.props;

    return Object.values(attributes)?.map((attribute) => {
      const { id, items, name, type } = attribute;

      const attributeData = {
        name: name,
        type: type,
      };
      return (
        <div key={id}>
          {selectedProduct && (
            <ProductPriceHeaderWrapper>
              <Paragraph
                lineHeight={1.125}
                children={`${name}:`}
                fontSize={1.125}
                fontWeight={700}
              />
            </ProductPriceHeaderWrapper>
          )}

          <div key={id} style={{ display: 'flex', width: '50%' }}>
            {items &&
              items?.map((item) =>
                this.renderProductAttribute(item, attributeData)
              )}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderAttributes()}</div>;
  }
}

export default ProductAttributes;
