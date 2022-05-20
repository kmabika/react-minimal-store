import styled from 'styled-components';

export const CartPageWrapper = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const CartPageHeader = styled.div`
  margin-bottom: 59px;
  text-transform: uppercase;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCounterWrapper = styled.div`
  display: flex;
`;

export const CartProductAttributesWrapper = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
`;

export const ProductCounterBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
`;
export const ProductCounterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: 1px solid var(--clr-bunker);
  background-color: var(--clr-white);
  font-size: 25px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: var(--clr-white);
    background-color: var(--clr-bunker);
  }
`;

export const ProductQuantityWrapper = styled.span`
  margin: 0 auto;
`;

export const ProductCartImgSlideWrapper = styled.div`
  height: 288px;
  width: 200px;
`;

export const ProductCartImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const CartItemsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #e5e5e5;
  width: 100%;
`;

export const CartItemContentWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
`;

export const CartOrderSectionWrapper = styled.div`
  padding-top: 32px;
  border-top: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 88px auto;
  grid-gap: 20px;
`;

export const CartOrderSectionHeader = styled.div``;

export const OrderBtn = styled.button`
  width: 279px;
  height: 43px;
  color: var(--clr-white);
  background-color: var(--clr-emerald);
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: opacity 250ms linear;
  }
`;
