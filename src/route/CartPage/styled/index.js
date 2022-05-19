import styled from 'styled-components';

export const CartPageWrapper = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const CartPageHeader = styled.div`
  margin-bottom: 59px;
  text-transform: uppercase;
`;

export const CartProductItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #e5e5e5;
`;

export const ProductInfoWrapper = styled.div``;

export const ProductCounterWrapper = styled.div`
  display: flex;
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
  height: 203px;
  width: 141px;
`;

export const ProductCartImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
