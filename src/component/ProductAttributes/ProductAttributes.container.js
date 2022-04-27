import { PureComponent } from "react";
import ProductAttributes from "./ProductAttributes.component";

export class ProductAttributesContainer extends PureComponent{

    containerProps(){
        const {attributes, inStock} = this.props;
        return {
            attributes,
            inStock
        }
    }

    render(){
        return(
            <ProductAttributes
            {...this.containerProps()}
            />
        )
    }
};

export default ProductAttributesContainer;