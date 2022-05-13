import styled from 'styled-components';

export const SliderImageComponent = styled.div`
height: 203px;
width: 141px;
`

export const SlideImage = styled.img`
height: 203px;
width: 141px;
  object-fit: cover;
`;

export const SliderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const SliderContent = styled.div`
transform: translateX(-${(props) => props.translate}%);
transition: all ease-in-out 0.5s;
height: 100%;
width: calc(100% * ${(props) => props.cantSlides});
display: flex;
flex-direction: row;
  // translate: translateX(-141px);
  // transition: all ease-in-out 0.5s;
  // height: 100%;
  // width: 10752px;
  // display: flex;
  // flex-direction: row;
`

export const StyledSlider = styled.div`
position: relative;
height: 100vh;
width: 141px;
margin: 0 auto;
overflow: hidden;
white-space: nowrap;
`;

export const Slide = styled.div`
  height: 203px;
  width: 141px;
  obect-fit: contain;
  background-image: url('${(props) => props.image}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position:center;
`