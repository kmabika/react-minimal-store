import styled, { css } from 'styled-components';

export const ProductDescriptionWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
`;

export const ProductImgCarouselWrapper = styled.div`
  display: flex;
  height: 511px;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  margin-right: 40px;
`;

export const ProductImgsWrapper = styled.div`
  margin-right; 40px;
`;

export const ProductImg = styled.img`
  border: 2px solid transparent;
  opacity: 1;
  height: 80px;
  width: 79px;
  transition: all 250ms linear;
  margin-bottom: 1rem;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--clr-emerald);
    opacity: 0.6;
    transition: all 250ms linear;
  }
`;

export const ProductImgCoverWrapper = styled.div`
  overflow: hidden;
`;

export const ProductCoverImg = styled.img`
  width: 610px;
  height: 511px;
  object-fit: contain;
  transform-origin: 65% 75%;
  transition: transform 5s, filter 0.5s ease-out;
`;

export const ProductInfoWrapper = styled.aside`
  width: 292px;
  margin-left: 100px;
`;

export const ProductAttributeWrapper = styled.div`
  margin-top: 43px;
  text-transform: uppercase;
`;

export const ProductPriceHeaderWrapper = styled.div`
  margin-top: 2.5rem;
  font-family: 'Roboto Condensed';
  text-transform: uppercase;
`;

export const ProductAttributeBtn = styled.button`
  min-width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid var(--clr-bunker);

  color: var(--clr-nero);
  background-color: var(--clr-white);

  font-family: 'Source Sans Pro';
  font-weight: 400;

  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
`;

export const ProductAttributeBtnWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const ProductPriceWrapper = styled.div`
  margin-bottom: 10px;
`;

export const AddToCartBtnWrapper = styled.div`
  margin-top: 1.875rem;
`;

export const AddToCartBtn = styled.button`
  width: 292px;
  height: 52px;
  color: var(--clr-white);
  background-color: var(--clr-emerald);
  border: none;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: opacity 250ms linear;
  }
  ${({ inStock }) =>
    !inStock &&
    css`
      color: var(--clr-white);
      background-color: var(--clr-darkgray);
    `};
`;

export const ShowMoreBtn = styled.button`
  width: 100px;
  height: 40px;
  color: var(--clr-white);
  background-color: var(--clr-emerald);
  border: none;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: opacity 250ms linear;
  }
`;

export const ProductInfoDescriptionWrapper = styled.div`
  margin-top: 2.5rem;
  font-family: 'Roboto';
`;
