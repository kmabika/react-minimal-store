import { PureComponent } from "react";
import {
    ProductContent,
    ProductImage,
    ProductLink,
    ProductThumb,
    ProductCardWrapper,
    ProductCartButton
} from "./styled";
import Headline from "Component/Headline";
import Paragraph from 'Component/Paragraph'
import CartSvg from "Images/CartSvg"

export class ProductCard extends PureComponent {
    render() {
        return (
            <ProductCardWrapper inStock={this.props.inStock}>
                <ProductLink>
                    <ProductThumb>
                        <ProductImage
                            src={this.props.image}
                            alt="Product Image"
                            width={354}
                            height={330}
                        />
                    </ProductThumb>
                    <ProductContent>
                        <Headline typeHeadline="h5" fontWeight={300}>{this.props.name}</Headline>
                        <Paragraph fontWeight={500} children={`${this.props.price.currency.symbol} ${this.props.price.amount}`} />
                    </ProductContent>
                </ProductLink>
                {this.props.inStock &&
                 <ProductCartButton
                    title="Add to art"
                    alt="add to cart">
                    <CartSvg/>
                </ProductCartButton>}
            </ProductCardWrapper>
        )
    }
};

export default ProductCard