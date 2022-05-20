import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
  color: var(--clr-bunker);
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : '150%')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : 'Raleway')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : '')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '')};
  width: 100%;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : '400')};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  ,
  li {
    list-style: disc outside none;
    margin-top: 5px;
  }
`;
