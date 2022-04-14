import { PureComponent } from "react";
import { ParagraphWrapper } from "./styled";

export class Paragraph extends PureComponent{
    render(){
        return(
        <ParagraphWrapper
        fontWeight={this.props.fontWeight}
        fontSize={this.props.fontSize}
        dangerouslySetInnerHTML={{__html: this.props.children}}
        />
        )
    }
}

export default Paragraph;