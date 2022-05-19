import styled from 'styled-components';

export const ArrowComponent = styled.div`
  position: absolute;
  ${(props) => (props.direction === 'left' ? 'left: 115px' : 'right: 115px')};
  top: 60px;
  font-size: 2rem;
  color: black;
  cursor: pointer;
  &:hover {
    color: var(--clr-lightgray);
    mix-blend-mode: difference;
    transition: 250ms linear;
    transform: scale(1.4);
  }
  svg {
    color: var(--clr-white);
    &:focus {
      outline: 0;
    }
  }
`;
