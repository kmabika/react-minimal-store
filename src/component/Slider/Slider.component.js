import { PureComponent } from "react";
import {SlideImage, StyledSlider } from './styled'
import SliderArrows from "Component/SliderArrows";

export class Slider extends PureComponent {
  render(){
    return(
      <StyledSlider>
        <SliderArrows direction={"left"}/>
        <SliderArrows direction={"right"} />
        <SlideImage src="/images/shoe.webp" alt="image"/>
      </StyledSlider>
    )
  }
}

export default Slider;
