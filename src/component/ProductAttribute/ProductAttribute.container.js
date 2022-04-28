import { PureComponent } from "react";
import ProductAttribute from './ProductAttribute.component'
export class ProductAttributeContainer extends PureComponent{

    containerProps(){
        const {displayValue,value} = this.props.item
        const {type, name } = this.props.attributeData
        return{
            displayValue,
            value,
            name,
            type
        }
    }

    render(){
        return(
            <ProductAttribute {...this.containerProps()} />
        )
    }
}

export default ProductAttributeContainer