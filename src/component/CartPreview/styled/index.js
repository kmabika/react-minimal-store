import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const CartContainer = styled.section`
  width: 20.3125rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  margin-top: 4.2rem;
  top: 0;
  right: 0;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 100;
`;

export const CartWrap = styled.div`
  max-width: 100%;
  min-height: 5rem;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  b {
      font-weight: 700;
  }
`;
export const CartClearBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.9375rem;
  letter-spacing: 0.05rem;

  &:hover {
    transition: all 0.5s;
    color: ${({ theme }) => theme.colors.emerald};
  }
`;

export const Cart = styled.div`
  height: 15rem;
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin !important;
  scrollbar-color:  ${({ theme }) => theme.colors.emerald} ${({ theme }) => theme.colors.white};
  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
    width: thin;
  }
  &::-webkit-scrollbar-track {
    border-radius:  0.5rem;
    box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.bunker};
  }
  &::-webkit-scrollbar-thumb {
    border-radius:  0.5rem;
    background-color: ${({ theme }) => theme.colors.emerald};
  }
`;

export const CartInnerWrap = styled.div``

export const EmptyCart = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2rem;
  margin-bottom: 1rem;
`;

export const CartDetail = styled.p`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 500;
  line-height: 1.5625rem; 
`;
export const CartAmount = styled.p`
  font-weight: 700;
`;
export const CartButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewBagBtn = styled(NavLink)`
  width: 140px;
  padding: 13px;
  font-size: 14px;
  margin-right: 12px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  opacity: 1;
  transition: opacity 250ms linear;
  border: 1px solid ${({ theme }) => theme.colors.bunker};
  color: ${({ theme }) => theme.colors.bunker};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CheckOutBtn = styled(NavLink)`
width: 140px;
padding: 13px;
font-size: 14px;
font-weight: 600;
line-height: 1.2;
text-transform: uppercase;
text-align: center;
cursor: pointer;
opacity: 1;
transition: opacity 250ms linear;
border: 1px solid transparent;
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.emerald};
}
`;

