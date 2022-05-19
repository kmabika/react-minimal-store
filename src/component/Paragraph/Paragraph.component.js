import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { ParagraphWrapper } from './styled';
import parse from 'html-react-parser';

export class Paragraph extends PureComponent {
  static propTypes = {
    fontWeight: PropTypes.number,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    lineHeight: PropTypes.number,
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ParagraphWrapper
        fontWeight={this.props.fontWeight}
        lineHeight={this.props.lineHeight}
        fontSize={this.props.fontSize}
        fontFamily={this.props.fontFamily}
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}>
        {parse(this.props.children)}
      </ParagraphWrapper>
    );
  }
}

export default Paragraph;
