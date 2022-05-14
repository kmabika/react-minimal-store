import styled from 'styled-components';

export const SliderImageComponent = styled.div`
  height: 100%;
  width: ${(props) => `${props.width}%`};
`;

export const SliderImgWrapper = styled.img`
  width: 141px;
  height: 181px;
  object-fit: contain;
`;
