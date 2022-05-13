import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
  color: ${({ theme }) => theme.colors.emerald};
  font-size: 5rem;
  line-height: 5rem;
`;
export const SubHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 1rem 0rem;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.colors.emerald};
    font-weight: 200;
    margin-left: 0.3rem;
    font-size: 0.9rem;

    &:hover {
      transition: all 0.5s;
      color: ${({ theme }) => theme.colors.emerald};
      text-decoration: underline;
    }
  }
`;