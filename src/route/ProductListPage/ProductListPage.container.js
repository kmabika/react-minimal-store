import { PureComponent } from 'react'
import ProductListPage from './ProductListPage.component'


export class ProductListPageContainer extends PureComponent{
    render(){
        return(
            <>
            <ProductListPage category={this.props.categoryName} />
            </>
        )
    };
};

export default ProductListPageContainer;
