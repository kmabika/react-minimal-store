import styled from "styled-components";

export const CategoryWrap = styled.ul`
  min-width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  @media screen and (max-width: 992px) {
    min-width: 22.8125rem;
  }
`;

export const CategoryItemWrap = styled.li`
  text-transform: uppercase;
`;
