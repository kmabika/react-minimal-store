import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from 'react-helmet';
import {
  ProductDescriptionWrapper,
  ProductImgCarouselWrapper,
  ProductImgsWrapper,
  ProductImg,
  ProductImgCoverWrapper,
  ProductCoverImg,
  ProductInfoWrapper,
  ProductAttributeWrapper,
  ProductAttributeBtnWrapper,
  AddToCartBtn,
  ProductPriceWrapper,
  AddToCartBtnWrapper,
  ProductPriceHeaderWrapper,
  ProductInfoDescriptionWrapper,
  ShowMoreBtn,
} from './styled';

import Paragraph from 'Component/Paragraph';
import Headline from 'Component/Headline';
import ProductAttributes from 'Component/ProductAttributes';
import { CurrencyItemType } from 'Type/Currency.type';
export class ProductDescriptionPage extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedProduct: PropTypes.object.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { showMore: false, cover: '' };
  }

  componentDidMount() {
    if (
      !this.props.isLoading &&
      this.props.selectedProduct.gallery[0] !== undefined
    ) {
      this.setState({ cover: this.props.selectedProduct.gallery[0] });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  handleCover = (event) => {
    this.setState({ cover: event.target.src });
  };

  renderHemlet() {
    const { selectedProduct } = this.props;
    return (
      <Helmet>
        <html lang="en" />
        <title>
          {selectedProduct.name} - {selectedProduct.brand} | ScandiWeb Store
        </title>
        <meta
          name="description"
          content={`${selectedProduct.name} - ${selectedProduct.description}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={selectedProduct.gallery[0]} />
        <meta
          name="twitter:title"
          content={`${selectedProduct.name} - ${selectedProduct.brand} | ScandiWeb Store`}
        />
        <meta name="twitter:creator" content="@kudzi_mb" />
        <meta name="twitter:site" content="@kudzi_mb" />
        <meta
          name="twitter:description"
          content={`${selectedProduct.name} - ${selectedProduct.description}`}
        />
      </Helmet>
    );
  }

  renderAddToCart() {
    const { inStock } = this.props.selectedProduct;
    const { handleAddToCart } = this.props;
    return (
      <AddToCartBtnWrapper>
        {inStock ? (
          <AddToCartBtn
            inStock={inStock}
            onClick={() => {
              handleAddToCart();
            }}
            aria-label="add to cart">
            add to cart
          </AddToCartBtn>
        ) : (
          <AddToCartBtn inStock={inStock} aria-label="out of stock">
            out of stock
          </AddToCartBtn>
        )}
      </AddToCartBtnWrapper>
    );
  }

  renderProductImgCarousel() {
    const { gallery } = this.props.selectedProduct;
    return (
      <ProductImgCarouselWrapper>
        <ProductImgsWrapper>
          {gallery &&
            gallery?.map((image, i) => (
              <ProductImg
                key={i}
                src={image}
                loading="lazy"
                onClick={this.handleCover}
              />
            ))}
        </ProductImgsWrapper>
      </ProductImgCarouselWrapper>
    );
  }

  renderProductImgCover() {
    const { cover } = this.state;
    const { selectedProduct } = this.props;
    return (
      <ProductImgCoverWrapper>
        <ProductCoverImg
          src={cover || selectedProduct.gallery[0]}
          loading="lazy"
          alt={`${selectedProduct.name} 
                ${selectedProduct.brand}`}
        />
      </ProductImgCoverWrapper>
    );
  }

  renderProductContent() {
    const { selectedProduct, selectedCurrency } = this.props;
    const filteredPrice = selectedProduct.prices.filter(
      (price) => price.currency.symbol === selectedCurrency.symbol
    )[0];
    return (
      <ProductInfoWrapper>
        <Headline typeHeadline="h1" fontSize={1.875} fontWeight={600}>
          {selectedProduct.brand}
        </Headline>
        <Headline typeHeadline="h1" fontSize={1.875} fontWeight={400}>
          {selectedProduct.name}
        </Headline>
        <ProductAttributeWrapper>
          <ProductAttributes
            selectedProduct={selectedProduct}
            attributes={selectedProduct.attributes}
            inStock={selectedProduct.inStock}
          />
        </ProductAttributeWrapper>
        <ProductPriceWrapper>
          <ProductPriceHeaderWrapper>
            <Paragraph
              fontSize={1.125}
              fontWeight={700}
              fontFamily="Roboto Condensed"
              marginBottom={1}
              children={'Price:'}
            />
          </ProductPriceHeaderWrapper>
          <Paragraph
            lineHeight={1.125}
            fontSize={1.5}
            children={`${filteredPrice.currency.symbol}${filteredPrice.amount}`}
            fontWeight={700}
          />
        </ProductPriceWrapper>
        {this.renderAddToCart()}
        <ProductInfoDescriptionWrapper>
          {this.state.showMore ? (
            <Paragraph
              fontWeight={400}
              fontFamily="Roboto"
              children={selectedProduct.description}
            />
          ) : (
            <Paragraph
              fontWeight={400}
              fontFamily="Roboto"
              children={selectedProduct.description.substring(0, 250)}
            />
          )}
          {selectedProduct.description.length >= 250 ? (
            <ShowMoreBtn
              onClick={() => {
                this.setState((state) => {
                  return { showMore: !state.showMore };
                });
              }}>
              {this.state.showMore ? 'Show less' : 'Show More'}
            </ShowMoreBtn>
          ) : (
            ''
          )}
        </ProductInfoDescriptionWrapper>
      </ProductInfoWrapper>
    );
  }

  renderProductSkeleton() {
    return (
      <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
        <ProductDescriptionWrapper>
          <div style={{ marginRight: '40px' }}>
            <Skeleton width={100} height={511} />
          </div>
          <ProductImgCoverWrapper>
            <Skeleton width={610} height={511} />
          </ProductImgCoverWrapper>
          <ProductInfoWrapper>
            <h1>
              <Skeleton width={292} height={30} />
            </h1>
            <h1>
              <Skeleton width={146} height={30} />
            </h1>
            <ProductAttributeWrapper>
              <ProductPriceHeaderWrapper>
                <h1>
                  <Skeleton width={50} height={25} />
                </h1>
              </ProductPriceHeaderWrapper>
              <ProductAttributeBtnWrapper>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Skeleton width={63} height={45} />
                  <Skeleton width={63} height={45} />
                  <Skeleton width={63} height={45} />
                  <Skeleton width={63} height={45} />
                </div>
              </ProductAttributeBtnWrapper>
            </ProductAttributeWrapper>
            <ProductPriceWrapper>
              <ProductPriceHeaderWrapper>
                <h1>
                  <Skeleton width={50} height={25} />
                </h1>
              </ProductPriceHeaderWrapper>
              <h1>
                <Skeleton width={86} height={46} />
              </h1>
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
    );
  }

  renderProduct() {
    return (
      <>
        {this.renderHemlet()}
        <ProductDescriptionWrapper>
          {this.renderProductImgCarousel()}
          {this.renderProductImgCover()}
          {this.renderProductContent()}
        </ProductDescriptionWrapper>
      </>
    );
  }

  render() {
    const { isLoading } = this.props;
    return (
      <>{!isLoading ? this.renderProduct() : this.renderProductSkeleton()}</>
    );
  }
}

export default ProductDescriptionPage;
