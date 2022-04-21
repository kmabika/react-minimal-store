import styled from 'styled-components';

export const ProductDescriptionWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`;

export const ProductImageCarouselWrapper = styled.div`
  display: flex;
  margin-right: 100px;
`;

export const ProductImagesWrapper = styled.div`
  margin-right; 40px;
`;


export const ProductImage = styled.img`
  border: 2px solid transparent;
  opacity: 1;
  height: 80px;
  width: 79px;
  transition: all 250ms linear;
  cursor: pointer;
  &:hover{
    border: 2px solid ${({ theme }) => theme.colors.emerald};
    opacity: 0.6;
    transition: all 250ms linear;
  }
`

export const ProductImageCoverWrapper = styled.div`
  overflow: hidden;
`;

export const ProductCoverImage = styled.img`
  transform-origin: 65% 75%;
  transition: transform 1s, filter 0.5s ease-out;
`;

export const ProductInfoWrapper = styled.aside`
  width: 292px;
  margin-left: 100px;
`;

export const ProductAttributeWrapper = styled.div`
 margin-top: 10px;
 text-transform: uppercase;
`;

export const ProductPriceHeaderWrapper = styled.div`
  margin-top: 2.5em;
  font-family: ${({ theme }) => theme.fonts.robotoCondensed};
  text-transform: uppercase;
`;

export const ProductAttributeButton = styled.button`
  min-width: 63px;
  height: 45px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.bunker};

  color: ${({ theme }) => theme.colors.nero};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.sourceSans};
  font-weight: 400;

  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
`;

export const ProductAttributeButtonWrapper = styled.div`
  margin-bottom: 40px;
`

export const ProductPriceWrapper = styled.div`
  margin-bottom: 10px;
`;

export const AddToCartBtnWrapper = styled.div`
  margin-bottom: 40px;
`;

export const AddToCartBtn = styled.button`
  width: 292px;
  height: 52px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.emerald};
  border: none;

  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;

  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
    transition: opacity 250ms linear;
  }
`;

export const ProductInfoDescriptionWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.roboto};
`