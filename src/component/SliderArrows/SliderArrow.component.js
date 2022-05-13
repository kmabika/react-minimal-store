import { PureComponent } from "react";
import { ArrowComponent } from "./styled";

export class SliderArrow extends PureComponent {
    renderArrowRight() {
        return (
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke="#C9D1D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    };

    renderArrowLeft() {
        return (
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="#C9D1D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    };

    render() {
        const { handleClick, direction } = this.props;
        return (
            <ArrowComponent
                direction={direction}
                onClick={() => handleClick()}
            >
                {direction === 'left' ? this.renderArrowLeft() : this.renderArrowRight()}
            </ArrowComponent>
        )
    }
};

export default SliderArrow;