import { PureComponent } from "react";
import { connect } from 'react-redux';
import { CartDispatcher } from "Store/Cart/Cart.dispatcher";
import CartPage from "./CartPage.component";

export const mapStateToProps = (state) => ({
    cartItems: state.CartReducer.cartItems,
    selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
});

export class CartPageContainer extends PureComponent {

    containerProps(){
        const {cartItems, selectedCurrency} = this.props;
        return {
            cartItems,
            selectedCurrency,
        }
    }
    render() {
        return (
            <CartPage {...this.containerProps()}/>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);