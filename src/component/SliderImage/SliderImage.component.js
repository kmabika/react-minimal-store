import { PureComponent } from "react";
import { SliderImageComponent, SliderImageWrapper } from "./styled";

export class SliderImage extends PureComponent{

    render(){
        return(
            <SliderImageComponent width={this.props.width}>
                <SliderImageWrapper  alt="slider" src={this.props.content}/>
            </SliderImageComponent>
        )
    }
};

export default SliderImage