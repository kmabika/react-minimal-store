import styled from 'styled-components';

export const ProductTextAttribute = styled.span`
 border: 1px solid #000;
 padding: 5px;
 cursor: pointer;
 &:hover{
     border: 1px solid ${({ theme }) => theme.colors.emerald};
     color: ${({ theme }) => theme.colors.emerald};
 }
`;

export const ProductColorAttribute = styled.span`
 border-radius: 50%;
 height: 20px;
 display: inline-block;
 cursor: pointer;
 width: 20px;
 background-color: ${props => props.color ? props.color : "#fff"};
`

export const ProductAttributeWrapper = styled.span`
padding-top: 30px;
> * {
    &:first-child {
       margin-right: 10px;
    }
  }
`;

export const ProductAttributeToolTipWrapper = styled.span`
visibility: hidden;
width: 120px;
background-color: black;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 5px 0;

/* Position the tooltip */
position: absolute;
z-index: 1;
&:hover ${ProductColorAttribute} {
    visibility: visible;
  }
`