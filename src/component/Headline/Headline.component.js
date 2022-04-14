import { PureComponent } from "react";
import { HeadlineWrapper } from "./styled";

export class Headline extends PureComponent {
    render(){
        return(
            <HeadlineWrapper
            color={this.props.color}
            dangerouslySetInnerHTML={{__html: `${this.props.children}`}}
            fontSize={this.props.fontSize}
            fontWeight={this.props.fontWeight}
            typeHeadline={this.props.typeHeadline}
            />
        )
    }
};

export default Headline;