import { PureComponent } from 'react'
import ProductListPage from './ProductListPage.component'
import { GET_PRODUCTS_QUERY } from 'Query/queries';
import { withRouter } from "react-router";

export class ProductListPageContainer extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            categoryName: "",
            products: [],
        }
    };

    _capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    _handleProductsQuery(){
        const categoryName = this.props.match.params.category
        GET_PRODUCTS_QUERY(categoryName).then(res => this.setState({products: res.data.category.products}))
        this.setState({categoryName: this._capitalize(categoryName)})
    }

    containerProps(){

        return {
            categoryName: this.state.categoryName,
            products: this.state.products
        }
    }

    render(){
        this._handleProductsQuery();
        return(
            <ProductListPage 
            {...this.containerProps()}/>
        )
    };
};

export default withRouter(ProductListPageContainer);
