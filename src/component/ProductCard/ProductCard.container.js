import MainContext from 'Context/MainContext';
import { PureComponent } from 'react';
import ProductCard from './ProductCard.component';

export class ProductCardContainer extends PureComponent {

    static contextType = MainContext;
    
    containerProps() {
        const {
            name,
            id,
            prices,
            gallery,
            inStock,
            attributes,
        } = this.props.product;

        const { selectedCurrency } = this.context;
        const filtredPrice = prices.filter(
            (price) => price.currency.symbol === selectedCurrency,
        )[0]
        return {
            name,
            id,
            image: gallery[0],
            price: filtredPrice,
            inStock,
            selectedCurrency,
            attributes,
        }
    }
    render() {
        return (<ProductCard {...this.containerProps()} />)
    }
}

export default ProductCardContainer;