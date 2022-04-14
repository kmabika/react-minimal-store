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
            <ProductCardWrapper>
                <ProductLink>
                    <ProductThumb>
                        <ProductImage
                            src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                            alt="Product Image"
                        />
                    </ProductThumb>
                    <ProductContent>
                        <Headline typeHeadline="h5" fontWeight={300}>Product Name</Headline>
                        <Paragraph fontWeight={500}>$50.00</Paragraph>
                    </ProductContent>
                </ProductLink>
                <ProductCartButton
                    title="Add to art"
                    alt="add to cart"
                >
                    <CartSvg />
                </ProductCartButton>
            </ProductCardWrapper>
        )
    }
};

export default ProductCard