import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import ProductListPage from './ProductListPage.component'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { QueryDispatcher } from 'Util/QueryDispatcher/QueryDispatcher';
import { ProductsListType } from 'Type/ProductList.type';

export const mapDispatchToProps = (dispatch) => ({
    handleFetchProductsData: (category) => QueryDispatcher.handleFetchProductsData(dispatch, category)
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
        this.state = { isLoading: true };
        this.handleFetchProducts = this.handleFetchProducts.bind(this);
    };

    _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.handleFetchProducts();
        }
    }

    async handleFetchProducts() {
        const categoryName = this.props.match.params.category
        const { handleFetchProductsData } = this.props;
        await handleFetchProductsData(categoryName || 'all');
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        this.handleFetchProducts()
    }

    containerProps() {
        const { products } = this.props;
        const { isLoading } = this.state;
        const categoryName = this.props.match.params.category
        const category = this._capitalize(categoryName);
        return {
            categoryName: category,
            isLoading: isLoading,
            products: products,
        }
    }

    render() {

        return (
            <ProductListPage
                {...this.containerProps()} />
        )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListPageContainer));
