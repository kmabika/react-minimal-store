import styled,{css} from "styled-components";
import {NavLink} from 'react-router-dom';

export const CategoryWrap = styled.ul`
  min-width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

export const CategoryItemWrap = styled.li`
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  color:  ${({ theme }) => theme.colors.bunker};
  padding: 32px 16px;
  ${({ isSelected, theme }) => {
    return (
      isSelected &&
      css`
      color: ${theme.colors.emerald};
      border-bottom: 2px solid ${theme.colors.emerald};    
    `
    );
  }};
`;
