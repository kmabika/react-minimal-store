import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Slider from './Slider.component';

export class SliderContainer extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
  };

  containerProps() {
    return {
      images: this.props.images,
    };
  }

  render() {
    return <Slider {...this.containerProps()} />;
  }
}

export default SliderContainer;
