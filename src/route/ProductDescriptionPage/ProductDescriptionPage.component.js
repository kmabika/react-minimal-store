import { PureComponent } from "react";
import {
    ProductDescriptionWrapper,
    ProductImageCarouselWrapper,
    ProductImagesWrapper,
    ProductImage,
    ProductImageCoverWrapper,
    ProductCoverImage,
    ProductInfoWrapper,
    ProductAttributeWrapper,
    ProductAttributeButtonWrapper,
    ProductAttributeButton,
    AddToCartBtn,
    ProductPriceWrapper,
    AddToCartBtnWrapper,
    ProductPriceHeaderWrapper,
    ProductInfoDescriptionWrapper
} from "./styled";
import Paragraph from "Component/Paragraph";
import Headline from "Component/Headline"
export class ProductDescriptionPage extends PureComponent {
    render() {
        return (
            <ProductDescriptionWrapper>
                <ProductImageCarouselWrapper>
                    <ProductImagesWrapper>
                        <ProductImage src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087' />
                        <ProductImage src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087' />
                        <ProductImage src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087' />
                        <ProductImage src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087' />
                    </ProductImagesWrapper>
                </ProductImageCarouselWrapper>
                <ProductImageCoverWrapper>
                    <ProductCoverImage src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087' />
                </ProductImageCoverWrapper>
                <ProductInfoWrapper>
                    <Headline type="h1" fontSize="2" fontWeight={600}>Product Name</Headline>
                    <Headline type="h1" fontSize="2" fontWeight={400}>Product Brand</Headline>
                    <ProductAttributeWrapper>
                        <ProductPriceHeaderWrapper>
                        <Paragraph children={"size:"} fontWeight={700}/>
                        </ProductPriceHeaderWrapper>
                       
                        <ProductAttributeButtonWrapper>
                            <ProductAttributeButton>
                                M
                            </ProductAttributeButton>
                        </ProductAttributeButtonWrapper>
                    </ProductAttributeWrapper>
                    <ProductPriceWrapper>
                        <ProductPriceHeaderWrapper>
                        <Paragraph children={"Price:"} />
                        </ProductPriceHeaderWrapper>
                        <Paragraph children={"$50.00"} fontWeight={700}/>
                    </ProductPriceWrapper>
                    <AddToCartBtnWrapper>
                        <AddToCartBtn>
                            Add To Cart
                        </AddToCartBtn>
                    </AddToCartBtnWrapper>
                    <ProductInfoDescriptionWrapper>
                    <Paragraph fontWeight={400} children={`Find stunning women's cocktail dresses 
                    and party dresses. Stand out in lace and metallic 
                    cocktail dresses and party dresses from all your 
                    favorite brands.`} />
                    </ProductInfoDescriptionWrapper>
                </ProductInfoWrapper>
            </ProductDescriptionWrapper>
        )
    }
}

export default ProductDescriptionPage;