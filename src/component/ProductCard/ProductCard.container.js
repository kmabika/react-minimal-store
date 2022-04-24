import {PureComponent} from 'react';
import ProductCard from './ProductCard.component';

export class ProductCardContainer extends PureComponent{
    
    containerProps(){
        const {
            name,
            id,
            prices,
            gallery,
            inStock
        } = this.props.product;
        return {
            name,
            id,
            image: gallery[0],
            prices,
            inStock
        }
    }
    render(){
        return(<ProductCard {...this.containerProps()}/>)
    }
}

export default ProductCardContainer;