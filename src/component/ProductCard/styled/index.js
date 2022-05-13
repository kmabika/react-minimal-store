import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const ProductCardWrapper = styled.li`
    position: relative;
    flex-basis: calc(100% / 3 - 100px);
    margin-top: 103px;
    padding: 11px 14px 0px 16px;
    opacity: ${props => props.inStock ? "100%" : "50%"};
    &:hover {
      box-shadow: 0px 100px 105px 0px rgba(168, 172, 176, 0.19);
      transition: 0.3s ease-in-out;
      transform: scale(1.01, 1.01);
    }
`;

export const ProductLink = styled(NavLink)`
    color: inherit;
    cursor: pointer;
`;

export const ProductThumb = styled.div`
  position: relative;
  height: 338px;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProductImageOutOfStockText = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: #8D8F9A;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
`;

export const ProductContent = styled.div`
 padding-top: 16px;
 padding-bottom: 16px;
`;

export const ProductCartButton = styled.button`
  position: absolute;
  bottom: -25px;
  right: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background-color:  ${({ theme }) => theme.colors.emerald};
  cursor: pointer;
  ${ProductCardWrapper}:hover & {
    display: flex;
  }
  &:hover {
    background-color: #237337;
    transition: all 0.5s;
  }
`

export const ProductSwatchColor = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  margin-right: 12px;
  border-radius: 50%;
  background-color:  ${({ theme }) => theme.colors.emerald};
  cursor: pointer;
`;

export const ProductAttributeText = styled.span`
  border-style: solid;
  border-width: 1px;
  min-width: 30px;
  font-weight: 400;
  display:none;
  width: auto;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
`

export const ProductAttributesWrapper = styled.div`
  display: none;
  padding-top: 3px;
  ${ProductCardWrapper}:hover & {
    display: flex;
  }
`;