import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Wrap = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Header = styled.h1`
  color: var(--clr-emerald);
  font-size: 160px;
  line-height: 80px;
`;
export const SubHeader = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 56px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14.4px;
  a {
    color: var(--clr-emerald);
    font-weight: 200;
    margin-left: 4.8px;
    font-size: 14.4px;
    &:hover {
      transition: all 0.5s;
      color: var(--clr-emerald);
      text-decoration: underline;
    }
  }
`;
