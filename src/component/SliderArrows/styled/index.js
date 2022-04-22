import styled from 'styled-components';


export const ArrowComponent = styled.div`
  position: absolute;
  ${(props) => (props.direction === 'left' ? `left: 115px` : `right: 115px`)};
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;
