import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
  color: ${({ theme }) => theme.colors.bunker};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}rem` : '150%'};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1rem')};
  font-family: ${(props) =>
    props.fontFamily ? `${props.fontFamily}` : 'Raleway'};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}rem` : '0rem'};
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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
