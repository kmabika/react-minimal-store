import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { connect } from 'react-redux';
import { CartDispatcher } from 'Store/Cart/Cart.dispatcher';
import CartItem from "./CartItem.component";
import { CartItemType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
    selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
    updateProductAmount:
        (product, amount) => CartDispatcher.updateProductAmount(dispatch, product, amount),
});

export class CartItemContainer extends PureComponent {

    static propTypes = {
        updateProductAmount: PropTypes.func.isRequired,
        product: CartItemType,
        selectedCurrency: CurrencyItemType,
    };

    containerProps() {
        const { selectedCurrency, updateProductAmount, product } = this.props;
        const { prices, images} = product;
        const filteredPrice = prices.filter(
            (price) => price.currency.symbol === this.props.selectedCurrency.symbol,
        )[0];
        return {
            product: product,
            image: images[0],
            selectedCurrency: selectedCurrency,
            updateProductAmount: updateProductAmount,
            price: filteredPrice,
        };
    };

    render() {
        return (
            <CartItem {...this.containerProps()} />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);