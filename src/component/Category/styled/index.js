import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoryWrap = styled.ul`
  min-width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  .current {
    li {
      border-bottom: 2px solid var(--clr-bunker);
    }
  }
`;

export const CategoryItemWrap = styled.li`
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--clr-bunker);
  padding: 32px 16px;
  ${({ isselected }) =>
    isselected === 'true' &&
    css`
      color: var(--clr-emerald);
      border-bottom: 2px solid var(--clr-emerald);
    `};
`;
