import { PureComponent } from 'react';
import Slider from './Slider.component';

export class SliderContainer extends PureComponent {
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
