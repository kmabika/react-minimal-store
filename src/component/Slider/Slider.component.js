import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { StyledSlider, SliderContent, SliderElement } from './styled';
import SliderArrows from 'Component/SliderArrows';
import SliderImage from 'Component/SliderImage/SliderImage.component';

export class Slider extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      translate: 0,
    };
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
  }

  handleNextSlide() {
    const { images } = this.props;
    const widthSlide = 100 / images?.length;
    this.setState((state) => {
      return {
        activeSlide:
          state.activeSlide < images.length - 1 ? state.activeSlide + 1 : images.length - 1,
        translate:
          state.translate < 100 - widthSlide ? state.translate + widthSlide : 100 - widthSlide,
      };
    });
  }

  handlePrevSlide() {
    const { images } = this.props;
    const widthSlide = 100 / images?.length;
    this.setState((state) => {
      return {
        activeSlide: state.translate > widthSlide ? state.activeSlide - 1 : 0,
        translate: state.translate > widthSlide ? state.translate - widthSlide : 0,
      };
    });
  }

  renderSlider() {
    const { images } = this.props;
    return (
      <SliderElement>
        <SliderContent cantSlides={images?.length} translate={this.state.translate}>
          {images && images.length > 0
            ? images?.map((image, i) => (
                <SliderImage key={image + i} content={image} width={100 / images.length} />
              ))
            : 'No images to show'}
        </SliderContent>
      </SliderElement>
    );
  }

  render() {
    const { images } = this.props;
    return (
      <StyledSlider>
        <SliderContent>{this.renderSlider()}</SliderContent>
        {images && images.length >= 2 && (
          <>
            <SliderArrows direction={'left'} handleClick={this.handleNextSlide} />
            <SliderArrows direction={'right'} handleClick={this.handlePrevSlide} />
          </>
        )}
      </StyledSlider>
    );
  }
}

export default Slider;
