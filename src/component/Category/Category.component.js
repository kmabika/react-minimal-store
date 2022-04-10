import { PureComponent } from "react";
import { CategoryWrap, CategoryItemWrap } from "./styled";

class Category extends PureComponent {
    render() {
        return (
            <CategoryWrap>
                <CategoryItemWrap>
                    <a href="/">
                        All
                    </a>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <a href="/">
                        Women
                    </a>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <a href="/">
                        Men
                    </a>
                </CategoryItemWrap>
            </CategoryWrap>
        )
    }
}

export default Category