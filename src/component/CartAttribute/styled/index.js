import styled, {css} from 'styled-components';

export const CartItemAttributeBtn = styled.button`
    width: auto;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.bunker};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.fonts.bunker};
    opacity: 1;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.sourceSans};
    font-weight: 400;
    font-size: 14px;
    &:not(last-child) {
           margin-right: 5px;
    }
    ${({ isSelected, theme }) => {
      return (
        isSelected &&
        css`
        border: 1px solid ${theme.colors.darkGray};
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.darkGray};
      `
      );
    }};
`;

export const CartItemColorAttribute = styled.span`
 border-radius: 18px;
 margin-right: 5px;
 height: 20px;
 width: 20px;
 display: inline-block;
 border: 1px solid ${({ theme }) => theme.colors.bunker};
 cursor: pointer;
 background-color: ${props => props.color ? props.color : `${({ theme }) => theme.colors.white};`};
 svg {
   font-size: 0.8rem;
   margin-left: 3px;
   margin-bottom: 3px;
 }
 ${({ isSelected, theme }) => {
  return (
    isSelected &&
    css`
    border: 3px solid ${theme.colors.white};
    box-shadow: 0 0 2px ${theme.colors.bunker};
  `
  );
}};
`

