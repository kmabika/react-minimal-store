import { PureComponent } from 'react';
import {
    CartPageWrapper,
    CartPageHeader,
    CartProductItemWrapper,
    ProductInfoWrapper,
    ProductAttributeButton,
    ProductCounterWrapper,
    ProductCounterBtnWrapper,
    ProductCounterBtn,
    ProductQuantityWrapper,
    ProductCartImgSlideWrapper,
} from './styled';
import Headline from 'Component/Headline';
import ProductAttributes from 'Component/ProductAttributes';
import Slider from 'Component/Slider';

export class CartPage extends PureComponent {

    renderCartItems() {
        return (
            this.props.cartItems.map(cartItem => (
                <CartProductItemWrapper>
                    <ProductInfoWrapper>
                        <Headline typeHeadline="h1" fontSize={2} fontWeight={600}>{cartItem.name}</Headline>
                        <Headline fontSize={1.5} fontWeight={400}>{cartItem.brand}</Headline>
                        <Headline fontWeight={700} fontSize={1}>$50.00</Headline>
                        <ProductAttributes attributes={cartItem.attributes} inStock={cartItem.inStock} />
                    </ProductInfoWrapper>
                    <ProductCounterWrapper>
                        <ProductCounterBtnWrapper>
                            <ProductCounterBtn>
                                +
                            </ProductCounterBtn>
                            <ProductQuantityWrapper>1</ProductQuantityWrapper>
                            <ProductCounterBtn>
                                -
                            </ProductCounterBtn>
                        </ProductCounterBtnWrapper>
                        <ProductCartImgSlideWrapper>
                            <Slider />
                        </ProductCartImgSlideWrapper>
                    </ProductCounterWrapper>
                </CartProductItemWrapper>
            ))
        )
    }

    render() {
        return (
            <CartPageWrapper>
                <CartPageHeader>
                    <Headline type="h1" fontWeight={700} fontSize={1.5}>Cart</Headline>
                </CartPageHeader>
                {this.renderCartItems()}
            </CartPageWrapper>
        )
    }
};

export default CartPage;