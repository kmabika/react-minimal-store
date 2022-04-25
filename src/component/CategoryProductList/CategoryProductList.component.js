import { PureComponent } from 'react';
import {CategoryProductListWrapper} from './styled'
import ProductCard from 'Component/ProductCard'




export class CategoryProductList extends PureComponent {

    renderProducts(){
        return(
            this.props.products.map((product,index) => (
                <ProductCard key={index}/>
            ))
        )
    }

    render(){
        return(
            <CategoryProductListWrapper>
                {this.props.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryProductListWrapper>
        )
    }
}

export default CategoryProductList