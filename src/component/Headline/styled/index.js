import styled from 'styled-components';

export const HeadlineElement = styled.div`
  width: 100%;
`;

const tag = (props) => (props.typeHeadline ? { as: props.typeHeadline } : { as: 'p' });

const sizeHeadline = (type) => {
  switch (type) {
    case 'h1':
      return { size: 2.5, weight: 400 };
    case 'h2':
      return { size: 1.5, weight: 400 };
    case 'h3':
      return { size: 1.3, weight: 400 };
    case 'h4':
      return { size: 1.2, weight: 400 };
    case 'h5':
      return { size: 1.1, weight: 700 };
    case 'h6':
      return { size: 1, weight: 700 };
    default:
      return { size: 1, weight: 500 };
  }
};

export const HeadlineWrapper = styled(HeadlineElement).attrs(tag)`
  color: var(--clr-bunker);
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}rem` : '150%')};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}rem` : `${sizeHeadline(props.typeHeadline).size}rem`};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : sizeHeadline(props.typeHeadline).weight};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}rem` : '')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}rem` : '')};
`;
