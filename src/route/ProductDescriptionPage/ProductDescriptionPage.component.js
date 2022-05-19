import PropTypes from 'prop-types';
import { PureComponent } from 'react';
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
    if (!this.props.isLoading && this.props.selectedProduct.gallery[0] !== undefined) {
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
              <ProductImg key={i} src={image} loading="lazy" onClick={this.handleCover} />
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
      <>
        <ProductDescriptionWrapper>
          <div style={{ marginRight: '40px' }}>
            <div className="image-slider pulsate"></div>
          </div>
          <ProductImgCoverWrapper>
            <div className="image-cover pulsate">
              <svg
                className="fpo"
                width="84px"
                height="63px"
                x="50%"
                y="50%"
                viewBox="0 0 84 63"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(-964.000000, -1012.000000)"
                  fillOpacity="0.06">
                  <g
                    id="16---Workpaper-Loading-Copy"
                    transform="translate(836.000000, 909.000000)"
                    fill="#000000">
                    <g
                      id="Icons-/-Special-/-RTE-/-Image"
                      transform="translate(100.000000, 67.000000)">
                      <g id="Icons-/-RTE-/-ImageSpecial">
                        <path
                          d="M108.368088,36.5625 L30.8485565,36.5625 C29.319526,36.5625 28.0800018,37.8216991 28.0800018,39.375 L28.0800018,95.625 C28.0800018,97.1783009 29.319526,98.4375 30.8485565,98.4375 L108.368088,98.4375 C109.897118,98.4375 111.136642,97.1783009 111.136642,95.625 L111.136642,39.375 C111.136642,37.8216991 109.897118,36.5625 108.368088,36.5625 L108.368088,36.5625 Z M105.599533,42.1875 L105.599533,81.225 L96.7678436,68.68125 C96.2965986,68.0076728 95.5575991,67.5787153 94.747102,67.5082962 C93.936605,67.4378771 93.1366348,67.7331229 92.5596405,68.315625 L82.0668182,79.003125 L59.1154999,55.6875 C58.0356599,54.5970274 56.2916778,54.5970274 55.2118378,55.6875 L33.6171112,77.596875 L33.6171112,42.1875 L105.599533,42.1875 L105.599533,42.1875 Z M33.6171112,92.8125 L33.6171112,85.528125 L57.149826,61.621875 L80.1011444,84.9375 C81.1809844,86.0279726 82.9249665,86.0279726 84.0048065,84.9375 L94.1654022,74.64375 L105.599533,90.9 L105.599533,92.8125 L33.6171112,92.8125 L33.6171112,92.8125 Z M77.9139862,56.25 C77.9139862,53.1433983 80.3930345,50.625 83.4510956,50.625 C86.5091566,50.625 88.988205,53.1433983 88.988205,56.25 C88.988205,59.3566017 86.5091566,61.875 83.4510956,61.875 C80.3930345,61.875 77.9139862,59.3566017 77.9139862,56.25 L77.9139862,56.25 Z"
                          id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </ProductImgCoverWrapper>
          <ProductInfoWrapper>
            <h1>
              <div className="block2 pulsate" style={{ marginBottom: '10px' }}></div>
            </h1>
            <h1>
              <div className="block3 pulsate" style={{ marginBottom: '43px' }}></div>
            </h1>
            <ProductAttributeWrapper>
              <ProductPriceHeaderWrapper>
                <h1 style={{ marginBottom: '10px' }}>
                  <div className="block2 pulsate"></div>
                </h1>
              </ProductPriceHeaderWrapper>
              <ProductAttributeBtnWrapper>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="block5 pulsate"></div>
                  <div className="block5 pulsate"></div>
                  <div className="block5 pulsate"></div>
                  <div className="block5 pulsate"></div>
                </div>
              </ProductAttributeBtnWrapper>
            </ProductAttributeWrapper>
            <ProductPriceWrapper>
              <ProductPriceHeaderWrapper>
                <h1 style={{ marginBottom: '10px' }}>
                  <div className="block3 pulsate"></div>
                </h1>
              </ProductPriceHeaderWrapper>
              <h1>
                <div className="block2 pulsate" style={{ marginBottom: '30px' }}></div>
              </h1>
            </ProductPriceWrapper>
            <AddToCartBtnWrapper>
              <div className="block4 pulsate" style={{ marginBottom: '20px' }}></div>
            </AddToCartBtnWrapper>
            <ProductInfoDescriptionWrapper>
              <div className="block pulsate" style={{ marginBottom: '10px' }}></div>
              <div className="block pulsate" style={{ marginBottom: '10px' }}></div>
              <div className="block pulsate" style={{ marginBottom: '10px' }}></div>
              <div className="block pulsate"></div>
            </ProductInfoDescriptionWrapper>
          </ProductInfoWrapper>
        </ProductDescriptionWrapper>
      </>
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
    return <>{!isLoading ? this.renderProduct() : this.renderProductSkeleton()}</>;
  }
}

export default ProductDescriptionPage;
