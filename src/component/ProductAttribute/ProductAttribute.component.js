import PropTypes from 'prop-types';
import { PureComponent } from 'react'
import {
    ProductTextAttributeBtn,
    ProductColorAttribute,
    ProductAttributeWrapper,
    ToolTip,
    ToolTipText,
} from './styled';

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
                return this.renderTextAttribute()
            case 'swatch':
                return this.renderColorAttribute();
            default:
                return this.renderPlaceHolder();
        };
    };

    renderTextAttribute() {
        const { selectedProduct } = this.props;
        if (selectedProduct) {
            return this.renderLargeTextAttribute();
        } else {
            return this.renderSmallTextAttribute();
        }
    };

    renderLargeTextAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id, selectedProduct } = this.props;
        let selectedAttribute = null;
        if (selectedProduct !== undefined) {
            selectedAttribute = { name, value, id, selectedProduct };
        } else {
            selectedAttribute = { name, value, id };
        }
        return (
            <ProductTextAttributeBtn
                name={displayValue}
                isSelected={isSelected}
                aria-label={`select ${displayValue}`}
                onClick={() => onSelectAttributeHandler(selectedAttribute)}
            >
                {value}
            </ProductTextAttributeBtn>
        );
    }

    renderSmallTextAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id, selectedProduct } = this.props;
        let selectedAttribute = null;
        if (selectedProduct !== undefined) {
            selectedAttribute = { name, value, id, selectedProduct };
        } else {
            selectedAttribute = { name, value, id };
        };
        return (
            <ToolTip key={this.props.id}>
                <ProductTextAttributeBtn
                    name={displayValue}
                    isSelected={isSelected}
                    onClick={() => onSelectAttributeHandler(selectedAttribute)}
                >
                    {value}
                </ProductTextAttributeBtn>
                <ToolTipText>{name}</ToolTipText>
            </ToolTip>

        );
    };


    renderColorAttribute() {
        const { selectedProduct } = this.props;
        if (selectedProduct) {
            return this.renderLargeColorAttribute();

        } else {
            return this.renderSmallColorAttribute()
        }
    };

    rendercheckMarkIcon(color) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12l6 6L20 6" /></svg>
            );
    };

    renderSmallColorAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id } = this.props;
        return (
            <ToolTip>
                <ProductColorAttribute
                    name={displayValue}
                    color={value}
                    isSelected={isSelected}
                    onClick={() => onSelectAttributeHandler({ name: name, value: value, id: id })}
                >
                    {isSelected
                        && (value === '#000000' ? this.rendercheckMarkIcon('#fff') : this.rendercheckMarkIcon('#000'))}
                </ProductColorAttribute>
                <ToolTipText>{displayValue}</ToolTipText>
            </ToolTip>
        );
    };

    renderLargeColorAttribute() {
        const { value, name, displayValue, isSelected, onSelectAttributeHandler, id, selectedProduct } = this.props;
        const selectedAttribute = { name, value, id, selectedProduct };
        return (
            <ProductColorAttribute
                name={displayValue}
                color={value}
                isSelected={isSelected}
                onClick={() => onSelectAttributeHandler(selectedAttribute)}
            >
                {isSelected
                    && (value === '#000000' ? this.rendercheckMarkIcon('#fff') : this.rendercheckMarkIcon('#000'))}
            </ProductColorAttribute>
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