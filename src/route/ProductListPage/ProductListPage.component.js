import { PureComponent } from "react";
import { ProductListWrapper } from "./styled";
import Headline from "Component/Headline";
import CategoryProductList from "Component/CategoryProductList";

export class ProductListPage extends PureComponent {
    render() {
        return(
        <main>
            <ProductListWrapper>
                <Headline typeHeadline="h1" fontWeight={400}>Category</Headline>
                <CategoryProductList/>
            </ProductListWrapper>
        </main>
        )
    }
};

export default ProductListPage