import { PureComponent } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from "react-helmet";
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
    AddToCartBtn,
    ProductPriceWrapper,
    AddToCartBtnWrapper,
    ProductPriceHeaderWrapper,
    ProductInfoDescriptionWrapper,
    ShowMoreBtn,
} from "./styled";

import Paragraph from "Component/Paragraph";
import Headline from "Component/Headline";
import ProductAttributes from "Component/ProductAttributes";
export class ProductDescriptionPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { showMore: false, cover: '' };
    };

    componentDidMount() {
        if (!this.props.loadingState && this.props.selectedProduct.gallery[0] !== undefined) {
            this.setState({ cover: this.props.selectedProduct.gallery[0] })
        };
    };

    handleCover = event => {
        this.setState({ cover: event.target.src });
    };

    renderHemlet() {
        const { selectedProduct } = this.props;
        return (
            <Helmet>
                <html lang="en" />
                <title>{selectedProduct.name} - {selectedProduct.brand} | ScandiWeb Store</title>
                <meta name="description" content="Basic example" />
            </Helmet>
        );
    };

    renderAddToCart() {
        const { inStock } = this.props.selectedProduct;
        const { handleAddToCart } = this.props;
        return (
            <AddToCartBtnWrapper>
                {inStock ? (
                    <AddToCartBtn inStock={inStock} onClick={() => { handleAddToCart(); }}>
                        add to cart
                    </AddToCartBtn>
                ) : (<AddToCartBtn inStock={inStock}>out of stock</AddToCartBtn>)}
            </AddToCartBtnWrapper>
        );
    };

    renderProductImageCarousel() {
        const { gallery, inStock } = this.props.selectedProduct;
        return (
            <ProductImageCarouselWrapper >
                <ProductImagesWrapper>
                    {gallery.map((image, i) => (
                        <ProductImage key={i} src={image} inStock={inStock} onClick={this.handleCover} />
                    ))}
                </ProductImagesWrapper>
            </ProductImageCarouselWrapper>
        );
    };

    renderProductImageCover() {
        const { cover } = this.state;
        const { selectedProduct } = this.props;
        return (
            <ProductImageCoverWrapper>
                <ProductCoverImage
                    src={cover || selectedProduct.gallery[0]}
                    inStock={selectedProduct.inStock}
                    loading="lazy"
                    alt={`${selectedProduct.name} 
                ${selectedProduct.brand}`}
                />
            </ProductImageCoverWrapper>
        );
    };

    renderProductContent() {
        const { selectedProduct } = this.props;
        return (
            <ProductInfoWrapper>
                <Headline typeHeadline="h1" fontSize={2} fontWeight={600}>{selectedProduct.brand}</Headline>
                <Headline typeHeadline="h1" fontSize={2} fontWeight={400}>{selectedProduct.name}</Headline>
                <ProductAttributeWrapper>
                    <ProductAttributeButtonWrapper>
                        <ProductAttributes
                            selectedProduct={selectedProduct}
                            attributes={selectedProduct.attributes}
                            inStock={selectedProduct.inStock} />
                    </ProductAttributeButtonWrapper>
                </ProductAttributeWrapper>
                <ProductPriceWrapper>
                    <ProductPriceHeaderWrapper>
                        <Paragraph fontSize={1.125} fontWeight={700} children={"Price:"} />
                    </ProductPriceHeaderWrapper>
                    <Paragraph lineHeight={1.125} fontSize={1.125} children={`${this.props.filtredPrice.currency.symbol}${this.props.filtredPrice.amount}`} fontWeight={700} />
                </ProductPriceWrapper>
                {this.renderAddToCart()}
                <ProductInfoDescriptionWrapper>
                    {this.state.showMore ? (<Paragraph fontWeight={400} children={selectedProduct.description} />) : (<Paragraph fontWeight={400} children={selectedProduct.description.substring(0, 250)} />)}
                    {selectedProduct.description.length >= 250 ? <ShowMoreBtn onClick={() => { this.setState(state => { return { showMore: !state.showMore } }) }}>{this.state.showMore ? 'Show less' : 'Show More'}</ShowMoreBtn> : ''}
                </ProductInfoDescriptionWrapper>
            </ProductInfoWrapper>
        )
    }

    renderProductSkeleton() {
        return (
            <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
                <ProductDescriptionWrapper>
                    <div style={{ marginRight: '40px' }}>
                        <Skeleton width={100} height={511} />
                    </div>
                    <ProductImageCoverWrapper>
                        <Skeleton width={610} height={511} />
                    </ProductImageCoverWrapper>
                    <ProductInfoWrapper>
                        <h1><Skeleton width={292} height={30} /></h1>
                        <h1><Skeleton width={146} height={30} /></h1>
                        <ProductAttributeWrapper>
                            <ProductPriceHeaderWrapper>
                                <h1><Skeleton width={50} height={25} /></h1>
                            </ProductPriceHeaderWrapper>
                            <ProductAttributeButtonWrapper>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Skeleton width={63} height={45} />
                                    <Skeleton width={63} height={45} />
                                    <Skeleton width={63} height={45} />
                                    <Skeleton width={63} height={45} />
                                </div>
                            </ProductAttributeButtonWrapper>
                        </ProductAttributeWrapper>
                        <ProductPriceWrapper>
                            <ProductPriceHeaderWrapper>
                                <h1><Skeleton width={50} height={25} /></h1>
                            </ProductPriceHeaderWrapper>
                            <h1><Skeleton width={86} height={46} /></h1>
                        </ProductPriceWrapper>
                        <AddToCartBtnWrapper>
                            <div>
                                <Skeleton width={292} height={56} />
                            </div>
                        </AddToCartBtnWrapper>
                        <ProductInfoDescriptionWrapper>
                            <Skeleton width={292} height={10} count={4} />
                        </ProductInfoDescriptionWrapper>
                    </ProductInfoWrapper>
                </ProductDescriptionWrapper>
            </SkeletonTheme>
        )
    }

    renderProduct() {
        return (
            <>
                {this.renderHemlet()}
                <ProductDescriptionWrapper>
                    {this.renderProductImageCarousel()}
                    {this.renderProductImageCover()}
                    {this.renderProductContent()}
                </ProductDescriptionWrapper>
            </>
        )
    }


    render() {
        const { loadingState } = this.props;
        return (
            <>
                {!loadingState ? this.renderProduct() : this.renderProductSkeleton()}
            </>
        )
    }
}

export default ProductDescriptionPage;