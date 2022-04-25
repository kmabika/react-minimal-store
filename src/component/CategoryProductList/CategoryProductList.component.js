import { PureComponent } from 'react';
import {CategoryProductListWrapper} from './styled'
import ProductCard from 'Component/ProductCard'




export class CategoryProductList extends PureComponent {

    renderProducts(){
        return(
            this.props.products.map((product) => (
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