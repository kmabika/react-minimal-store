import { PureComponent } from "react";
import { CategoryWrap, StyledLink} from "./styled";

class Category extends PureComponent {

    renderNavbar() {
        return (this.props.categories.map((title,index) => (
          <li key={index}>
                <StyledLink to={title.name} exact>
                    {title.name}
                </StyledLink>
          </li>)
      ))
    }

    render() {
        return (
            <CategoryWrap>
            {this.renderNavbar()}
            </CategoryWrap>
        )
    }
}

export default Category