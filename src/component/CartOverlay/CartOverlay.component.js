import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { CartOverlayWrapper, OverlayContainer, CartIconWrapper } from "./styled";
import CartIcon from "Component/CartIcon";
import CartPreview from "Component/CartPreview";
import { CartItemsType } from 'Type/Cart.type';
import { CurrencyItemType } from 'Type/Currency.type';
export class CartOverlay extends PureComponent {

    static propTypes = {
        toggleCart: PropTypes.func.isRequired,
        isOpened: PropTypes.bool.isRequired,
        products: CartItemsType.isRequired,
        selectedCurrency: CurrencyItemType.isRequired,
        totalCount: PropTypes.number.isRequired
    };

    render() {
        const { toggleCart, isOpened, products, totalCount, selectedCurrency } = this.props;
        return (
            <CartOverlayWrapper>
                <CartIconWrapper onClick={() => { toggleCart() }} >
                    <CartIcon totalProducts={totalCount} />
                </CartIconWrapper>
                {isOpened && (
                    <CartPreview 
                    isOpened={isOpened}
                    totalCount={totalCount} 
                    selectedCurrency={selectedCurrency} 
                    products={products}
                    toggleCart={toggleCart} />
                )}
                {isOpened && <OverlayContainer />}
            </CartOverlayWrapper>
        )
    }
}

export default CartOverlay;