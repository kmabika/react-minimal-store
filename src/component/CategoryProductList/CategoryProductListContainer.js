import {PureComponent} from 'react'
import CategoryProductList from './CategoryProductList.component'



export class CategoryProductListContainer extends PureComponent{

    _containerProps(){
        return{
            products: this.props.products
        }
    }
    render(){
        return(
            <CategoryProductList 
            {...this._containerProps()}
            />
        )
    }
}

export default CategoryProductListContainer;