import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CartContainer = styled.section`
  width: 325px;
  background-color: var(--clr-white);
  position: absolute;
  margin-top: 70px;
  top: 0;
  right: 0;
  padding: 16px;
  box-sizing: border-box;
  z-index: 100;
`;

export const CartWrap = styled.div`
  max-width: 100%;
  min-height: 80px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartHeading = styled.h3`
  font-size: 16px;
  line-height: 25.6px;
  font-weight: 500;
  text-align: left;
  b {
    font-weight: 700;
    p {
      display: inline;
      font-weight: 500;
    }
  }
`;

export const Cart = styled.div`
  height: 240px;
  width: 100%;
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin !important;
  scrollbar-color: var(--clr-emerald) var(--clr-white);
  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
    width: thin;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    box-shadow: inset 0 0 10px var(--clr-white);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: var(--clr-emerald);
  }
`;

export const CartInnerWrap = styled.div``;

export const EmptyCart = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  margin-bottom: 16px;
`;

export const CartDetail = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 18px;
`;
export const CartAmount = styled.p`
  font-size: 16px;
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
  line-height: 16.8px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  opacity: 1;
  transition: opacity 250ms linear;
  border: 1px solid var(--clr-bunker);
  color: var(--clr-bunker);
  background-color: var(--clr-white);
`;

export const CheckOutBtn = styled(NavLink)`
width: 140px;
padding: 13px;
font-size: 14px;
font-weight: 600;
line-height: 16.8px;
text-transform: uppercase;
text-align: center;
cursor: pointer;
opacity: 1;
transition: opacity 250ms linear;
border: 1px solid transparent;
color: var(--clr-white);
background-color: var(--clr-emerald);
}
`;
