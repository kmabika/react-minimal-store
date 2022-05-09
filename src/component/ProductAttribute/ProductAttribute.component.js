import PropTypes from 'prop-types';
import { PureComponent } from 'react'
import {
    ProductTextAttribute,
    ProductColorAttribute,
    ProductAttributeWrapper,
    ToolTip,
    ToolTipText,
} from './styled';
import CheckMarkIcon from 'Images/CheckMark';

export class ProductAttribute extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        displayValue: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        onSelectAttributeHandler: PropTypes.func.isRequired,
    };

    renderAttributeByType() {
        const { type } = this.props;
        switch (type) {
            case "text":
                return this.renderTextAttribute();
            case 'swatch':
                return this.renderColorAttribute();
            default:
                return this.renderPlaceHolder();
        };
    };

    renderTextAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id } = this.props;

        return (
            <ToolTip key={this.props.id}>
                <ProductTextAttribute
                    name={displayValue}
                    isSelected={isSelected}
                    onClick={() => onSelectAttributeHandler({ name: name, value: value, id: id })}
                >
                    {value}
                </ProductTextAttribute>
                <ToolTipText>{name}</ToolTipText>
            </ToolTip>

        );
    };

    renderColorAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id } = this.props;
        return (
            <>
                <ToolTip>
                    <ProductColorAttribute
                        name={displayValue}
                        color={value}
                        isSelected={isSelected}
                        onClick={() => onSelectAttributeHandler({ name: name, value: value, id: id })}
                    >
                        {isSelected
                            && (value === '#000000' ? <CheckMarkIcon color={'#fff'} /> : <CheckMarkIcon color={'#000'} />)}
                    </ProductColorAttribute>
                    <ToolTipText>{displayValue}</ToolTipText>
                </ToolTip>
            </>
        );
    };

    renderPlaceHolder() {
        return null;
    };

    render() {
        return (
            <ProductAttributeWrapper>{this.renderAttributeByType()}</ProductAttributeWrapper>
        );
    };
};

export default ProductAttribute;