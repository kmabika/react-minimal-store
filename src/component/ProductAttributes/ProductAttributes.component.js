import PropTypes from 'prop-types';
import { PureComponent } from "react";
import ProductAttribute from 'Component/ProductAttribute';
import { AttributesType } from 'Type/ProductList.type';

export class ProductAttributes extends PureComponent {
    static propTypes = {
        attributes: AttributesType.isRequired,
        inStock: PropTypes.bool.isRequired,
    };

    renderProductAttribute(item, attributeData) {
        const attributeItem = {
            ...item,
        }
        if (item.id === 'undefined') {
            return null;
        }
        return (
            <ProductAttribute
                key={item.id}
                item={attributeItem}
                attributeData={attributeData}
            />
        )
    };

    renderAttributes() {
        const { attributes, inStock } = this.props;
        return Object.values(attributes).map((attribute) => {
            const {
                id,
                items,
                name,
                type,
            } = attribute;

            const attributeData = {
                name: name, type: type
            };

            if (!inStock){
                return null;
            };
            return (
                <div key={id} style={{ display: 'flex', width: '50%' }}>
                    {items.map((item) => (
                        this.renderProductAttribute(item, attributeData)
                    ))}
                </div>
            )
        })
    };

    render() {
        return (
            <div>
                {this.renderAttributes()}
            </div>
        )
    }
};

export default ProductAttributes;