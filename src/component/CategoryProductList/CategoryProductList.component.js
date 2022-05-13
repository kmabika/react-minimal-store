import { PureComponent } from 'react';
import {CategoryProductListWrapper} from './styled';
import ProductCard from 'Component/ProductCard';
import { ProductsListType } from 'Type/ProductList.type';


export class CategoryProductList extends PureComponent {

    static propTypes = {
        products: ProductsListType.isRequired,
    };

    renderProducts(){
        const {products} = this.props;
        return(
            products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
        )
    }

    render(){
        return(
            <CategoryProductListWrapper>
                {this.renderProducts()}
            </CategoryProductListWrapper>
        )
    }
}

export default CategoryProductList