import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
`;

export const CartItemContentWrapper = styled.div`
  text-align: left;
  width: 136px;
  margin-right: 18px;
  margin-left: 1px;
`;

export const CartItemAttributesWrapper = styled.div``;

export const CartItemProductNameWrapper = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin: 0px 0px 16px;
`;

export const CartItemProductPriceWrapper = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin: 0px 0px 12px;
`;

export const AttributesItemsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const CartItemCountersWrapper = styled.div`
  display: flex;
`;

export const CounterBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
`;

export const CartItemCounterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--clr-bunker);
  background-color: var(--clr-white);
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: var(--clr-white);
    background-color: var(--clr-bunker);
  }
`;

export const CartItemCountAmount = styled.span`
  margin: 0 auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
`;

export const CartItemImgWrapper = styled.div``;

export const CartItemImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
