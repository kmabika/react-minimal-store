import { PureComponent } from 'react'
import { 
    ProductTextAttribute, 
    ProductColorAttribute, 
    ProductAttributeWrapper, 
    ProductAttributeToolTipWrapper
} from './styled';


export class ProductAttribute extends PureComponent{

    renderAttributeByType() {
        const {type} = this.props
        switch (type) {
            case "text":
                return this.renderTextAttribute();
            case 'swatch':
                return this.renderColorAttribute();
            case 'capacity':
                return this.renderTextAttribute();
            default:
                return this.renderPlaceHolder();
        }
    }

    renderTextAttribute() {
        const {displayValue} = this.props

        return (
                <ProductTextAttribute>{displayValue}</ProductTextAttribute>
        )
    };

    renderColorAttribute() {
        const {displayValue,value} = this.props
        return (
            <>
            <ProductColorAttribute color={value}></ProductColorAttribute>
            <ProductAttributeToolTipWrapper>{displayValue}</ProductAttributeToolTipWrapper>
            </>
        )
    };

    renderPlaceHolder(){
        return(
                <p>Place Holder</p>
     )
    }

    render(){
        return(
                <ProductAttributeWrapper>{this.renderAttributeByType()}</ProductAttributeWrapper>
        )
    }
}

export default ProductAttribute;