import { PureComponent } from "react";
import { CategoryHeaderWrapper, ProductListWrapper } from "./styled";
import Headline from "Component/Headline";
import CategoryProductList from "Component/CategoryProductList";


export class ProductListPage extends PureComponent {
    render() {
        return(
        <main>
            <ProductListWrapper>
                <CategoryHeaderWrapper>
                <Headline typeHeadline="h1" fontWeight={400}>{this.props.categoryName}</Headline>
                </CategoryHeaderWrapper>
                <CategoryProductList products={this.props.products}/>
            </ProductListWrapper>
        </main>
        )
    }
};

export default ProductListPage;