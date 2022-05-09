import styled from 'styled-components';

export const CartOverlayWrapper = styled.div`
    display: inline-flex;
    position: relative;

    padding-right: 15px;

    opacity: 1;
    transition: opacity 250ms linear;
`;

export const OverlayContainer = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 112px;
  left: 0;
  right: 0;
  min-height: 100vh;
  transition: 0.5s ease-in-out;
  z-index: 50;
`;

export const CartIconWrapper = styled.div`
  &:hover {
    svg {
      filter: invert(79%) sepia(7%) saturate(2984%) hue-rotate(80deg) brightness(92%) contrast(81%);
    }
  }
`