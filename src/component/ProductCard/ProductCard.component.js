import { PureComponent } from "react";
import {
    ProductContent,
    ProductImage,
    ProductLink,
    ProductThumb,
    ProductCardWrapper,
    ProductCartButton,
    ProductSwatchColor,
    ProductAttributesWrapper,
    ProductAttributeText
} from "./styled";
import Headline from "Component/Headline";
import ProductAttributes from 'Component/ProductAttributes'
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
                        <ProductAttributesWrapper>
                            <ProductAttributes attributes={this.props.attributes} inStock={this.props.inStock}/>
                        </ProductAttributesWrapper>                        
                    </ProductContent>
                </ProductLink>
                {this.props.inStock &&
                    <ProductCartButton
                        title="Add to art"
                        alt="add to cart">
                        <CartSvg />
                    </ProductCartButton>
                }
            </ProductCardWrapper>
        )
    }
};

export default ProductCard