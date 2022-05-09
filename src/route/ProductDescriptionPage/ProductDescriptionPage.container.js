import { PureComponent } from "react";
import { withRouter } from "react-router";

import ProductDescriptionPage from "./ProductDescriptionPage.component";

export class ProductDescriptionPageContainer extends PureComponent{
    render(){
        console.log(this.props.match.params.productid);
        return(
            <ProductDescriptionPage/>
        )
    }
};

export default withRouter(ProductDescriptionPageContainer);