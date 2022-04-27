import { PureComponent } from "react";
import ProductAttribute from './ProductAttribute.component'
export class ProductAttributeContainer extends PureComponent{

    containerProps(){
        const {displayValue,value} = this.props.item
        const {type} = this.props
        return{
            displayValue,
            value,
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