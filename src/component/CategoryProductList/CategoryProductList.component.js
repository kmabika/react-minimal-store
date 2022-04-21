import { PureComponent } from 'react';
import {CategoryProductListWrapper} from './styled'
import ProductCard from 'Component/ProductCard'


export class CategoryProductList extends PureComponent {
    render(){
        return(
            <CategoryProductListWrapper>
                <ProductCard/>
            </CategoryProductListWrapper>
        )
    }
}

export default CategoryProductList