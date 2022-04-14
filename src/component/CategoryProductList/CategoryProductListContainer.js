import {PureComponent} from 'react'
import CategoryProductList from './CategoryProductList.component'

export class CategoryProductListContainer extends PureComponent{
    render(){
        return(
            <>
            <CategoryProductList/>
            </>
        )
    }
}

export default CategoryProductListContainer;