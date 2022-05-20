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
  font-size: 14px;
  line-height: 22.4px;
  align-items: center;
  &:not(last-child) {
    margin-right: 5px;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      width: auto;
      height: 24px;
      border: 1px solid var(--clr-bunker);
      background-color: var(--clr-bunker);
      color: var(--clr-white);
    `};
`;

export const CartItemColorAttribute = styled.span`
  margin-right: 5px;
  height: 14px;
  width: 14px;
  display: inline-block;
  border: 1px solid var(--clr-bunker);
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : 'var(--clr-white)')};
  svg {
    font-size: 12px
    margin-left: 3px;
    margin-bottom: 3px;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 16px;
      width: 16px;
      border: 2px solid var(--clr-white);
      outline: 1px solid var(--clr-emerald);
    `};
`;
