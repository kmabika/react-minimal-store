import styled from 'styled-components'

export const ProductCardWrapper = styled.li`
    position: relative;
    flex-basis: calc(100% / 3 - 100px);
    margin-left: 40px;
    margin-top: 103px;
    padding: 11px 14px 0px 16px;
    opacity: ${props => props.inStock ? "100%" : "50%"};
    &:hover {
      box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
    }
`;

export const ProductLink = styled.a`
    color: inherit;
`
export const ProductThumb = styled.div`
  position: relative;
  height: 338px;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-file: cover;
  object-position: top;
`;

export const ProductContent = styled.div`
 padding-top: 16px;
 padding-bottom: 16px;
`;

export const ProductCartButton = styled.button`
  position: absolute;
  bottom: 64px;
  right: 30px;

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
`
