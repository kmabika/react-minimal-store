import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  background-color:  ${({ theme }) => theme.colors.white};
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;

  @media screen and (max-width: 786px) {
    padding: 0rem;
  }

  @media screen and (max-width: 650px) {
    ${({ menuToggle}) =>
      menuToggle
        ? css`
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            z-index: 2000;
          `
        : css`
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2000;
          `}
  }
`;

export const HeaderWrap = styled.div`
min-height: 80px;
position: relative;
display: -webkit-box;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
`;

export const TopMiddleNavBarWrap = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);
`;

export const HeaderLogo = styled.div`
  img {
    @media screen and (max-width: 786px) {
      width: 143px;
      height: auto;
    }
  }
`;

export const TopLeftNavBarWrap = styled.nav`
display: -webkit-box;
display: flex;
-webkit-box-align: center;
align-items: center;
`;


export const TopRightNavBarWrap = styled.div`
display: -webkit-box;
display: flex;
-webkit-box-align: center;
align-items: center;
`;

export const Cart = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;
  min-width: 3rem;
`;
