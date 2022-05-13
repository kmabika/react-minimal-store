import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CartDispatcher } from 'Store/Cart/Cart.dispatcher';
import ProductCard from './ProductCard.component';
import { toast } from "react-toastify";
import { toastAction } from "Util/";
import { ProductType } from 'Type/ProductList.type';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
    selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
});

export class ProductCardContainer extends PureComponent {

    static propTypes = {
        addProductToCart: PropTypes.func.isRequired,
        selectedCurrency: CurrencyItemType.isRequired,
        product: ProductType.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    async handleAddToCart(product) {
        const { attributes } = product;
        const { addProductToCart } = this.props;
        let attributesSelected = '';

        if (attributes.length){
            attributes.map((attribute) => {
                attributesSelected = attribute.items.some((item) => item.isSelected === true);
                return attribute;
            });
        }else {
            attributesSelected = true;
        }

        if (!attributesSelected) {
            toast.error(`Select some attributes`, toastAction)
        } else { 
            addProductToCart(product);
            toast.success(`${product.name} added to cart`, toastAction) 
        } 
    }

    containerProps() {
        const {
            name,
            id,
            prices,
            gallery,
            category,
            inStock,
            attributes,
            brand,
        } = this.props.product;
        const image = gallery[0];
        const filtredPrice = prices.filter(
            (price) => price.currency.symbol === this.props.selectedCurrency.symbol,
        )[0];

        return {
            name,
            id,
            brand,
            category,
            image,
            gallery,
            price: filtredPrice,
            prices: prices,
            inStock,
            attributes,
            handleAddToCart: this.handleAddToCart,
        }
    }
    render() {
        return (<ProductCard {...this.containerProps()} />)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);