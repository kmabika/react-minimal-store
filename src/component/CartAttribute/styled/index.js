import styled, { css } from 'styled-components';

export const CartItemAttributeBtn = styled.button`
  width: auto;
  height: 24px;
  border: 1px solid var(--clr-bunker);
  background-color: var(--clr-white);
  color: var(--clr-bunker);
  opacity: 1;
  cursor: pointer;
  display: inline-block;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4rem;
  align-items: center;
  &:not(last-child) {
    margin-right: 5px;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid var(--clr-darkgray);
      background-color: var(--clr-lightgray);
      color: var(--clr-darkgray);
    `};
`;

export const CartItemColorAttribute = styled.span`
  margin-right: 5px;
  height: 20px;
  width: 20px;
  display: inline-block;
  border: 1px solid var(--clr-bunker);
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : 'var(--clr-white)')};
  svg {
    font-size: 0.8rem;
    margin-left: 3px;
    margin-bottom: 3px;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 3px solid var(--clr-white);
      box-shadow: 0 0 2px var(--clr-bunker);
    `};
`;
