import styled from 'styled-components';

export const SliderImageComponent = styled.div`
  height: 100%;
  width: ${(props) => `${props.widthImage}%`};
`;

export const  SliderImageWrapper = styled.img`
  width: 141px;
  height: 181px;
  object-fit: contain;
`