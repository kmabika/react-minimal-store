import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { CategoryHeaderWrapper, ProductListWrapper } from './styled';
import { CategoryProductListWrapper } from 'Component/CategoryProductList/styled';
import Headline from 'Component/Headline';
import CategoryProductList from 'Component/CategoryProductList';

import { Helmet } from 'react-helmet';
import { ProductsListType } from 'Type/ProductList.type';
export class ProductListPage extends PureComponent {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    products: ProductsListType.isRequired,
    
  };

  componentDidMount() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryName !== prevProps.categoryName) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  renderHelmet() {
    const { categoryName } = this.props;
    return (
      <Helmet>
        <html lang="en" />
        <title>
          {categoryName} - Buy {categoryName} Products Online | Scandiweb x Kudzai
        </title>
        <meta
          name="description"
          content={`Discover the latest trends when you shop ${categoryName} online. Shop Scandiweb x Kudzai for the freshest ${categoryName} from the best brands.`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://designcode.io/cloud/v2/twitter.jpg" />
        <meta
          name="twitter:title"
          content={`${categoryName} - Buy ${categoryName} Products Online | Scandiweb x Kudzai`}
        />
        <meta name="twitter:creator" content="@kudzai_mb" />
        <meta name="twitter:site" content="@kudzai_mb" />
        <meta
          name="twitter:description"
          content={`Discover the latest trends when you shop ${categoryName} online. Shop Scandiweb x Kudzai for the freshest ${categoryName} from the best brands.`}
        />
      </Helmet>
    );
  }

  renderSkeletonLoader() {
    const rowSekeletonProducts = 6;
    return (
      <>
        <ProductListWrapper>
          <div style={{ marginBottom: '200px', marginTop: '60px', width: '50%' }}>
            <div className="block2 pulsate"></div>
          </div>
          <CategoryProductListWrapper>
            {[...Array(rowSekeletonProducts)]?.map((row, i) => (
              <div key={i} id="card">
                <div className="pulsate card-image">
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
                <div className="card-content">
                  <div className="block2 pulsate"></div>
                  <div className="block3 pulsate"></div>
                  <div></div>
                </div>
              </div>
            ))}
          </CategoryProductListWrapper>
        </ProductListWrapper>
      </>
    );
  }

  renderProductListPage() {
    const { products, categoryName } = this.props;
    return (
      <>
        <CategoryHeaderWrapper>
          <Headline typeHeadline="h1" fontSize={2.625} fontWeight={400}>
            {categoryName}
          </Headline>
        </CategoryHeaderWrapper>
        <CategoryProductList products={products} />
      </>
    );
  }

  render() {
    const { isLoading, categoryName } = this.props;
    return (
      <main>
        <ProductListWrapper aria-label="products">
          {this.renderHelmet()}
          {!isLoading && categoryName !== undefined
            ? this.renderProductListPage()
            : this.renderSkeletonLoader()}
        </ProductListWrapper>
      </main>
    );
  }
}

export default ProductListPage;
