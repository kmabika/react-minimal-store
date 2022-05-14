import styled from 'styled-components';

export const SliderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  width: 100%;
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}%);
  transition: all ease-in-out 0.5s;
  height: 100%;
  width: calc(100% * ${(props) => props.cantSlides});
  display: flex;
  flex-direction: row;
`;

export const StyledSlider = styled.div`
  position: relative;
  height: 100vh;
  width: 141px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`;
