import styled, { css } from 'styled-components';

export const ProductTextAttributeBtn = styled.button`
  min-width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.bunker};
  color: ${({ theme }) => theme.colors.nero};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.sourceSans};
  font-weight: 400;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  ${({ inStock, theme }) => {
    return (
      !inStock &&
      css`
        border: 1px solid #a6a6a6;
        background-color: ${theme.colors.white};
        color: #a6a6a6;
      `
    );
  }};
  ${({ isSelected, theme }) => {
    return (
      isSelected &&
      css`
        border: 1px solid ${theme.colors.bunker};
        background-color: ${theme.colors.bunker};
        color: ${theme.colors.white};
      `
    );
  }};
`;

export const ProductColorAttribute = styled.span`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  display: inline-block;
  opacity: ${(props) => (!props.inStock ? '50%' : '100%')};
  border: 1px solid ${({ theme }) => theme.colors.bunker};
  cursor: pointer;
  background-color: ${(props) =>
    props.color ? props.color : `${({ theme }) => theme.colors.white}`};
  ${({ isSelected, theme }) => {
    return (
      isSelected &&
      css`
        border: 3px solid ${theme.colors.white};
        box-shadow: 0 0 5px ${theme.colors.bunker};
      `
    );
  }};
  svg {
    margin-left: 2px;
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
  background-color: ${({ theme }) => theme.colors.bunker};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
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
  }
`;
