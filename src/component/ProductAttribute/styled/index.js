import styled, { css } from 'styled-components';

export const ProductTextAttributeBtn = styled.button`
  min-width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid var(--clr-bunker);
  color: var(--clr-bunker);
  background-color: var(--clr-white);
  font-size: 1rem;
  line-height: 1.125rem;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  ${({ inStock }) =>
    !inStock &&
    css`
      border: 1px solid var(--clr-darkgray);
      background-color: var(--clr-white);
      color: var(--clr-darkgray);
    `};
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid var(--clr-bunker);
      background-color: var(--clr-bunker);
      color: var(--clr-white);
    `};
`;

export const ProductColorAttribute = styled.span`
  height: 45px;
  width: 45px;
  display: inline-block;
  opacity: ${(props) => (!props.inStock ? '50%' : '100%')};
  border: 1px solid var(--clr-bunker);
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : 'var(--clr-white)')};
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 3px solid var(--clr-white);
      box-shadow: 0 0 5px var(--clr-bunker);
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

export const ToolTipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: var(--clr-bunker);
  color: var(--clr-white);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1000;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${ToolTipText} {
    visibility: visible;
    z-index: 200;
  }
`;
