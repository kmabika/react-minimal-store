import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { SliderImageComponent, SliderImgWrapper } from './styled';

export class SliderImage extends PureComponent {

  static propTypes = {
    content: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }

  render() {
    const { content, width } = this.props;
    return (
      <SliderImageComponent width={width}>
        <SliderImgWrapper alt="slider" src={content} />
      </SliderImageComponent>
    );
  }
}

export default SliderImage;
