import styled from 'styled-components';

export const ProductTextAttribute = styled.span`
 border: 1px solid ${props => (props.isSelected ? 'red': '#1D1F22')};
 color: ${props => (props.isSelected ? 'red': '#1D1F22')};
 padding: 5px;
 cursor: pointer;
`;

export const ProductColorAttribute = styled.span`
 border-radius: 50%;
 height: 20px;
 display: inline-block;
 border: 2px solid ${props => (props.isSelected ? 'red': '#1D1F22')};
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

export const ToolTipText = styled("span")({
  visibility: "hidden",
  width: "120px",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px 0",
  position: "absolute",
  zIndex: 1,
  bottom: "150%",
  left: "50%",
  marginLeft: "-60px",
  ":after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent"
  }
});

export const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  ":hover span": {
    visibility: "visible"
  }
});

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
bottom: 10%;
left: 10%;
margin-left: -60px;
${ProductColorAttribute}:hover & {
  visibility: visible;
}
`