import { PureComponent } from 'react'
import { 
    ProductTextAttribute, 
    ProductColorAttribute, 
    ProductAttributeWrapper, 
    ToolTip,
    ToolTipText,
} from './styled';


export class ProductAttribute extends PureComponent{

    state = {
        textSelected: false,
        colorSelected: false,
    }

    toggle = (buttonName,item) => () => {
        this.setState(prev =>({[buttonName]: !prev[buttonName]}))
        console.log(`button: ${item}`)
    };

    renderAttributeByType() {
        const {type} = this.props
        switch (type) {
            case "text":
                return this.renderTextAttribute();
            case 'swatch':
                return this.renderColorAttribute();
            default:
                return this.renderPlaceHolder();
        }
    }

    renderTextAttribute() {
        const {displayValue,value} = this.props
        const {name} = this.props
        const {textSelected} = this.state
        return (
            <ToolTip>
                 <ProductTextAttribute isSelected={textSelected} onClick={this.toggle('textSelected',value)}>{displayValue}</ProductTextAttribute>
                 <ToolTipText>{name}</ToolTipText>
            </ToolTip>
               
        )
    };

    renderColorAttribute() {
        const {displayValue,value} = this.props
        const {colorSelected} = this.state
        return (
            <>
            <ToolTip>
            <ProductColorAttribute 
            isSelected={colorSelected} 
            color={value} 
            onClick={this.toggle('colorSelected',value)}/>
                <ToolTipText>{displayValue}</ToolTipText>
            </ToolTip>
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