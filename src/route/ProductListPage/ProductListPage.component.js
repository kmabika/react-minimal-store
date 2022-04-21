import { PureComponent } from "react";
import { CategoryHeaderWrapper, ProductListWrapper } from "./styled";
import Headline from "Component/Headline";
import CategoryProductList from "Component/CategoryProductList";
import { HeaderWrap } from "Component/Header/styled";

export class ProductListPage extends PureComponent {
    render() {
        return(
        <main>
            <ProductListWrapper>
                <CategoryHeaderWrapper>
                <Headline typeHeadline="h1" fontWeight={400}>Category</Headline>
                </CategoryHeaderWrapper>
                <CategoryProductList category={this.props.category}/>
            </ProductListWrapper>
        </main>
        )
    }
};

export default ProductListPage;