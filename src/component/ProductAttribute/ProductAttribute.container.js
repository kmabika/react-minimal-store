import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { connect } from "react-redux";
import { ProductDispatcher } from "Store/Product/Product.dispatcher";
import ProductAttribute from './ProductAttribute.component';
import { AttributeItemType } from 'Type/ProductList.type';

export const mapDispatchToProps = (dispatch) => ({
    updateSelectAttribute: (attribute) => ProductDispatcher.updateSelectAttribute(dispatch, attribute),
});


export class ProductAttributeContainer extends PureComponent {

    static propTypes = {
        item: AttributeItemType.isRequired,
        updateSelectAttribute: PropTypes.func.isRequired,
        attributeData: PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }),
    };

    constructor(props) {
        super(props);
        this.onSelectAttributeHandler = this.onSelectAttributeHandler.bind(this);
    };

    onSelectAttributeHandler(attribute) {
        const { updateSelectAttribute } = this.props;
        updateSelectAttribute(attribute);
    };

    containerProps() {
        const { displayValue, value, id, isSelected } = this.props.item;
        const { type, name } = this.props.attributeData;

        return {
            displayValue,
            id,
            isSelected,
            onSelectAttributeHandler: this.onSelectAttributeHandler,
            value,
            name,
            type,
        };
    };

    render() {
        return (
            <ProductAttribute {...this.containerProps()} />
        )
    }
}

export default connect(null, mapDispatchToProps)(ProductAttributeContainer);