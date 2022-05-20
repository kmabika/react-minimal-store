import styled from 'styled-components';

export const CartNumber = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--clr-bunker);
  color: var(--clr-white);
  position: absolute;
  border-radius: 100%;
  border: none;
  margin: -36px 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  p {
    font-family: Roboto;
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
  }
`;
