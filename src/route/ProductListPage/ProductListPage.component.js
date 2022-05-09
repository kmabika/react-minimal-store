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

    renderHelmet() {
        const { categoryName } = this.props;
        return (
            <Helmet>
                <html lang="en" />
                <title>{categoryName} - Buy {categoryName} Products Online | Scandiweb</title>
                <meta name="description" content="Basic example" />
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
                        {[...Array(rowSekeletonProducts)].map((row,i) => (
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
                <ProductListWrapper>
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