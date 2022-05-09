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
import Slider from 'Component/Slider';

export class CartPage extends PureComponent {
    render() {
        return (
            <CartPageWrapper>
                <CartPageHeader>
                    <Headline type="h1" fontWeight={700} fontSize={1.5}>Cart</Headline>
                </CartPageHeader>
                <CartProductItemWrapper>
                    <ProductInfoWrapper>
                        <Headline fontSize={2} fontWeight={600}>Product Name</Headline>
                        <Headline fontSize={1.5} fontWeight={400}>Product Brand</Headline>
                        <Headline fontWeight={700} fontSize={1}>$50.00</Headline>
                        <ProductAttributeButton>
                            M
                        </ProductAttributeButton>
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
            </CartPageWrapper>
        )
    }
};

export default CartPage;