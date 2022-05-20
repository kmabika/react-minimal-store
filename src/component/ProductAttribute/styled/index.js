import styled, { css } from 'styled-components';

export const ProductTextAttributeBtn = styled.button`
  width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid var(--clr-bunker);
  color: var(--clr-bunker);
  background-color: var(--clr-white);
  font-size: 16px;
  line-height: 18px;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  ${({ inStock }) =>
    !inStock &&
    css`
      height: 45px;
      width: 63px;
      border: 1px solid var(--clr-darkgray);
      background-color: var(--clr-white);
      color: var(--clr-darkgray);
    `};
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 45px;
      border: 1px solid var(--clr-bunker);
      background-color: var(--clr-bunker);
      color: var(--clr-white);
    `};
`;

export const ProductColorAttribute = styled.span`
  height: 30px;
  width: 30px;
  display: inline-block;
  opacity: ${(props) => (!props.inStock ? '50%' : '100%')};
  border: 1px solid var(--clr-bunker);
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : 'var(--clr-white)')};
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 32px;
      width: 32px;
      border: 2px solid var(--clr-white);
      outline: 1px solid var(--clr-emerald);
    `};
  svg {
    font-size: 30px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export const ProductAttributeWrapper = styled.span`
  padding-top: 10px;
  > * {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
