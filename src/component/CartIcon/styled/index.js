import styled from 'styled-components';

export const CartNumber = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--clr-bunker);
  color: var(--clr-white);
  position: absolute;
  border-radius: 100%;
  border: none;
  margin: -2rem 0rem 0rem 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  p {
    font-family: Roboto;
    font-size: 0.675rem;
    line-height: 0rem;
    font-weight: 700;
    letter-spacing: 0rem;
  }
`;
