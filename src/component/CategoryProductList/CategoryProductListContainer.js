import { PureComponent } from 'react'
import { ProductsListType } from 'Type/ProductList.type';
import CategoryProductList from './CategoryProductList.component'


export class CategoryProductListContainer extends PureComponent {

    static propTypes = {
        products: ProductsListType.isRequired,
    };

    containerProps() {
        const { products } = this.props;
        return {
            products: products,
        }
    };

    render() {
        return (
            <CategoryProductList
                {...this.containerProps()}
            />
        )
    }
}

export default CategoryProductListContainer;