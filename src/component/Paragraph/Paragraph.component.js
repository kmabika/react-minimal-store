import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { ParagraphWrapper } from "./styled";

export class Paragraph extends PureComponent{

    static propTypes = {
        fontWeight: PropTypes.number,
        fontSize: PropTypes.number,
        fontFamily: PropTypes.string,
        marginBottom: PropTypes.number,
        children: PropTypes.string.isRequired
    }

    render(){
        return(
        <ParagraphWrapper
        fontWeight={this.props.fontWeight}
        fontSize={this.props.fontSize}
        fontFamily={this.props.fontFamily}
        marginBottom={this.props.marginBottom}
        dangerouslySetInnerHTML={{__html: this.props.children}}
        />
        )
    }
}

export default Paragraph;