import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import ProductListPage from './ProductListPage.component';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { QueryDispatcher } from 'Util/QueryDispatcher/QueryDispatcher';
import { CategoryDispatcher } from "Store/Category/Category.dispatcher";
import { ProductsListType } from 'Type/ProductList.type';
import NotFoundPage from 'Route/NotFoundPage/NotFoundPage.component';

export const mapDispatchToProps = (dispatch) => ({
    handleFetchProductsData: (category) => QueryDispatcher.handleFetchProductsData(dispatch, category),
    updateSelectedCategory: (category) => CategoryDispatcher.updateSelectedCategory(dispatch,category),
});

export const mapStateToProps = (state) => ({
    products: state.ProductReducer.products,
});

export class ProductListPageContainer extends PureComponent {
    static propTypes = {
        handleFetchProductsData: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                category: PropTypes.string.isRequired
            })
        }),
        products: ProductsListType.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { isLoading: true, hasError: false };
        this.handleFetchProducts = this.handleFetchProducts.bind(this);
    };

    _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.handleFetchProducts();  
        };
    };

    async handleFetchProducts() {
        const categoryName = this.props.match.params.category
        const { handleFetchProductsData, updateSelectedCategory } = this.props;
        const validProducts = await handleFetchProductsData(categoryName).finally(() => {updateSelectedCategory(categoryName)});
        if (validProducts) {
            this.setState({ hasError: false, isLoading: false });
        } else { this.setState({ hasError: true, isLoading: false }); }
    }

    componentDidMount() {
        this.handleFetchProducts()
    };

    containerProps() {
        const { products } = this.props;
        const { isLoading, hasError } = this.state;
        const categoryName = this.props.match.params.category
        const category = this._capitalize(categoryName);
        return {
            categoryName: category,
            hasError,
            isLoading: isLoading,
            products: products,
        }
    }
    render() {
        if(this.state.hasError){
            return (<NotFoundPage/>)
          }
        return (
            <>
                {this.props.products !== undefined && (
                    <ProductListPage {...this.containerProps()} />
                )}
            </>
        )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListPageContainer));
