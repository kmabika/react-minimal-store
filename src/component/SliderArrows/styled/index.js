import styled from 'styled-components';

export const ArrowComponent = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.73);
  opacity: ${(props) => props.opacity};
  height: 24px;
  width: 24px;
  ${(props) => (props.direction === 'left' ? 'left: 128px' : 'left: 160px')};
  top: 248px;
  color: black;
  cursor: pointer;
  svg {
    display: block;
    margin-top: 6px;
    margin-left: 8px;
    &:focus {
      outline: 0;
    }
  }
  &:hover {
    transition: 250ms linear;
    transform: scale(1.1);
  }
`;
