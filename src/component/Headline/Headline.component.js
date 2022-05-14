import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { HeadlineWrapper } from './styled';

export class Headline extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.number,
    typeHeadline: PropTypes.string.isRequired,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
  };

  render() {
    return (
      <HeadlineWrapper
        color={this.props.color}
        dangerouslySetInnerHTML={{ __html: `${this.props.children}` }}
        fontSize={this.props.fontSize}
        fontWeight={this.props.fontWeight}
        marginTop={this.props.marginTop}
        marginBottom={this.props.marginBottom}
        typeHeadline={this.props.typeHeadline}
      />
    );
  }
}

export default Headline;
