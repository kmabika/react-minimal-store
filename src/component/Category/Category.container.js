import { PureComponent } from "react";
import { GET_CATEGORIES } from "Query/queries";
import Category from "./Category.component";

export class CategoryContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            links: [],
        }
    }
    
    componentDidMount() {
        GET_CATEGORIES.then(res => this.setState({links: res.data.categories}));
    }

    render(){
        return(
            <Category categories={this.state.links}/>
        )
    }
}

export default CategoryContainer;