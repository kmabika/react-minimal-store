import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CartOverlay from "./CartOverlay.component";
import { CartItemsType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
    cartItems: state.CartReducer.cartItems,
    selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export class CartOverlayContainer extends PureComponent {

    static propTypes = {
        cartItems: CartItemsType.isRequired,
        selectedCurrency: CurrencyItemType.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { open: false }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open
            };
        });
    };

    containerProps() {
        const totalCount = this.props.cartItems.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0);
        return {
            isOpened: this.state.open,
            totalCount: totalCount,
            products: this.props.cartItems,
            innerRef: this.wrapperRef,
            selectedCurrency: this.props.selectedCurrency,
            toggleCart: this.handleButtonClick,
        }
    }

    render() {
        return (
            <CartOverlay {...this.containerProps()} />
        )
    }
}

export default connect(mapStateToProps)(CartOverlayContainer);