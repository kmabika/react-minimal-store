import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { HeadlineWrapper } from './styled';
import parse from 'html-react-parser';

export class Headline extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.number,
    typeHeadline: PropTypes.string.isRequired,
    lineHeight: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
  };

  render() {
    return (
      <HeadlineWrapper
        color={this.props.color}
        fontSize={this.props.fontSize}
        fontWeight={this.props.fontWeight}
        lineHeight={this.props.lineHeight}
        marginTop={this.props.marginTop}
        marginBottom={this.props.marginBottom}
        typeHeadline={this.props.typeHeadline}>
        {parse(this.props.children)}
      </HeadlineWrapper>
    );
  }
}

export default Headline;
