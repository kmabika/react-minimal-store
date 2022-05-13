import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { CategoryHeaderWrapper, ProductListWrapper } from "./styled";
import { CategoryProductListWrapper } from "Component/CategoryProductList/styled";
import Headline from "Component/Headline";
import CategoryProductList from "Component/CategoryProductList";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from "react-helmet";
import { ProductsListType } from 'Type/ProductList.type';

export class ProductListPage extends PureComponent {

    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired,
        products: ProductsListType.isRequired,
    };

    componentDidMount() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    componentDidUpdate(prevProps) {
        if (this.props.categoryName !== prevProps.categoryName) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };
    }

    renderHelmet() {
        const { categoryName } = this.props;
        return (
            <Helmet>
                <html lang="en" />
                <title>{categoryName} - Buy {categoryName} Products Online | Scandiweb x Kudzai</title>
                <meta name="description" content={`Discover the latest trends when you shop ${categoryName} online. Shop Scandiweb x Kudzai for the freshest ${categoryName} from the best brands.`} />
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
    };

    renderSkeletonLoader() {
        const rowSekeletonProducts = 9
        return (
            <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
                <ProductListWrapper>
                    <div style={{ marginBottom: '200px', marginTop: '60px', width: '50%' }}>
                        <h1><Skeleton width={100} height={30} /></h1>
                    </div>
                    <CategoryProductListWrapper>
                        {[...Array(rowSekeletonProducts)]?.map((row, i) => (
                            <section key={i} >
                                <article>
                                    <div>
                                        <Skeleton width={354} height={330} />
                                    </div>
                                    <div>
                                        <Skeleton width={354} height={29} />
                                        <Skeleton width={200} height={29} />
                                    </div>
                                </article>
                            </section>
                        ))}
                    </CategoryProductListWrapper>
                </ProductListWrapper>
            </SkeletonTheme>
        );
    };

    renderProductListPage() {
        const { products, categoryName } = this.props;
        return (
            <>
                <CategoryHeaderWrapper>
                    <Headline typeHeadline="h1" fontWeight={400}>{categoryName}</Headline>
                </CategoryHeaderWrapper>
                <CategoryProductList products={products} />
            </>
        );
    };

    render() {
        const { isLoading, categoryName } = this.props;
        return (
            <main>
                <ProductListWrapper aria-label="products">
                    {this.renderHelmet()}
                    {!isLoading && categoryName !== undefined ? (
                        this.renderProductListPage()
                    ) : this.renderSkeletonLoader()}
                </ProductListWrapper>
            </main>
        )
    }
};

export default ProductListPage;