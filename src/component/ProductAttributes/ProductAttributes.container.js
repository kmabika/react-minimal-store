import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { AttributesType } from 'Type/ProductList.type';
import ProductAttributes from "./ProductAttributes.component";

export class ProductAttributesContainer extends PureComponent {
    static propTypes = {
        attributes: AttributesType.isRequired,
        inStock: PropTypes.bool.isRequired,
    };

    containerProps() {
        const { attributes, inStock } = this.props;
        return {
            attributes,
            inStock
        }
    }

    render() {
        return (
            <ProductAttributes
                {...this.containerProps()}
            />
        )
    }
};

export default ProductAttributesContainer;