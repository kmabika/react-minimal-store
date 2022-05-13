import { PureComponent } from "react";
import { ArrowComponent } from "./styled";

import ArrowLeft from "Images/ArrowLeft";
import ArrowRight from 'Images/ArrowRight'

export class SliderArrow extends PureComponent{
    render(){
        const {handleClick} = this.props;
        return(
            <ArrowComponent 
            direction={this.props.direction} 
            onClick={() => handleClick()}
            >
                {this.props.direction === 'left' ? <ArrowLeft /> : <ArrowRight/>}
            </ArrowComponent>
        )
    }
};

export default SliderArrow;